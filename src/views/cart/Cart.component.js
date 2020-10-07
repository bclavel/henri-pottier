import React, { useContext } from "react";
import "./Cart.component.css";
import BookInCart from '../../components/bookInCart/BookInCart.component'
import BooksContext from '../../context/books/BooksContext'

const Cart = () => {

  const booksContext = useContext(BooksContext);
  const { selectedBooks } = booksContext;

  console.log('CART selectedBooks >>', selectedBooks)

  return (
      <div className="container-content">
        <h1>Henri Pottier - Cart</h1>
        {selectedBooks.length > 0 ? selectedBooks.map(item => (
          <BookInCart order={item} key={item.book.isbn} />
        ))
        :
        <p>Le panier est vide</p>
        }
      </div>
  );
};

export default Cart;