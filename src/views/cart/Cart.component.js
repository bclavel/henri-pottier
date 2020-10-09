import React, { useState, useContext, useEffect } from "react";
import "./Cart.component.css";
import BookInCart from '../../components/bookInCart/BookInCart.component'
import BooksContext from '../../context/books/BooksContext'
import OffersContext from '../../context/offers/OffersContext'

const Cart = () => {

  const booksContext = useContext(BooksContext);
  const { selectedBooks } = booksContext;

  const offersContext = useContext(OffersContext);
  const { offers, getOffers, setBestOffer, bestOffer } = offersContext;

  // console.log('CART offers >>', offers)

  const initialState = {
    loading: true,
    totalCart: 0
  }
  const [state, setState] = useState(initialState)

  useEffect(() => {
    if (selectedBooks.length > 0) {
      //  console.log('CART selectedBooks >>', selectedBooks)
      
      // getOffers(selectedBooksIds)
    }
  }, [])
  
  useEffect(() => {
    // console.log('Useffect OFFERS !!', offers)
    const selectedBooksIds = selectedBooks.map(item => item.book.isbn).join(',')
    const totalCart = selectedBooks.map(item => item.book.price * item.quantity).reduce((acc, curr) => acc + curr, 0)
    setState({loading: false, totalCart: totalCart})
    setBestOffer(selectedBooksIds, totalCart)

  }, [selectedBooks])

  return (
      <div className="container-content">
        <h1>Henri Pottier - Cart</h1>
        {selectedBooks.length > 0 ? selectedBooks.map(item => (
          <BookInCart order={item} key={item.book.isbn} />
        ))
        :
        <p>Le panier est vide</p>
        }
        <div className="cart__total">
          <p>
            Total : {state.totalCart} €
          </p>
          <p>
            Total après remise : {bestOffer} €
          </p>
        </div>
      </div>
  );
};

export default Cart;