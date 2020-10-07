import React, { useState, useContext } from "react";
import "./BookCard.component.css";
import BooksContext from '../../context/books/BooksContext'

const BookCard = props => {

  const booksContext = useContext(BooksContext);
  const { addOrderToCart } = booksContext;

  const initialState = {
    book: props.book,
    quantity: 1
  }

  const [order, setOrder] = useState(initialState)

  return (
    <div className="book-card">
      <img className="book-card__img" src={props.book.cover} alt="txt" />
      <h3 className="book-card__title">{props.book.title}</h3>
      <p className="book-card__synopsis">{props.book.synopsis}</p>
      <span className="book-card__price">{props.book.price}€</span>
      <div className="book-card__quantity">
        <label htmlFor="quantity">Quantité</label>
        <select name="quantity" onChange={event => setOrder({book: props.book, quantity: event.target.value})}> 
          <option value="1">1</option>
          <option value="2">2</option>
          <option value="3">3</option>
          <option value="4">4</option>
          <option value="5">5</option>
          <option value="6">6</option>
          <option value="7">7</option>
          <option value="8">8</option>
          <option value="9">9</option>
          <option value="10">10</option>
        </select>
      </div>
      <button className="book-card__addtocart" onClick={() => addOrderToCart(order)}>Ajouter au panier</button>
    </div>
  );
};

export default BookCard;
