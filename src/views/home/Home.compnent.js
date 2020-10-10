import React, { useState, useContext, useEffect } from "react";
import "./Home.component.css";
import Navbar from '../../components/navbar/Navbar.component';
import Book from '../../components/book/Book.component'
import BooksContext from '../../context/books/BooksContext'

const Home = () => {

  const booksContext = useContext(BooksContext);
  const { books, setBooksList } = booksContext;

  const initialState = {
    loading: true
  }
  const [state, setState] = useState(initialState)

  useEffect(() => {
    setBooksList()
    setState({loading: false})
  }, [])

  // console.log('Home books from context', books)

  return (
      <div className="main-container">
        <h1>Bienvenue dans la boutique Henri Pottier</h1>
        <Navbar />
        <div className="books-container">
          {!state.loading ? books.map(item => (
            <Book book={item} key={item.isbn} />
          ))
          :
          <p>Loading...</p>
          }
        </div>
      </div>
  );
};

export default Home;