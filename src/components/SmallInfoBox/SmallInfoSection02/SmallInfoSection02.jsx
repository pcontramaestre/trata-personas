import React from "react";
import "./SmallInfoSection02.css";
import data from "../../../../trataSection02.json";
import infogif from "../../../assets/infoicongif.gif";

const SmallInfoSection02 = () => {
  const page3 = data[0].finalidades.page3;
  return (
    <div className="small__info">
      <h1 className="small__title">{page3.text1}</h1>
      <h5 className="small__foot">{page3.text2}</h5>
      <img className="small__gif" src={infogif} />
    </div>
  );
};

export default SmallInfoSection02;
