import React from "react";
import "./Testimonios.css";
import play from "../../../assets/Img-Section02/play_button.png";

const Testimonios = ({ name1, name2, laboral }) => {
  const testimonios = [
    {
      name: name1,
    },
    {
      name: name2,
    },
  ];

  return (
    <div className="videos__content">
      {testimonios.map((e, index) => (
        <div key={index}>
          <div className="video__play">
            {laboral ? (
              <h1 className="video__title laboral">{e.name}</h1>
            ) : (
              <h1 className="video__title">{e.name}</h1>
            )}
            <div className="video__button">
              <img src={play} />
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Testimonios;
