import React, { useState } from "react";
import logo from "/images/logo.svg";
import cartIcon from "/images/icon-cart.svg";
import profilePics from "/images/image-avatar.png";
import menu from "/images/icon-menu.svg";
import close from "/images/icon-close.svg";

export default function Header() {
  const [menuOpen, setMenuopen] = useState(false);

  function toggleMenu() {
    setMenuopen(prev => !prev);
  }

  return (
    <header className="header">
      <div className="logo-nav-container">
        
      <button className="menu-toggle" onClick={toggleMenu}>
         {!menuOpen ? (
         <img src={menu} alt="menu" />
         ) : (
        <img src={close} alt="close" />
        )     }
      </button> 


        <div className="logo">
          <img src={logo} alt="logo" />
        </div>

        <nav className={`nav ${menuOpen ? "active" : ""}`}>
          <li>Collections</li>
          <li>Men</li>
          <li>Women</li>
          <li>About</li>
          <li>Contact</li>
        </nav>
      </div>

      <div className="profilePics-cart-container">
        <img src={cartIcon} alt="cart" className="cartIcon" />
        <img src={profilePics} alt="profile" className="profilePics" />
      </div>
    </header>
  );
}
