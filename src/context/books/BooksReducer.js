import { SET_BOOKS_LIST, ADD_ORDER_CART, REMOVE_ORDER_CART } from "../types/types.js";

export default (state, action) => {
  switch (action.type) {
      case SET_BOOKS_LIST:
        return {
          ...state,
          books: action.payload
        };
      case ADD_ORDER_CART:
        return {
          ...state,
          selectedBooks: action.payload
        };
      case REMOVE_ORDER_CART:
        return {
          ...state,
          selectedBooks: action.payload
        };
    default:
      return state;
  }
};
