import "./AboutBanner.css";
import profile from "../images/profile.jpeg";
import React from "react";
import Slide from "react-reveal/Slide";
import { FaHtml5 } from "react-icons/fa";

const AboutBanner = () => {
  return (
    <div className="about-banner">
      <Slide top cascade>
        <div className="about-banner__main">
          <img src={profile} alt="profile" className="about-banner__img" />
          <div className="about-banner__text-content">
            <h1 className="about-banner__title">About Me</h1>
            <p className="about-banner__text">
              I am a full stack web developer with a passion for creating
              simple, minimalistic, responsive, and user-friendly websites. I
              have a background in data science and computer programming. I am
              currently looking for a full-time position as a web developer.
            </p>
          </div>
        </div>
        <div className="about-banner__skills">
          <Slide top>
            <h1 className="about-banner__title">Skills</h1>
          </Slide>
          <Slide top>
            <div className="about-banner__skills-content">
              <h4>
                <FaHtml5 size={50} style={{ color: "#e34c26" }} />
                HTML 5
              </h4>
            </div>
          </Slide>
        </div>
      </Slide>
    </div>
  );
};

export default AboutBanner;
