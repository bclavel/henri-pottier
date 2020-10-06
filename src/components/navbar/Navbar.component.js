import React from "react";
import { Link } from "react-router-dom";
import "./Navbar.component.css";

const NavBar = () => {

  return (
    <nav className="navbar">
      <div className="navbar-links">
        <Link className="navbar-link" to="/">
          Home
        </Link>
        <Link className="navbar-link" to="/cart">
          Cart
        </Link>
      </div>
    </nav>
  );
};

export default NavBar;
