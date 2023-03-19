import "./AboutBanner.css";
import profile from "../images/profile.jpeg";
import React from "react";
import Slide from "react-reveal/Slide";
import html5 from "../images/html-5.svg";
import css3 from "../images/css.svg";
import react from "../images/react.svg";
import php from "../images/php.svg";
import python from "../images/python.svg";
import js from "../images/js.svg";
import mongodb from "../images/mongodb.svg";
import sql from "../images/mysql.svg";
import git from "../images/git.svg";
import swift from "../images/swift.svg";
import java from "../images/java.svg";
import android from "../images/android.svg";
const AboutBanner = () => {
  return (
    <div className="about-banner">
      <div className="about-banner__main">
        <img src={profile} alt="profile" className="about-banner__img" />
        <div className="about-banner__text-content">
          <Slide top>
            <h1 className="about-banner__title">About Me</h1>
            <p className="about-banner__text">
              I am a full stack web developer with a passion for creating
              simple, minimalistic, responsive, and user-friendly websites. I
              have a background in data science and computer programming. I am
              currently looking for a full-time position as a web developer.
            </p>
          </Slide>
        </div>
      </div>
      <div className="about-banner__skills">
        <Slide top>
          <h1 className="about-banner__title">Skills</h1>
        </Slide>
        <div className="about-banner__skills-content">
          <Slide top cascade>
            <div className="about-banner__skills-item">
              <img
                src={html5}
                alt="html5"
                className="about-banner__skills-img"
              />
              <p className="about-banner__skills-text">HTML5</p>
            </div>
            <div className="about-banner__skills-item">
              <img src={css3} alt="css3" className="about-banner__skills-img" />
              <p className="about-banner__skills-text">CSS3</p>
            </div>
            <div className="about-banner__skills-item">
              <img src={js} alt="js" className="about-banner__skills-img" />
              <p className="about-banner__skills-text">JavaScript</p>
            </div>
            <div className="about-banner__skills-item">
              <img
                src={python}
                alt="python"
                className="about-banner__skills-img"
              />
              <p className="about-banner__skills-text">Python</p>
            </div>
            <div className="about-banner__skills-item">
              <img src={java} alt="java" className="about-banner__skills-img" />
              <p className="about-banner__skills-text">Java</p>
            </div>
            <div className="about-banner__skills-item">
              <img
                src={swift}
                alt="swift"
                className="about-banner__skills-img"
              />
              <p className="about-banner__skills-text">Swift</p>
            </div>
            <div className="about-banner__skills-item">
              <img
                src={android}
                alt="android"
                className="about-banner__skills-img"
              />
              <p className="about-banner__skills-text">Android Studio</p>
            </div>
            <div className="about-banner__skills-item">
              <img src={php} alt="php" className="about-banner__skills-img" />
              <p className="about-banner__skills-text">PHP</p>
            </div>
            <div className="about-banner__skills-item">
              <img src={git} alt="git" className="about-banner__skills-img" />
              <p className="about-banner__skills-text">Git</p>
            </div>
            <div className="about-banner__skills-item">
              <img
                src={react}
                alt="react"
                className="about-banner__skills-img"
              />
              <p className="about-banner__skills-text">React</p>
            </div>
            <div className="about-banner__skills-item">
              <img
                src={mongodb}
                alt="mongodb"
                className="about-banner__skills-img"
              />
              <p className="about-banner__skills-text">MongoDB</p>
            </div>
            <div className="about-banner__skills-item">
              <img src={sql} alt="sql" className="about-banner__skills-img" />
              <p className="about-banner__skills-text">SQL</p>
            </div>
          </Slide>
        </div>
      </div>
    </div>
  );
};

export default AboutBanner;
