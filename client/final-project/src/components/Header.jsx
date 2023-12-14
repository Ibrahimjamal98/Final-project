import React, { useState } from "react";
import { Link } from "react-router-dom";
import "../style/Header.css";
import newLogo from "../images/newlogo.svg";
import User from "../logo/user.png";
import CartLogo from "../logo/shopping-bag.png";
import DownArrowIcon from "../logo/menu.png";
import "react-slideshow-image/dist/styles.css";
import Search from "../logo/search.png";
import { CiSearch } from "react-icons/ci";

const Header = () => {
  const [isDropdownVisible, setDropdownVisible] = useState(false);

  const toggleDropdown = () => {
    setDropdownVisible(!isDropdownVisible);
  };

  return (
    <div>
      <nav className="navbar">
        <div>
          <Link to="/">
            <img className="logo" src={newLogo} alt="Logo" />
          </Link>
          <ul className="links">
            <li>
              <Link to="/login">
                <div className="user">
                  <img className="user-icon" src={User} alt="User" />
                  <div className="user-text">
                    <p>Welcome</p>
                    <p className="sign-in-text">Sign In / Register</p>
                  </div>
                </div>
              </Link>
            </li>
            <li>
              <Link to="/cart">
                <img className="Cart" src={CartLogo} alt="Cart" />
              </Link>
            </li>
          </ul>
          <div className="searchdiv">
            <input className="search-bar" placeholder="Type to Search" />
            <button className="search-icon-button">
              <CiSearch />
            </button>
          </div>
        </div>
      </nav>
      <div className="dropdown">
        <div className="dropdown-header" onClick={toggleDropdown}>
          <img className="dropdown-icon" src={DownArrowIcon} alt="Down Arrow" />
        </div>
      </div>

      <div className={`overlay ${isDropdownVisible ? "brightness" : ""}`} />

      {isDropdownVisible && (
        <div className="dropdown-content-container">
          <div className="dropdown-content">
            <Link to="/products">Products</Link>
            <Link to="/category2">Category 2</Link>
            <Link to="/category3">Category 3</Link>
          </div>
        </div>
      )}
    </div>
  );
};

export default Header;
