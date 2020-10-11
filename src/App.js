import React from 'react';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Footer from './components/footer/Footer.component'
import Home from "./views/home/Home.compnent";
import Cart from "./views/cart/Cart.component";
import BooksState from './context/books/BooksState';
import OffersState from './context/offers/OffersState';

const App = () => {
  return (
    <Router>
      <BooksState>
        <OffersState>
          <Switch>
            <Route exact={true} path="/" component={Home} />
            <Route exact={true} path="/cart" component={Cart} />
          </Switch>
          <Footer />
        </OffersState>
      </BooksState>
    </Router>
  );
};

export default App;
