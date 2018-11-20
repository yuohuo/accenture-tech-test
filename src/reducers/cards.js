import { CARDS_PER_PAGE, CARDS_PER_BATCH } from "../constants";

const INITIAL_STATE = [];

const actionToHandler = {
  

  REQUEST_CARDS: (state, action) => {
    let newState = state.slice();
    const { totalCount } = action;
    const firstCardIndex = action.page * CARDS_PER_PAGE;
    const lastCardIndex = Math.min(firstCardIndex + CARDS_PER_BATCH, totalCount - 1); 
    const numOfCards = lastCardIndex - firstCardIndex;
    if (numOfCards <= 0) return newState;
    newState.splice(
      firstCardIndex,
      numOfCards,
      ...Array(lastCardIndex - firstCardIndex).fill({ status: "fetching" })
    );
    return newState;
  },

  REQUEST_CARDS_SUCCESS: (state, action) => {
    let newState = state.slice();
    const { page, cards } = action;
    const numOfCards = cards.length;
    const firstCardIndex = page * CARDS_PER_PAGE;
    const lastCardIndex = page * CARDS_PER_PAGE + numOfCards - 1;
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