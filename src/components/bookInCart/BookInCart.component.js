import React, { useContext } from "react";
import "./BookInCart.component.css";
import BooksContext from '../../context/books/BooksContext'

const BookInCart = props => {

  const booksContext = useContext(BooksContext);
  const { removeOrderFromCart } = booksContext;

  return (
    <div className="book-cart">
      <div className="book-cart__content">
        <div className="book-cart__order">
          <h3 className="book-cart__title">{props.order.book.title}</h3>
          <span className="book-cart__price">Prix unitaire: {props.order.book.price}€</span>
          <span className="book-cart__quantity">Quantité : {props.order.quantity}</span>
          <span className="book-cart__quantity">Prix total : <span className="book__price-tag">{props.order.book.price * props.order.quantity}€</span></span>
        </div>
        <button className="book-cart__delete" onClick={() => removeOrderFromCart(props.order)}>Supprimer</button>
      </div>
    </div>
  );
};

export default BookInCart;
