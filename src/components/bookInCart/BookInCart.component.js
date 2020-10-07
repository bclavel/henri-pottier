import React, { useState, useContext } from "react";
import "./BookInCart.component.css";
import BooksContext from '../../context/books/BooksContext'

const BookInCart = props => {

  const booksContext = useContext(BooksContext);
  const { selectedBooks, removeOrderFromCart } = booksContext;

//   const initialState = {
//     book: null,
//     quantity: 0
//   }

//   const [order, setOrder] = useState(initialState)

  // const handleDeleteOrder = order => {
  //   setSelectedBooks(selectedBooksTmp)
  // }

  return (
    <div className="book-cart">
      <h3 className="book-card__title">{props.order.book.title}</h3>
      <span className="book-card__price">prix: {props.order.book.price}€</span>
      <span className="book-card__quantity">quantité: {props.order.quantity}</span>
      <span className="book-card__quantity">prix total: {props.order.book.price * props.order.quantity}€</span>
      <button className="book-card__addtocart" onClick={() => removeOrderFromCart(props.order)}>Supprimer</button>
    </div>
  );
};

export default BookInCart;
