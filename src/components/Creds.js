import React from "react";
import "./Creds.css";
import Slide from "react-reveal/Slide";
import W2021 from "../images/W2021.png";
import S2021 from "../images/S2021.png";
import F2021 from "../images/F2021.png";
import W2022 from "../images/W2022.png";
import F2022 from "../images/F2022.png";
import Dean from "../images/Dean.png";

const Creds = () => {
  return (
    <div className="creds">
      <div className="creds__container">
        <div className="creds__header">
          <Slide top>
            <p className="creds__title">Transcripts</p>
          </Slide>
        </div>
        <div className="creds__content">
          <Slide left>
            <div className="creds__img_box">
              <img className="creds__img" src={W2021} alt="W2021" />
              <img className="creds__img" src={S2021} alt="S2021" />
              <img className="creds__img" src={F2021} alt="F2021" />
              <img className="creds__img" src={W2022} alt="W2022" />
              <img className="creds__img" src={F2022} alt="F2022" />
            </div>
          </Slide>
          <Slide top>
            <p className="creds__title">Certificates</p>
          </Slide>
          <Slide right>
            <div className="creds__img_box">
              <img className="creds__img_dean" src={Dean} alt="Dean" />
            </div>
          </Slide>
        </div>
      </div>
    </div>
  );
};

export default Creds;
