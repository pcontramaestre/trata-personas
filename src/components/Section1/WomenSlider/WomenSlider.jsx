import React from "react";
import "./WomenSlider.css";
import data from "../../../../trataSection01.json";

const WomenSlider = ({ reverseWomenSlider }) => {
  const page10 = data[0].visibilizacion_victimas.page10.onslider;
  const valores = [
    page10.number1,
    page10.number2,
    page10.number3,
    page10.number4,
    page10.number5,
    page10.number6,
    page10.number7,
    page10.number8,
    page10.number9,
  ];
  return (
    <div className="womenslider">
      <h1 className="womenslider__title">{page10.title}</h1>
      <div className="womenslider__graphicconent">
        <div className="womenslider__valores">
          <ul className="womenslider__valores-list">
            {valores.map((e, index) => (
              <li className="womenslider__number" key={index}>
                {e}
              </li>
            ))}
          </ul>
        </div>
        <div className="womenslider__graphic">
          <ul className="womenslider__years">
            <li className="womenslider__years-number">{page10.year1}</li>
            <li className="womenslider__years-number">{page10.year2}</li>
            <li className="womenslider__years-number">{page10.year3}</li>
            <li className="womenslider__years-number">{page10.year4}</li>
          </ul>
          <div className="womenslider__foot">
            <div className="womenslider__foot-one">
              <div className="background__foot-color">
                <div className="background__foot"></div>
                <h2 className="womenslider__foot-text">{page10.foot1}</h2>
              </div>
              <div className="background__foot-color">
                <div className="background__foot two"></div>
                <h2 className="womenslider__foot-text">{page10.foot2}</h2>
              </div>
            </div>
            <div className="womenslider__foot-one">
              <div className="background__foot-color">
                <div className="background__foot three"></div>
                <h2 className="womenslider__foot-text">{page10.foot3}</h2>
              </div>
              <div className="background__foot-color">
                <div className="background__foot four"></div>
                <h2 className="womenslider__foot-text">{page10.foot4}</h2>
              </div>
            </div>
          </div>
        </div>
        <button className="buttonslider onclick" onClick={reverseWomenSlider} />
      </div>
    </div>
  );
};

export default WomenSlider;
