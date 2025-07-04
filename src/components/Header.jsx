// components/Header.jsx
import React from 'react';
import '../Header.css'; // Ensure this CSS file is created (or use index.css if you prefer)

function Header() {
  return (
    <header className="page-header">
      <div className="logo-title">
        <a href="/">
          <img
            src="https://thumbs.dreamstime.com/z/simple-stylish-modern-logo-illustration-house-vector-hand-drawn-element-simple-stylish-modern-logo-illustration-114230332.jpg?ct=jpeg"
            alt="Logo"
            className="logo-image"
          />
        </a>
        <h1 className="site-title">agriTayo</h1>
      </div>
      <nav className="header-nav">
        <a href="#about">About Us</a>
        <a href="#contact">Contact Us</a>
      </nav>
    </header>
  );
}

export default Header;
