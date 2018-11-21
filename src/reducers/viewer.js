import { CARDS_PER_PAGE } from "../constants";

const initialState = {
  totalCount: -1, // card count is -1 before initial load
  totalPage: -1, // page count is calculated when cardCound is changed
  currentPage: 0, // current page indexed to 0
  selectedCard: null, // data of the selected card. null if no card selected,
  error: false
};

const actionToHandler = {
  // Set totalCount and calculate totalPage
  SET_TOTAL_COUNT: (state, action) => {
    const totalCount = action.totalCount;
    return {
      ...state,
      totalCount: parseInt(totalCount, 10),
      totalPage:
      totalCount !== 0 ? parseInt(totalCount / CARDS_PER_PAGE, 10) : 0
    };
  },

  // Set current page, 0 indexed
  CHANGE_PAGE: (state, action) => {
    return { ...state, currentPage: action.page };
  },

  // Set toggled card, return card object
  TOGGLE_CARD: (state, action) => {
    return { ...state, selectedCard: action.card };
  },

  // handle request failure
  REQUEST_CARDS_FAILURE: (state) => {
    return {...state, error: true}
  },

  // handle request status reset
  REQUEST_STATUS_RESET: (state) => {
    return {...state, error: false}
  }
};

const CardScreen = (state = initialState, action) => {
  const handler = actionToHandler[action.type];
  return handler ? handler(state, action) : state;
};

export default CardScreen;
