import React, { useReducer } from "react";
import BooksContext from "./BooksContext";
import BooksReducer from "./BooksReducer";
import { SET_BOOKS_LIST, SET_SELECTED_BOOKS, ADD_ORDER_CART, REMOVE_ORDER_CART } from "../types/types.js";
import { getBooksList } from "../../api/api";

const BooksState = props => {

  const initialState = {
    books: [],
    selectedBooks: []
  };
  
  const [state, dispatch] = useReducer(BooksReducer, initialState);

  // const setSelectedBooks = book => {
  //   const selectedBooks = [...state.selectedBooks, book]
  //   // console.log('Bookstate selectedBooks', selectedBooks)
  //   dispatch({ type: SET_SELECTED_BOOKS, payload: selectedBooks });
  // };

  const addOrderToCart = order => {
    const selectedBooks = [...state.selectedBooks, order]
    // console.log('Bookstate selectedBooks', selectedBooks)
    dispatch({ type: ADD_ORDER_CART, payload: selectedBooks });
  }

  const removeOrderFromCart = order => {
    let selectedBooksTmp = [...state.selectedBooks]
    const index = state.selectedBooks.indexOf(order)
    if (index > -1) selectedBooksTmp.splice(index, 1)
    dispatch({ type: REMOVE_ORDER_CART, payload: selectedBooksTmp });
  }

  const setBooksList = () => {
    getBooksList().then(books => {
      // console.log('Bookstate setBooksList', books)
      dispatch({ type: SET_BOOKS_LIST, payload: books })
    })
  }

  return (
    <BooksContext.Provider
      value={{
        books: state.books,
        selectedBooks: state.selectedBooks,
        // setSelectedBooks,
        setBooksList,
        addOrderToCart,
        removeOrderFromCart
      }}
    >
      {props.children}
    </BooksContext.Provider>
  );
};

export default BooksState;
