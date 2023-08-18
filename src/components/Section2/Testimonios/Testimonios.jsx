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

  console.log(
    testimonios[1].name === null
      ? console.log("es null")
      : console.log("no es null", console.log(testimonios[1].name))
  );

  return (
    <div>
      {testimonios[1].name === null ? (
        <div className="videos__content">
          <div>
            <div className="video__play">
              {laboral ? (
                <h1 className="video__title laboral">{testimonios[0].name}</h1>
              ) : (
                <h1 className="video__title">{testimonios[0].name}</h1>
              )}
              <div className="video__button">
                <img src={play} />
              </div>
            </div>
          </div>
        </div>
      ) : (
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
      )}
    </div>
  );
};

export default Testimonios;
