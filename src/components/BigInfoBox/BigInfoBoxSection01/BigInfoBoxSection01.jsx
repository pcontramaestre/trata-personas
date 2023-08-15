import React from "react";
import data from "../../../../trataSection01.json";
import "./BigInfoBoxSection01.css";

const BigInfoBoxSection01 = () => {
  const page6 = data[0].visibilizacion_victimas.page6;
  return (
    <div className="info__content">
      <div className="info__texts">
        <div className="info__text-content">
          <h1 className="info__title">{page6.title}</h1>
          <p
            className="info__text1"
            dangerouslySetInnerHTML={{ __html: page6.text1 }}
          />
          <h2 className="info__text2">{page6.text2}</h2>
        </div>
      </div>
    </div>
  );
};

export default BigInfoBoxSection01;
