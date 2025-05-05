import React from "react";
import "./Navbar.css";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div id="navbar">
      <h1>Swagath Restaurant</h1>
      <div id="navbar_1">
        <Link to="/home">
          <p>Home</p>
        </Link>
        <Link to="/about">
          <p>About</p>
        </Link>
        <Link to="/services">
          <p>Services</p>
        </Link>
        <Link to="/products">
          <p>Items</p>
        </Link>
        <Link to="/food">
          <p>Food_Items</p>
        </Link>
        <Link to="/contact">
          <p>Contact</p>
        </Link>
      </div>
    </div>
  );
};

export default Navbar;
