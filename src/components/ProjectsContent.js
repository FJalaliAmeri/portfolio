import "./ProjectsContent.css";
import resume from "../images/resume.png";
import employee from "../images/employee.png";
import gbcsport from "../images/gbcsport.png";
import fifsw from "../images/fifsw.jpg";
import Slide from "react-reveal/Slide";
import jj from "../images/jj.png";
import yr from "../images/yr.png";
import React from "react";
import { NavLink } from "react-router-dom";
import { AiFillGithub } from "react-icons/ai";

const ProjectsContent = () => {
  return (
    <div className="projects-content">
      <div className="projects-content__container">
        <div className="projects-content__header">
          <p className="projects-content__title">Projects</p>
        </div>
      </div>
      <Slide right>
        <div className="projects-content__body">
          <div className="projects-content__card">
            <NavLink
              target="_blank"
              to="https://github.com/FJalaliAmeri/FIFSW"
              className="projects-content__card-link"
            >
              <img
                src={fifsw}
                alt="fifsw"
                className="projects-content__card-img"
              />
              <p className="projects-card__title">FIFSW Practicum (Capstone)</p>
              <p className="projects-card__description">
                This is my Capstone Project, this was created using PHP,
                Laravel. This project is a redevelopment of the PAS website form
                the University of Toronto.
              </p>
              <div className="projects-content__card-button">
                <AiFillGithub
                  size={30}
                  className="projects-content__card-icon"
                />
              </div>
            </NavLink>
          </div>
          <div className="projects-content__card">
            <NavLink
              target="_blank"
              to="https://github.com/FJalaliAmeri/Resume"
              className="projects-content__card-link"
            >
              <img
                src={resume}
                alt="resume"
                className="projects-content__card-img"
              />
              <p className="projects-card__title">Resume Application</p>
              <p className="projects-card__description">
                This was my first Resume Application, this was created using
                HTML and CSS.
              </p>
              <div className="projects-content__card-button">
                <AiFillGithub
                  size={30}
                  className="projects-content__card-icon"
                />
              </div>
            </NavLink>
          </div>
          <div className="projects-content__card">
            <NavLink
              target="_blank"
              to="https://github.com/FJalaliAmeri/101303158_COMP3123_Assignment2_ReactJS"
              className="projects-content__card-link"
            >
              <img
                src={employee}
                alt="employee"
                className="projects-content__card-img"
              />
              <p className="projects-card__title">Employee Application</p>
              <p className="projects-card__description">
                This is an Employee Application, this was created using ReactJS,
                Express and MongoDB as the backend.
              </p>
              <div className="projects-content__card-button">
                <AiFillGithub
                  size={30}
                  className="projects-content__card-icon"
                />
              </div>
            </NavLink>
          </div>
          <div className="projects-content__card">
            <NavLink
              target="_blank"
              to="https://github.com/Stan-l-e-y/GBCSporting"
              className="projects-content__card-link"
            >
              <img
                src={gbcsport}
                alt="gbcsport"
                className="projects-content__card-img"
              />
              <p className="projects-card__title">GBC Sporting</p>
              <p className="projects-card__description">
                GBC Sporting was created using .NET Core. Members of the group
                were: Thomas Mundstock, Sarah Sami, Stanley Tsonev, and myself.
              </p>
              <div className="projects-content__card-button">
                <AiFillGithub
                  size={30}
                  className="projects-content__card-icon"
                />
              </div>
            </NavLink>
          </div>
          <div className="projects-content__card">
            <NavLink
              target="_blank"
              to="https://github.com/nguyenlean96/recipe-app.git"
              className="projects-content__card-link"
            >
              <img src={yr} alt="yr" className="projects-content__card-img" />
              <p className="projects-card__title">Your Recipe</p>
              <p className="projects-card__description">
                Your Recipe was created using Spring Boot. Members of the group
                were: Sarah Sami, Angela Efremova, Le An Nguyen, and myself.
              </p>
              <div className="projects-content__card-button">
                <AiFillGithub
                  size={30}
                  className="projects-content__card-icon"
                />
              </div>
            </NavLink>
          </div>
          <div className="projects-content__card">
            <NavLink
              target="_blank"
              to="https://github.com/FJalaliAmeri/J-J-Bakery"
              className="projects-content__card-link"
            >
              <img src={jj} alt="jj" className="projects-content__card-img" />
              <p className="projects-card__title">J&J Donuts</p>
              <p className="projects-card__description">
                J&J Donuts was created using HTML and Css. This website is my
                first mock website of a business.
              </p>
              <div className="projects-content__card-button">
                <AiFillGithub
                  size={30}
                  className="projects-content__card-icon"
                />
              </div>
            </NavLink>
          </div>
        </div>
      </Slide>
    </div>
  );
};

export default ProjectsContent;
