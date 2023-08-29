import React from "react";
import "./InfoConsentimiento.css";
import data from "../../../../trataSection01.json";

const InfoConsentimiento = () => {
  const page11 = data[0].visibilizacion_victimas.page11;
  return (
    <div className="videocorett__info">
      <div className="videocorett__info-texts">
        <div className="info__separador" />
        <div className="info__text-content">
          <h1 className="info__title">{page11.title}</h1>
          <p
            className="info__text1"
            dangerouslySetInnerHTML={{ __html: page11.text1 }}
          />
          <h2 className="info__text2">{page11.foot}</h2>
        </div>
      </div>
    </div>
  );
};

export default InfoConsentimiento;
