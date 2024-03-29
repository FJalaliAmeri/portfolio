import "./ResumeContent.css";
import React from "react";
import resume1 from "../images/Resume1.jpg";
import resume2 from "../images/Resume2.jpg";
import Slide from "react-reveal/Slide";
import { Link } from "react-router-dom";

const ResumeContent = () => {
  return (
    <div className="resume-content">
      <div className="resume-content__container">
        <div className="resume-content__header">
          <Slide top>
            <p className="resume-content__title">Resume</p>
            <div className="resume-content__dl">
              <Link
                className="resume-content__download"
                to="./files/Resume_FarshadJalaliAmeri.pdf"
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
        <Slide left>
          <img className="resume-content_img" src={resume1} alt="resume" />
          <img className="resume-content_img" src={resume2} alt="resume" />
        </Slide>
      </div>
    </div>
  );
};

export default ResumeContent;
