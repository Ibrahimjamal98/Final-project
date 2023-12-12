import facebooklogo from "../images/facebook-logo-2019.svg";
import watslogo from "../images/whatsapp-logo-transparent.png";
import insta from "../images/insta.png";
import "../style/contact.css";
import { Link } from "react-router-dom";
const Contact = () => {
  return (
    <div className="contact">
      <Link to="https://www.facebook.com/">
        <img className="logo" src={facebooklogo} />
      </Link>

      <Link to="https://www.instagram.com/">
        <img className="logo" src={insta} />
      </Link>
      <Link to="https://www.whatsapp.com/">
        <img className="logo" src={watslogo} />
      </Link>
    </div>
  );
};

export default Contact;
