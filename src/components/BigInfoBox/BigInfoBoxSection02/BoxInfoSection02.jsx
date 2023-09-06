import React from "react";
import data from "../../../../trataSection02.json";
import "./BoxInfoSection02.css";

const BoxInfoSection02 = () => {
  const page14 = data[0].finalidades.page14;
  return (
    <div className="info02__content">
      <div className="info02__texts">
        <div className="info02__text-content">
          <p
            className="info02__text1"
            dangerouslySetInnerHTML={{ __html: page14.text1 }}
          />
          <h5 className="info02__text2">{page14.text2}</h5>
        </div>
      </div>
    </div>
  );
};

export default BoxInfoSection02;
