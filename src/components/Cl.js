import React from "react";
import "./ResumeContent.css";
import cl from "../images/Cover_Letter.jpg";
import Slide from "react-reveal/Slide";
import { Link } from "react-router-dom";

const Cl = () => {
  return (
    <div className="resume-content">
      <div className="resume-content__container">
        <div className="resume-content__header">
          <Slide top>
            <p className="resume-content__title">Cover Letter</p>
            <div className="resume-content__dl">
              <Link
                className="resume-content__download"
                to="./files/Cover_Letter_FarshadJalaliAmeri.pdf"
                target="_blank"
                download
              >
                Download
              </Link>
            </div>
          </Slide>
        </div>
      </div>
      <div>
        <Slide right>
          <img className="resume-content_img" src={cl} alt="cl" />
        </Slide>
      </div>
    </div>
  );
};

export default Cl;
