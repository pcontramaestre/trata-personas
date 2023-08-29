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
      <h2></h2>
      <div>
        <div>porcentajes</div>
        <div className="">grafico</div>
      </div>
      <div>
        <div>niñascolor</div>
        <div>niñoscolor</div>
      </div>
    </div>
  );
};

export default CircleGraphSlider;
