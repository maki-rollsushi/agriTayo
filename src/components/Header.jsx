import React from "react";
import logo from "../assets/logo.png";

/**
 * Header
 * Displays the main site header with logo and navigation links.
 * Includes anchors to About, Shop, and Help sections.
 */

function Header() {
  return (
    <header className="page-header">
      <div className="logo-title">
        <a href="/">
          <img src={logo} alt="Logo" className="logo-image" />
        </a>
        <h1 className="site-title">
          {" "}
          agri<span className="yellow">Tayo</span>!
        </h1>
      </div>
      <nav className="header-nav">
        <a href="/#about">
          <i className="fa-solid fa-circle-info"></i>{" "}
          <span className="nav-label">ABOUT</span>
        </a>
        <a href="/#marketplace">
          <i className="fa-solid fa-shop"></i>
          <span className="nav-label">SHOP</span>
        </a>
        <a href="/TBPlanted">
          <i className="fa-solid fa-person-circle-question"></i>{" "}
          <span className="nav-label">HELP</span>
        </a>
        {/* <button className="cart-button">
          <i className="fa-solid fa-cart-shopping"></i>
          <span className='nav-label'>CART</span>   
          <span className="cart-bubble">3</span> 
        </button> */}
      </nav>
    </header>
  );
}

export default Header;
