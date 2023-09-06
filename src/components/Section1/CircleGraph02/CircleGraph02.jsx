import React, { useState } from "react";
import "./CircleGraph02.css";
import data from "../../../../trataSection01.json";

const CircleGraph02 = ({ toggleSlider }) => {
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
        <div className="circlegraph02__img">
          <div className="circlenumbers__content">
            <div className="numbers__content-circle onepercentage">
              <h1 className="circlegraph02__number">{page9.graphic.number1}</h1>
              <p
                className="circlegraph02__foot"
                dangerouslySetInnerHTML={{ __html: page9.graphic.text1 }}
              />
            </div>
            <div className="numbers__content-circle twopercentage">
              <h1 className="circlegraph02__number">{page9.graphic.number2}</h1>
              <p
                className="circlegraph02__foot"
                dangerouslySetInnerHTML={{ __html: page9.graphic.text2 }}
              />
            </div>
            <div className="numbers__content-circle threepercentage">
              <h1 className="circlegraph02__number">{page9.graphic.number3}</h1>
              <p
                className="circlegraph02__foot"
                dangerouslySetInnerHTML={{ __html: page9.graphic.text3 }}
              />
            </div>
          </div>
        </div>
      </div>
      <div className="circlegraph02__handslider">
        <p
          className="circlegraph02__p"
          dangerouslySetInnerHTML={{ __html: page9.foot }}
        />
        <button onClick={toggleSlider} className="buttonslider" />
      </div>
    </div>
  );
};

export default CircleGraph02;
