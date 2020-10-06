import React from 'react';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Navbar from './components/navbar/Navbar.component';
import Footer from './components/footer/Footer.component'
import Home from "./views/home/Home.compnent";
import Cart from "./views/cart/Cart.component";

const App = () => {
  return (
    <Router>
        <Navbar />
        <Switch>
          <Route exact={true} path="/" component={Home} />
          <Route exact={true} path="/cart" component={Cart} />
        </Switch>
        <Footer />
    </Router>
  );
}

export default App;
