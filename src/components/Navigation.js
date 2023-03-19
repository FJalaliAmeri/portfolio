import "./Navigation.css";
import React from "react";
import { Link } from "react-router-dom";
import { FaBars, FaTimes, FaHome } from "react-icons/fa";

const Navigation = () => {
  const [touch, setTouch] = React.useState(false);
  const handelTouch = () => {
    setTouch(!touch);
  };
  return (
    <div className="header">
      <Link to="/" className="header__logo">
        <FaHome size={30} />
      </Link>
      <ul className={touch ? "header__nav active" : "header__nav"}>
        <li className="header__nav-item">
          <Link to="/about" className="header__nav-link">
            About
          </Link>
        </li>
        <li className="header__nav-item">
          <Link to="/resume" className="header__nav-link">
            Resume
          </Link>
        </li>
        <li className="header__nav-item">
          <Link to="/coverletter" className="header__nav-link">
            Cover Letter
          </Link>
        </li>
        <li className="header__nav-item">
          <Link to="/credentials" className="header__nav-link">
            Credentials
          </Link>
        </li>
        <li className="header__nav-item">
          <Link to="/projects" className="header__nav-link">
            Projects
          </Link>
        </li>
      </ul>
      <div className="header__nav-hamburger" onClick={handelTouch}>
        {touch ? (
          <FaTimes size={30} onClick={handelTouch} />
        ) : (
          <FaBars size={30} onClick={handelTouch} />
        )}
      </div>
    </div>
  );
};

export default Navigation;
