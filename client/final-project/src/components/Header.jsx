import { Link } from "react-router-dom";
import "../style/Header.css";
import newLogo from "../images/newlogo.svg";
import User from "../logo/user.png";
import CartLogo from "../logo/shopping-bag.png";
import searchIcon from "../logo/search.png";
import "react-slideshow-image/dist/styles.css";

const Header = () => {
  return (
    <div>
      {/* First Navbar */}
      <nav className="navbar">
        <div>
          <Link to="/">
            <img className="logo" src={newLogo} alt="Logo" />
          </Link>
          <ul className="links">
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/products">Products</Link>
            </li>
            <li>
              <Link to="/about">About Us</Link>
            </li>
            <li>
              <Link to="/contact">Contact</Link>
            </li>
            <Link to="/login">
              <img className="user" src={User} alt="User" />
            </Link>
            <Link to="/cart">
              <img className="Cart" src={CartLogo} alt="Cart" />
            </Link>
          </ul>
        </div>
      </nav>
      <nav className="search-navbar">
        <input className="search-bar" placeholder="Type to Search" />
        <img className="search-icon" src={searchIcon} />
      </nav>
    </div>
  );
};

export default Header;
