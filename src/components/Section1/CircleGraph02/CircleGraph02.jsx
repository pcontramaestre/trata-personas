import React from "react";
import "./CircleGraph02.css";
import data from "../../../../trataSection01.json";
import graph from "../../../assets/Img-Section01/Page09/graphic.png";

const CircleGraph02 = () => {
  const page9 = data[0].visibilizacion_victimas.page9;
  return (
    <div className="circlegraph02">
      <div className="circlegraph02__content">
        <div className="circlegraph02__box">
          <h1
            className="circlegraph02__title"
            dangerouslySetInnerHTML={{ __html: page9.title }}
          />
          <h2
            className="circlegraph02__subtitle"
            dangerouslySetInnerHTML={{ __html: page9.subtitle }}
          />
        </div>
        <img className="circlegraph02__img" src={graph} />
      </div>
      <p
        className="circlegraph02__p"
        dangerouslySetInnerHTML={{ __html: page9.foot }}
      />
    </div>
  );
};

export default CircleGraph02;
