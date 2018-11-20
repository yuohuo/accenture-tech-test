import { ENDPOINT_URL, API_TOKEN, PAGES_PER_BATCH, CARDS_PER_PAGE, CARDS_PER_BATCH, THROTTLE_WAIT_TIME } from '../constants'


export const Types = {
  REQUEST_CARDS: 'requestCards',
  REQUEST_CARDS_SUCCESS: 'requestCardsSuccess',
  REQUEST_CARDS_FAILURE: 'requestCardsFailure',
  FETCH_CARDS: 'fetchCards',
  CHANGE_PAGE: 'changePage',
  TOGGLE_CARD: 'toggleCard',
  SET_TOTAL_COUNT: 'setTotalCount'
};

export function requestCards(page, totalCount) {
  return {
    type: Types.REQUEST_CARDS,
    page,
    totalCount,
  };
}

export function requestCardsSuccess(page, json) {
  return {
    type: Types.REQUEST_CARDS_SUCCESS,
    page,
    cards: json,
  };
}

export function requestCardsFailure(error) {
  return {
    type: Types.REQUEST_CARDS_FAILURE,
    error,
  };
}


export function fetchCards(page) {
  
  return (dispatch, getState) => {

    const totalCount = getState().viewer.totalCount;

    const fullUrl = `${ENDPOINT_URL}&page=${parseInt(page / PAGES_PER_BATCH, 10)}&perPage=${CARDS_PER_BATCH}`

    return fetch(
      fullUrl,
      {
        method: 'GET',
        headers: { apiToken: API_TOKEN }
      })
      .then(
        response => {
        if (!response.ok) throw (response);
        const totalCount = response.headers.get('X-Total-Count');
        dispatch(setTotalCount(totalCount))
        return response.json();
        }
      )
      .then(json => {
        
        dispatch(requestCardsSuccess(page, json))
      })
      .catch(error => {
        console.log('An error occurred', error)
        dispatch(requestCardsFailure(error))
      })
  }
}

export function shouldFetchCards(state, page) {
    return (page === 0 || page / PAGES_PER_BATCH >= 1) && !state.cards[page * CARDS_PER_PAGE] // exclude pages 1, 2 and 3 (0 indexed)
  }

export function fetchCardsIfNeeded(page) {
    return (dispatch, getState) => {
      const currentBlockStart = page - page % PAGES_PER_BATCH;
      const nextBlockStart = currentBlockStart + PAGES_PER_BATCH;
  
      // fetch for current block of 4 pages
      if (shouldFetchCards(getState(), currentBlockStart))
        dispatch(fetchCards(currentBlockStart));
  
      // fetch for next block of 4 if not first page
      if (page !== 0 && shouldFetchCards(getState(), nextBlockStart)) {
        dispatch(fetchCards(nextBlockStart));
      }
    }
  }

  export function changePage(page) {
    return (
      dispatch => {
        dispatch(fetchCardsIfNeeded(page));
        dispatch ({
          type: Types.CHANGE_PAGE,
          page
        });
      }
    )
  }

  export function toggleCard(card) {
    return {
      type: Types.TOGGLE_CARD,
      card
    }
  }

  export function setTotalCount(totalCount) {
    return {
      type: Types.SET_TOTAL_COUNT,
      totalCount
    }
  }