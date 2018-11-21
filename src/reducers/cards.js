import { CARDS_PER_PAGE, CARDS_PER_BATCH } from "../constants";

const INITIAL_STATE = [];

const actionToHandler = {
  
  // Set requested cards to fetching state
  REQUEST_CARDS: (state, action) => {
    let newState = state.slice();
    const { totalCount } = action;
    const firstCardIndex = action.page * CARDS_PER_PAGE;
    // edge case: last batch
    const lastCardIndex = Math.min(firstCardIndex + CARDS_PER_BATCH, totalCount - 1); 
    const numOfCards = lastCardIndex - firstCardIndex;
    if (numOfCards <= 0) return newState;
    newState.splice(
      firstCardIndex,
      numOfCards,
      ...Array(numOfCards).fill({ status: "fetching" })
    );
    return newState;
  },

  // When request cards successfully, append fetched cards to the tail of array cards and update store
  REQUEST_CARDS_SUCCESS: (state, action) => {
    let newState = state.slice();
    const { page, cards } = action;
    const numOfCards = cards.length;
    const firstCardIndex = page * CARDS_PER_PAGE;
    newState.splice(
      firstCardIndex,
      numOfCards,
      ...cards);
    return newState;
  },
  
};

const cards = (state = INITIAL_STATE, action) => {
  const handler = actionToHandler[action.type];
  return handler ? handler(state, action) : state; 
};

export default cards;