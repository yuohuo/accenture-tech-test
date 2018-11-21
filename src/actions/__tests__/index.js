import configureMockStore from 'redux-mock-store'
import thunk from 'redux-thunk'
import fetchMock from 'fetch-mock'
import * as actions from '../index';

const middlewares = [thunk]
const mockStore = configureMockStore(middlewares)

describe('async actions', () => {
  afterEach(() => {
    fetchMock.restore()
  })
  it('creates FETCH_TODOS_SUCCESS when fetching todos has been done', () => {
    fetchMock.getOnce('/cards', {
      body: { cards: [{id: '1'}, {id: '2'}] },
      headers: { 'content-type': 'application/json',
      'Accept': 'application/json',
      'apiToken': 'apiToken'}
    })
    const expectedActions = [
      { type: actions.Types.REQUEST_CARDS, page: 1, totalCount: 100},
      { type: actions.Types.REQUEST_CARDS_SUCCESS, page: 1, cards: [{id: '1'}, {id: '2'}] }
    ]
    const store = mockStore({ cards: [] })
    return store.dispatch(actions.fetchCards()).then(() => {
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
    const cards = [{id: '1'}, {id: '2'}]
    const expectedAction = {
      type: actions.Types.REQUEST_CARDS_SUCCESS,
      page: 1,
      cards
    }
    expect(actions.requestCardsSuccess(1, cards)).toEqual(expectedAction)
  })

  it('should create REQUEST_CARDS_FAILURE action', () => {
    const error = true
    const expectedAction = {
      type: actions.Types.REQUEST_CARDS_FAILURE,
      error,
    }
    expect(actions.requestCardsFailure(error)).toEqual(expectedAction)
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

