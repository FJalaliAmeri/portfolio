import "./ProjectsContent.css";
import placeholder from "../images/placeholder.png";
import React from "react";
import { NavLink } from "react-router-dom";

const ProjectsContent = () => {
  return (
    <div className="projects-content">
      <div className="projects-content__container">
        <div className="projects-content__header">
          <p className="projects-content__title">Projects</p>
        </div>
      </div>
      <div className="projects-content__body">
        <div className="projects-content__card">
          <img
            src={placeholder}
            alt="placeholder"
            className="projects-content__card-img"
          />
          <p className="projects-card__title">Title</p>
          <p className="projects-card__description">Description</p>
          <div className="projects-content__card-button">
            <NavLink
              target="_blank"
              to="https://github.com/FJalaliAmeri/COMP3133_Labs"
              className="projects-content__card-link"
            >
              GitHub Repo
            </NavLink>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectsContent;
