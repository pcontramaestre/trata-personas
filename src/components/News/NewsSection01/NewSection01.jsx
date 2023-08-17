import React from "react";
import "./NewSection01.css";
import data from "../../../../trataSection01.json";

const NewSection01 = () => {
  const page8 = data[0].visibilizacion_victimas.page8;
  return (
    <div className="news__content">
      <div className="news__background1">
        <p className="news__p1">
          {page8.news.news1}
          <footer>{page8.news.foot}</footer>
        </p>
      </div>
      <div className="news__background2">
        <p className="news__p2">
          {page8.news.news2}
          <footer>{page8.news.foot}</footer>
        </p>
      </div>
      <div className="news__background3">
        <p className="news__p3">
          {page8.news.news3}
          <footer>{page8.news.foot2}</footer>
        </p>
      </div>
    </div>
  );
};

export default NewSection01;
