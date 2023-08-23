import "./Corett.css";
import data from "../../../../trataSection08.json";
import React from "react";

const Corett = () => {
  const page2 = data[0].creditos.page2;
  const page3 = data[0].creditos.page3;
  return (
    <div className="corett">
      <div className="corett__container">
        <h3 className="corett__headtext">{page2.head}</h3>
        <h1 className="corett__title">{page2.title}</h1>
        <h3
          className="corett__subtitle"
          dangerouslySetInnerHTML={{ __html: page2.subtitle }}
        />
        <h3 className="corett__foot-text">{page2.foot}</h3>
      </div>
      <div className="corett__foot">
        <h2
          className="corett__foot-title"
          dangerouslySetInnerHTML={{ __html: page3.title }}
        />
      </div>
    </div>
  );
};

export default Corett;
