import React, { useReducer } from "react";
import BookContext from "./BookContext";
import BookReducer from "./BookReducer";
import { SET_BEST_OFFER, SET_SELECTED_BOOK } from "../types/types.js";
import { getBookList } from "../../API/api";

const OfferState = props => {

  const offers = [];

  const initialState = {
    offers: offers,
    bestOffer: null
  };
  
  const [state, dispatch] = useReducer(OfferReducer, initialState);

  const setBestOffer = offers => {
    dispatch({ type: SET_BEST_OFFER, payload: offers });
  };


  return (
    <OffersContext.Provider
      value={{
        books: state.books,
        setSelectedBook,
      }}
    >
      {props.children}
    </OffersContext.Provider>
  );
};

export default OfferState;
