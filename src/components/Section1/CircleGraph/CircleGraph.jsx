import React from "react";
import "./CircleGraph.css";
import data from "../../../../trataSection01.json";
import graphic from "../../../assets/Img-Section01/Page07/graphic.png";

const CircleGraph = () => {
  const page7 = data[0].visibilizacion_victimas.page7;
  return (
    <div className="circlegraph">
      <div className="circlegraph__title-content">
        <h1 className="circlegraph__title">
          {page7.title}
          <small
            className="circlegraph__small"
            dangerouslySetInnerHTML={{ __html: page7.foot_title }}
          />
        </h1>
      </div>
      <div className="circlegraph_graphic">
        <p
          className="circlegraph__p"
          dangerouslySetInnerHTML={{ __html: page7.graphic.text1 }}
        />
        <img className="circlegraph__img" src={graphic} />
        <ul className="circlegraph__percentage">
          <li className="circlegraph__percentage1">
            {page7.graphic.percentaje1}
          </li>
          <li className="circlegraph__percentage2">
            {page7.graphic.percentaje2}
          </li>
          <li className="circlegraph__percentage3">
            {page7.graphic.percentaje3}
          </li>
        </ul>
        <div className="circlegraph__barras">
          <ul className="list__colors">
            <li className="list__color1" />
            <li className="list__color2" />
            <li className="list__color3" />
          </ul>
          <ul className="list__texts">
            <li
              className="list__color-text1"
              dangerouslySetInnerHTML={{ __html: page7.graphic.text2 }}
            />
            <li
              className="list__color-text2"
              dangerouslySetInnerHTML={{ __html: page7.graphic.text3 }}
            />
            <li
              className="list__color-text3"
              dangerouslySetInnerHTML={{ __html: page7.graphic.text4 }}
            />
          </ul>
        </div>
      </div>
    </div>
  );
};

export default CircleGraph;
