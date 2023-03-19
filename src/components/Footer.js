import "./Footer.css";
import { FaPhone, FaMailBulk, FaLinkedin } from "react-icons/fa";
import { NavLink } from "react-router-dom";
import React from "react";

const Footer = () => {
  return (
    <div className="footer">
      <div className="footer__content">
        <div className="footer__content-left">
          <div className="footer__content-left-phone">
            <h4>
              <FaPhone size={20} style={{ marginRight: "2rem" }} />
              416-8240-843
            </h4>
          </div>
          <div className="footer__content-left-email">
            <h4>
              <FaMailBulk size={20} style={{ marginRight: "2rem" }} />
              f.jalali.ameri@gmail.com
            </h4>
          </div>
        </div>
        <div className="footer__content-right">
          <div className="footer__content-right-socials">
            <NavLink
              target="_blank"
              to="https://www.linkedin.com/in/farshad-jalali-ameri/"
            >
              <FaLinkedin
                size={30}
                style={{ color: "#0072b1", marginRight: "1rem" }}
              />
            </NavLink>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
