import configureMockStore from 'redux-mock-store'
import thunk from 'redux-thunk'
import fetchMock from 'fetch-mock'
import * as actions from '../index';
import { ENDPOINT_URL, PAGES_PER_BATCH, CARDS_PER_BATCH } from '../../constants'


const middlewares = [thunk]
const mockStore = configureMockStore(middlewares)

describe('fetchCards async actions', () => {

  const firstPageToFetch = 5
  const params = `${ENDPOINT_URL}&page=${parseInt(firstPageToFetch / PAGES_PER_BATCH, 10)}&perPage=${CARDS_PER_BATCH}`

  afterEach(() => {
    fetchMock.restore()
  })
  it('creates SET_TOTAL_COUNT, REQUEST_CARDS, REQUEST_CARDS_SUCCESS, REQUEST_STATUS_RESET when fetching cards has been done', () => {
    fetchMock.getOnce(params, {
      body: { cards: [{ id: '1' }, { id: '2' }] },
      headers: {
        'content-type': 'application/json',
        'X-Total-Count': '100',
      }
    })
    const expectedActions = [
      { type: actions.Types.SET_TOTAL_COUNT, totalCount: "100" },
      { type: actions.Types.REQUEST_CARDS, page: 5, totalCount: "100" },
      { type: actions.Types.REQUEST_STATUS_RESET },
      { type: actions.Types.REQUEST_CARDS_SUCCESS, page: 5, cards: { cards: [{ id: '1' }, { id: '2' }] } }
    ]
    const store = mockStore({ cards: [] })
    return store.dispatch(actions.fetchCards(5)).then(() => {
      // return of async actions
      expect(store.getActions()).toEqual(expectedActions)
    })
  })

  it('creates SET_TOTAL_COUNT, REQUEST_CARDS, REQUEST_CARDS_FAILURE, REQUEST_STATUS_RESET when fetching cards has been failed', () => {
    fetchMock.getOnce(params, 404)
    const expectedActions = [
      { type: actions.Types.SET_TOTAL_COUNT, totalCount: null },
      { type: actions.Types.REQUEST_CARDS, page: 5, totalCount: null },
      { type: actions.Types.REQUEST_STATUS_RESET },
      { type: actions.Types.REQUEST_CARDS_FAILURE }
    ]
    const store = mockStore({ cards: [] })
    return store.dispatch(actions.fetchCards(5)).then(() => {
      // return of async actions
      expect(store.getActions()).toEqual(expectedActions)
    })
  })
})

describe('actions', () => {
  it('should create an action to request cards', () => {
    const expectedAction = {
      type: actions.Types.REQUEST_CARDS,
      page: 1,
      totalCount: 100,
    }
    expect(actions.requestCards(1, 100)).toEqual(expectedAction)
  });

  it('should create REQUEST_CARDS_SUCCESS action', () => {
    const cards = [{ id: '1' }, { id: '2' }]
    const expectedAction = {
      type: actions.Types.REQUEST_CARDS_SUCCESS,
      page: 1,
      cards
    }
    expect(actions.requestCardsSuccess(1, cards)).toEqual(expectedAction)
  })

  it('should create REQUEST_CARDS_FAILURE action', () => {
    const expectedAction = {
      type: actions.Types.REQUEST_CARDS_FAILURE,
    }
    expect(actions.requestCardsFailure()).toEqual(expectedAction)
  });

  it('should create REQUEST_STATUS_RESET action', () => {
    const expectedAction = {
      type: actions.Types.REQUEST_STATUS_RESET,
    }
    expect(actions.requestStatusReset()).toEqual(expectedAction)
  });

  it('should create SET_TOTAL_COUNT action', () => {
    const totalCount = 100
    const expectedAction = {
      type: actions.Types.SET_TOTAL_COUNT,
      totalCount,
    }
    expect(actions.setTotalCount(totalCount)).toEqual(expectedAction)
  });

  it('should create TOGGLE_CARD action', () => {
    const card = 5
    const expectedAction = {
      type: actions.Types.TOGGLE_CARD,
      card,
    }
    expect(actions.toggleCard(card)).toEqual(expectedAction)
  });

});

describe('shouldFetchCards', () => {

  it('should return true when initial fetching', () => {
    const state = { cards: [] }
    const firstPageToFetch = 0

    const expectedResult = true
    expect(actions.shouldFetchCards(state, firstPageToFetch)).toEqual(expectedResult)
  });

  it('should return true when page >=4 & first card is empty', () => {
    const state = { cards: [{ id: '1' }, { id: '2' }] }
    const firstPageToFetch = 4

    const expectedResult = true
    expect(actions.shouldFetchCards(state, firstPageToFetch)).toEqual(expectedResult)
  });

  it('should return true when page <4 & page != 0 & first card is empty', () => {
    const state = { cards: [] }
    const firstPageToFetch = 3
    const expectedResult = false
    expect(actions.shouldFetchCards(state, firstPageToFetch)).toEqual(expectedResult)
  });

})

describe('fetchCardsIfNeeded', () => {
  it('should fetch initial batch of pages', () => {
    const currentPageIndex = 0
    const getState = () => ({ cards: [] });
    const dispatch = jest.fn();
    actions.fetchCardsIfNeeded(currentPageIndex)(dispatch, getState);
    expect(dispatch).toHaveBeenCalledTimes(1);
  })
  it('should fetch next batch of pages when not first page', () => {
    const currentPageIndex = 4
    const getState = () => ({ cards: [{ id: '1' }, { id: '2' }] });
    const dispatch = jest.fn();
    actions.fetchCardsIfNeeded(currentPageIndex)(dispatch, getState);
    expect(dispatch).toHaveBeenCalledTimes(1);
  })
})

describe('changePage', () => {
  it('should change page to 0 after initial start', () => {
    const page = 0
    // const getState = () => ({ cards: [] });
    const dispatch = jest.fn();
    actions.changePage(page)(dispatch);
    expect(dispatch).toHaveBeenCalledTimes(2);
    expect(dispatch).toHaveBeenCalledWith({page: 0, type: actions.Types.CHANGE_PAGE});
  })
  it('should change page to 4', () => {
    const page = 4
    // const getState = () => ({ cards: [] });
    const dispatch = jest.fn();
    actions.changePage(page)(dispatch);
    expect(dispatch).toHaveBeenCalledTimes(2);
    expect(dispatch).toHaveBeenCalledWith({page: 4, type: actions.Types.CHANGE_PAGE});
  })
})