import React, { useState, useContext, useEffect } from "react";
import "./Cart.component.css";
import BookInCart from '../../components/bookInCart/BookInCart.component'
import Navbar from '../../components/navbar/Navbar.component';
import BooksContext from '../../context/books/BooksContext'
import OffersContext from '../../context/offers/OffersContext'

const Cart = () => {

  const booksContext = useContext(BooksContext);
  const { selectedBooks } = booksContext;

  const offersContext = useContext(OffersContext);
  const { setBestOffer, bestOffer } = offersContext;

  const initialState = {
    totalCart: 0
  };

  const [state, setState] = useState(initialState);
 
  // A chaque fois que le panier change, récupère la liste des livres à envoyer à l'API pour récupérer la meilleure offre + recalcule le total du panier
  useEffect(() => {
    const selectedBooksIds = selectedBooks.map(item => item.book.isbn).join(',')
    const totalCart = selectedBooks.map(item => item.book.price * item.quantity).reduce((acc, curr) => acc + curr, 0)
    setState({totalCart: totalCart})
    setBestOffer(selectedBooksIds, totalCart)
  }, [selectedBooks]);

  return (
      <div className="container-content">
        <h1>Votre panier</h1>
        <Navbar />
        <div className="cart__items">
          {selectedBooks.length > 0 ? selectedBooks.map((item, i) => (
            <BookInCart order={item} key={i} />
          ))
          :
          <p className="cart__empty">Le panier est vide</p>
          }
        </div>
        {selectedBooks.length > 0 ? 
          <div className="cart__total">
            <p className="cart__total-price">
              Total commande : <span className="book__price-tag">{state.totalCart}€</span>
            </p>
            <p className="cart__total-price">
              Total commande après remise : <span className="book__price-tag">{bestOffer}€</span>
            </p>
          </div>
          :
          null
        }
      </div>
  );
};

export default Cart;
