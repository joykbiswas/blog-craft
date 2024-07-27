import { useState } from "react";
import logo from "../../../assets/logo.png";
import "./styles.css"; // Import the CSS file
import { BsBlockquoteRight } from "react-icons/bs";
import { NavLink } from "react-router-dom";
const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav>
      <div className="logo">
        <img src={logo}></img>
      </div>
      <ul id="menuList" className={isOpen ? "open" : ""}>
        <li>
          <NavLink to="/">Home</NavLink>
        </li>
        <li>
          <NavLink to="/create-blog">Create Blog</NavLink>
        </li>
        <li>
          <NavLink to="/about">About</NavLink>
        </li>
        <li>
          <a href="">Product</a>
        </li>
      </ul>
      <div onClick={toggleMenu} className="menu-icon">
        <BsBlockquoteRight />
        <i className="fa fa-solid fa fa-bars" onClick={toggleMenu}></i>
      </div>
    </nav>
  );
};

export default Navbar;
