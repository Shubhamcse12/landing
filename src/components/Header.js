// Header.js

import React, { useState } from 'react';
import './Header.css'; 

function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header>
      <nav>
        <div className="logo">
          <a href="/">VERVE</a>
        </div>
        <div className={`menu ${isMenuOpen ? 'open' : ''}`}>
          <ul>
            <li><a href="/">Event List</a></li>
            <li><a href="/">About Us</a></li>
            <li><a href="/">Contact Us</a></li>
          </ul>
        </div>

        <div className={`Signup ${isMenuOpen ? 'open' : ''}`}>
          <ul>
            <li><a href="/">Login</a></li>
            <li><a href="/">Signup</a></li>
          </ul>
        </div>

        <div className={`hamburger ${isMenuOpen ? 'open' : ''}`} onClick={toggleMenu}>
          <div className="bar"></div>
          <div className="bar"></div>
          <div className="bar"></div>
        </div>
      </nav>
    </header>
  );
}

export default Header;
