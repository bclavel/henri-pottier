import { SET_BEST_OFFER, GET_OFFERS } from "../types/types.js";

export default (state, action) => {
  switch (action.type) {
    case SET_BEST_OFFER:
      return {
        ...state,
        bestOffer: action.payload
      };
    case GET_OFFERS:
      return {
        ...state,
        offers: action.payload
      };
    default:
      return state;
  }
};
