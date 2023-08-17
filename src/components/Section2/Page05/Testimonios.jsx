import React from "react";
import "./Testimonios.css";
import data from "../../../../trataSection02.json";
3;
import play from "../../../assets/Img-Section02/play_button.png";

const Testimonios = () => {
  const page5 = data[0].finalidades.page5;
  return (
    <div className="videos__content">
      <div className="video__play">
        <h1 className="video__title">{page5.video1}</h1>
        <div className="video__button">
          <img src={play} />
        </div>
      </div>
      <div className="video__play">
        <h1 className="video__title">{page5.video2}</h1>
        <div className="video__button">
          <img src={play} />
        </div>
      </div>
    </div>
  );
};

export default Testimonios;
