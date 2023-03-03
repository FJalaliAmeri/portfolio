import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import "./Banner.css";
export const Banner = () => {
  const [loopNum, setLoopNum] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  const [text, setText] = useState("");
  const [delta, setDelta] = useState(100 - Math.random() * 100);
  const titleNames = [
    "Data Scientist",
    "Full Stack Developer",
    "Computer Programmer",
  ];
  const period = 1000;
  const write = () => {
    let i = loopNum % titleNames.length;
    let fullText = titleNames[i];
    let updatedText = isDeleting
      ? fullText.substring(0, text.length - 1)
      : fullText.substring(0, text.length + 1);

    setText(updatedText);

    if (isDeleting) {
      setDelta((prevDelta) => prevDelta / 2);
    }

    if (!isDeleting && updatedText === fullText) {
      setIsDeleting(true);
      setDelta(period);
    } else if (isDeleting && updatedText === "") {
      setIsDeleting(false);
      setLoopNum(loopNum + 1);
      setDelta(500);
    }
  };

  useEffect(() => {
    let writer = setInterval(() => {
      write();
    }, delta);

    return () => {
      clearInterval(writer);
    };
  }, [text]);

  return (
    <div className="banner">
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
    </div>
  );
};

export default Banner;
