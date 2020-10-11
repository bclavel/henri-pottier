import React, { useReducer } from "react";
import BooksContext from "./BooksContext";
import BooksReducer from "./BooksReducer";
import { SET_BOOKS_LIST, ADD_ORDER_CART, REMOVE_ORDER_CART } from "../types/types.js";
import { getBooksList } from "../../api/api";

const BooksState = props => {

  const initialState = {
    books: [],
    selectedBooks: []
  };
  
  const [state, dispatch] = useReducer(BooksReducer, initialState);

  // Fonction qui récupère le livre et la quantité et l'ajoute au panier
  const addOrderToCart = order => {
    const selectedBooks = [...state.selectedBooks, order];
    dispatch({ type: ADD_ORDER_CART, payload: selectedBooks });
  }

  // Fonction qui récupère index du livre dans le panier et le supprimer
  const removeOrderFromCart = order => {
    let selectedBooksTmp = [...state.selectedBooks];
    const index = state.selectedBooks.indexOf(order);
    if (index > -1) selectedBooksTmp.splice(index, 1);
    dispatch({ type: REMOVE_ORDER_CART, payload: selectedBooksTmp });
  }

  // Fonction qui récupère les livres via l'API et les store dans le context
  const setBooksList = () => {
    getBooksList().then(books => {
      dispatch({ type: SET_BOOKS_LIST, payload: books })
    });
  };

  return (
    <BooksContext.Provider
      value={{
        books: state.books,
        selectedBooks: state.selectedBooks,
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
