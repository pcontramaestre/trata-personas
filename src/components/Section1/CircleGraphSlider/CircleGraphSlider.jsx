import React from "react";
import "./CircleGraphSlider.css";
import data from "../../../../trataSection01.json";

const CircleGraphSlider = () => {
  const page9 = data[0].visibilizacion_victimas.page9;
  const percentages = page9.onslider;
  const numberPercentage = [
    percentages.percentage0,
    percentages.percentage1,
    percentages.percentage2,
    percentages.percentage3,
    percentages.percentage4,
    percentages.percentage5,
    percentages.percentage6,
    percentages.percentage7,
    percentages.percentage8,
    percentages.percentage9,
    percentages.percentage10,
  ];

  return (
    <div className="CircleGraph__slider">
      <h2 className="CircleGraph__slidertitle">{percentages.title}</h2>
      <div className="CircleGraph__content">
        <div className="CircleGraph__percentages">
          <ul className="CircleGraph__percentageslist">
            {numberPercentage.map((e, index) => (
              <li className="CircleGraph__number" key={index}>
                {e}
              </li>
            ))}
          </ul>
        </div>
        <div className="Circlebarras__slider">
          <div className="circlenino" />
          <div className="circlenina" />
          <div className="Circleninonina__content">
            <div className="ninonina__content-one">
              <div className="ninonina__percentage">
                {percentages.percentage1_niño1}
              </div>
              <div className="ninonina__percentage">
                {percentages.percentage1_niña1}
              </div>
            </div>
            <div className="ninonina__content-two">
              <div className="ninonina__percentage">
                {percentages.percentage1_niño2}
              </div>
              <div className="ninonina__percentage">
                {percentages.percentage1_niña2}
              </div>
            </div>
            <div className="ninonina__content-three">
              <div className="ninonina__percentage">
                {percentages.percentage1_niño3}
              </div>
              <div className="ninonina__percentage">
                {percentages.percentage1_niña3}
              </div>
            </div>
            <div className="ninonina__content-four">
              <div className="ninonina__percentage">
                {percentages.percentage1_niño4}
              </div>
              <div className="ninonina__percentage">
                {percentages.percentage1_niña4}
              </div>
            </div>
          </div>
          <ul className="Circlebarras__years">
            <li className="Circlebarras__years-number">{percentages.year1}</li>
            <li className="Circlebarras__years-number">{percentages.year2}</li>
            <li className="Circlebarras__years-number">{percentages.year3}</li>
            <li className="Circlebarras__years-number">{percentages.year4}</li>
          </ul>
          <div className="Circlebarras__foot">
            <div className="footnino__content">
              <div className="backgroundfoot__nino" />
              <h5 className="ninoninafoot">{page9.onslider.foot1}</h5>
            </div>
            <div className="footnino__content">
              <div className="backgroundfoot__nina"/>
              <h5 className="ninoninafoot">{page9.onslider.foot2}</h5>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CircleGraphSlider;
