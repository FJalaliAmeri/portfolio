import { Link } from "react-router-dom";
import Slide from "react-reveal/Slide";
import { useTypewriter } from "react-simple-typewriter";

import "./Banner.css";
export const Banner = () => {
  const [text] = useTypewriter({
    loop: true,
    delay: 50,
    cursor: "",
    words: [
      "Full Stack Web Developer",
      "Data Scientist",
      "Computer Programmer",
    ],
  });

  return (
    <div className="banner">
      <Slide top cascade>
        <div className="banner__content">
          <h1 className="banner__title">
            Hi, I'm <span className="banner__title-name">Farshad 👨🏻‍💻</span>
          </h1>
          <h2 className="banner__subtitle">
            I'm a <span className="banner__subtitle-text">{text}</span>
          </h2>
          <div className="banner__buttons">
            <Link to="/about" className="banner__button-1">
              About
            </Link>
            <Link to="/resume" className="banner__button-2">
              Resume
            </Link>
            <Link to="/projects" className="banner__button-4">
              Projects
            </Link>
            <Link to="/contact" className="banner__button-3">
              Contact
            </Link>
          </div>
        </div>
      </Slide>
    </div>
  );
};

export default Banner;
