import React, { useState, useContext } from "react";
import "./Book.component.css";
import BooksContext from '../../context/books/BooksContext'

const Book = props => {

  const booksContext = useContext(BooksContext);
  const { addOrderToCart } = booksContext;

  const initialState = {
    book: props.book,
    quantity: 1
  }

  const [order, setOrder] = useState(initialState)

  const shortSynopsis = props.book.synopsis.join(' ').substring(0,300) + '...'

  return (
    <div className="book">
      <img className="book__img" src={props.book.cover} alt="txt" />
      <div className="book__content">
        <h3 className="book__title">{props.book.title}</h3>
        <p className="book__synopsis">{shortSynopsis}</p>
        <p className="book__price">Prix : <span className="book__price-tag">{props.book.price}€</span></p>
        <div className="book__quantity">
          <label className="book__quantity" htmlFor="quantity">Quantité :</label>
          <select name="quantity" className="book__select" onChange={event => setOrder({book: props.book, quantity: event.target.value})}> 
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
        <button className="book__addtocart" onClick={() => addOrderToCart(order)}>Ajouter au panier</button>
      </div>
    </div>
  );
};

export default Book;
