import { SET_BEST_OFFER } from "../types/types.js";

export default (state, action) => {
  switch (action.type) {
    case SET_BEST_OFFER:
      return {
        ...state,
        bestOffer: action.payload
      };
    default:
      return state;
  }
};
