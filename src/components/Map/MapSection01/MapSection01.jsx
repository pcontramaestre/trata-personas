import React from "react";
import data from "../../../../trataSection01.json";
import "./MapSection01.css";
import map from "../../../assets/Img-Section01/Page05/CENTROAMERICA.png";
import hand from "../../../assets/Img-Section01/Page05/hand_click.svg";
import hover from "../../../assets/Img-Section01/Page05/hover.png";

const MapSection01 = () => {
  const page5 = data[0].visibilizacion_victimas.page5;
  return (
    <div className="map__section01">
      <h1 className="map__title">{page5.title}</h1>
      <h2 className="map__text1">{page5.text1}</h2>
      <div className="map__content">
        <div className="map__percentage">
          <ul className="percentage__list">
            <li className="percentage1"></li>
            <li className="percentage2"></li>
            <li className="percentage3"></li>
          </ul>
          <ul className="percentage__number">
            <li>{page5.graphic_default.percentage1}</li>
            <li>{page5.graphic_default.percentage2}</li>
            <li>{page5.graphic_default.percentage3}</li>
          </ul>
        </div>
        <div className="mapcontent">
          <img className="map__img" src={map} />
          <img className="map__hoverimg" src={hover} />
        </div>
        <div className="map__foot">
          <img className="map__foot-img" src={hand} />
          <h2 className="map__foot-text">{page5.graphic_default.foot}</h2>
        </div>
      </div>
    </div>
  );
};

export default MapSection01;
