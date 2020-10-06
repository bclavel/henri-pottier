import { SET_SELECTED_BOOKS } from "../types/types.js";

export default (state, action) => {
  switch (action.type) {
    case SET_SELECTED_BOOKS:
      return {
        ...state,
        selectedBooks: action.payload
      };
    default:
      return state;
  }
};
