import React from "react";
import { Link, useLocation } from "react-router-dom";
import "./Navbar.component.css";

const NavBar = () => {

  let location = useLocation()

  return (
    <nav className="navbar">
      <div className="navbar__links">
        <Link className={`navbar__link ${location.pathname === '/' ? 'active' : null}`} to="/" >
          Accueil
        </Link>
        <Link className={`navbar__link ${location.pathname === '/cart' ? 'active' : null}`} to="/cart">
          Votre panier
        </Link>
      </div>
    </nav>
  );
};

export default NavBar;
