import React, { useState, useContext, useEffect } from "react";
import "./Home.component.css";
import BookCard from '../../components/bookCard/BookCard.component'
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
      <div className="container-content">
        <h1>Henri Pottier - Home</h1>
        {!state.loading ? books.map(item => (
           <BookCard book={item} key={item.isbn} />
        ))
        :
        <p>Loading...</p>
        }
      </div>
  );
};

export default Home;