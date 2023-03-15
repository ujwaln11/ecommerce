import React, { useState } from "react";
import { Link } from "react-router-dom";
// import "./Header.css"
import "../../App.css";
const Header = (props) => {
    const [search, setsearch] = useState("")
  return (
    <header className="header">
      <div>
        <h1>
          <Link to="/" className="logo">
            E-Commerce Website
          </Link>
        </h1>
      </div>
      <div className="header-Links">
        {/* <ul>
          <li className="search">
            <input
              type="search"
              placeholder="search the product"
              value={search}
              onChange={(e) => {
                setsearch(e.target.value);
              }}
            />
            <Link to={`/search${search}`}>
              <button>Search</button>
            </Link>
          </li>
        </ul> */}
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
        </ul>
        <ul>
          <li>
            <Link to="/products">Products</Link>
          </li>
        </ul>
        <ul>
          <li>
            <Link to="/cart" className="cart">
              <i className="fas fa-shopping-cart">
                {props.cartItems.length === 0 ? (
                  ""
                ) : (
                  <sup>{props.cartItems.length}</sup>
                )}
              </i>
            </Link>
          </li>
        </ul>
      </div>
    </header>
  );
};

export default Header;
