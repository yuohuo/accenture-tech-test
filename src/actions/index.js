// import request from '../utils/request';
// import throttle from '../utils/throttle';
import { ENDPOINT_URL, API_TOKEN, PAGES_PER_BATCH, CARDS_PER_PAGE, CARDS_PER_BATCH } from '../constants'

export const Types = {  
  REQUEST_CARDS: 'REQUEST_CARDS',
  REQUEST_CARDS_SUCCESS: 'REQUEST_CARDS_SUCCESS',
  REQUEST_CARDS_FAILURE: 'REQUEST_CARDS_FAILURE',
  FETCH_CARDS: 'FETCH_CARDS',
  SHOULD_FETCH_CARDS: 'SHOULD_FETCH_CARDS',
  FETCH_CARDS_IF_NEEDED: 'FETCH_CARDS_IF_NEEDED',
  REQUEST_STATUS_RESET: 'REQUEST_STATUS_RESET',
  SET_TOTAL_COUNT: 'SET_TOTAL_COUNT',
  CHANGE_PAGE: 'CHANGE_PAGE',
  TOGGLE_CARD: 'TOGGLE_CARD',
};

/**
 * Set cards into fetching state
 *
 * @export
 * @param {number} page first page's index num of this batch (0 indexed)
 * @param {number} totalCount total number of cards in server
 * @returns
 */
export function requestCards(page, totalCount) {
  return {
    type: Types.REQUEST_CARDS,
    page,
    totalCount
  }
}

/**
 * Load card data into store
 *
 * @export
 * @param {number} page first page of block to be loaded into (0 indexed)
 * @param {array} json list of cards to be cached
 * @returns
 */
export function requestCardsSuccess(page, json) {
  return {
    type: Types.REQUEST_CARDS_SUCCESS,
    page,
    cards: json
  }
}

/**
 * handle request cards failure
 *
 * @export
 * @param {boolean} error
 * @returns object
 */
export function requestCardsFailure(error) {
  return {
    type: Types.REQUEST_CARDS_FAILURE,
    error
  }
}
 
/**
 * Handle data fetch
 *
 * @param {number} firstPageToFetch first page's index that app will fetch
 * @returns {object} 
 */
function fetchCards(firstPageToFetch) {
  
  return (dispatch, getState) => {

    const totalCount = getState().viewer.totalCount;
    dispatch(requestCards(firstPageToFetch, totalCount));  //
    dispatch(requestStatusReset())
    const params = `${ENDPOINT_URL}&page=${parseInt(firstPageToFetch / PAGES_PER_BATCH, 10)}&perPage=${CARDS_PER_BATCH}`

    return fetch(
      params,
      {
        method: 'GET',
        headers: { apiToken: API_TOKEN }
      })
      .then(
        response => {
        if (!response.ok) throw (response);
        // console.log(response);
        const totalCount = response.headers.get('X-Total-Count');
        dispatch(setTotalCount(totalCount))
        return response.json();
        }
      )
      .then(json => {
        dispatch(requestCardsSuccess(firstPageToFetch, json))
      })
      .catch(error => {
        console.log('An error occurred', error)
        dispatch(requestCardsFailure(error))
      })
  }
}

/**
 * checks if block isn't loaded or in fetching state
 *
 * @param {object} state
 * @param {number} firstPageToFetch first page of block to be fetched (0 indexed)
 * @returns
 */
function shouldFetchCards(state, firstPageToFetch) {
  return (
    (firstPageToFetch === 0 || firstPageToFetch / PAGES_PER_BATCH >= 1) &&
    !state.cards[firstPageToFetch * CARDS_PER_PAGE]
  );
}

/**
 * check if current or next block needs to be fetched
 *
 * @export
 * @param {number} currentPageIndex current page number (0 indexed)
 * @returns
 */
export function fetchCardsIfNeeded(currentPageIndex) {
  return (dispatch, getState) => {
    const currentBlockStart = currentPageIndex - currentPageIndex % PAGES_PER_BATCH;
    const nextBlockStart = currentBlockStart + PAGES_PER_BATCH;

    // fetch initial batch of pages
    shouldFetchCards(getState(), currentBlockStart) &&
      dispatch(fetchCards(currentBlockStart));

    // fetch next batch of pages if not first page
    (currentPageIndex !== 0 && shouldFetchCards(getState(), nextBlockStart)) &&
      dispatch(fetchCards(nextBlockStart));
  }
}

/**
 * handle request status reset
 *
 * @export 
 * @returns object
 */
export function requestStatusReset() {
  return {
    type: Types.REQUEST_STATUS_RESET
  }
}

/**
 * Set total cards count in server
 *
 * @export
 * @param {number} totalCount total cards count in server
 * @returns object
 */
export function setTotalCount(totalCount) {
  return {
    type: Types.SET_TOTAL_COUNT,
    totalCount
  }
}

/**
 * Set current page index
 *
 * @export
 * @param {number} page current page's index (0 indexed)
 * @returns object
 */
export function changePage(page) {
  return (
    dispatch => {
      // console.log('Action CHANGE_PAGE started...............');
      dispatch(fetchCardsIfNeeded(page));
      dispatch ({
        type: Types.CHANGE_PAGE,
        page
      });
    }
  )
}

/**
 * Set toggled card to show in details panel
 *
 * @export
 * @param {number} card index of toggled card
 * @returns
 */
export function toggleCard(card) {
  return {
    type: Types.TOGGLE_CARD,
    card
  }
}
