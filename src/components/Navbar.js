// src/components/Navbar.js
import React from 'react';
import './Navbar.css'; // If you decide to use component-level CSS

const Navbar = () => {
  return (
    <header>
      <a href="#" className="logo">znamNEznam<span>.</span></a>
      <div className="bx bx-menu" id="menu-icon"></div>
      <ul className="navbar">
        <li><a href="#">Home</a></li>
        <li><a href="#">Prijava</a></li>
        <li><a href="#">O nas</a></li>
        <li><a href="#">Contact</a></li>
      </ul>
      <button id="dark-mode-toggle" className="dark-mode-button">🌙</button>
    </header>
  );
};

export default Navbar;
