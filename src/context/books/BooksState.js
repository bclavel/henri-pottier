import React, { useReducer } from "react";
import BookContext from "./BookContext";
import BookReducer from "./BookReducer";
import { SET_SELECTED_BOOK } from "../types/types.js";
import { getBookList } from "../../API/api";

const BookState = props => {

  const books = [];

  const initialState = {
    books: books,
    selectedBooks: []
  };
  
  const [state, dispatch] = useReducer(BookReducer, initialState);

  const setSelectedBook = book => {
    dispatch({ type: SET_SELECTED_BOOK, payload: book });
  };


  return (
    <BookContext.Provider
      value={{
        books: state.books,
        setSelectedBook,
      }}
    >
      {props.children}
    </BookContext.Provider>
  );
};

export default BookState;
