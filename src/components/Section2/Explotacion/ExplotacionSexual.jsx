import React from "react";
import "./ExplotacionSexual.css";
import data from "../../../../trataSection02.json";
import hand from "../../../assets/Img-Section01/Page09/hand.svg";
import womenloading from "../../../assets/Img-Section02/Page04/women_loading.png";
import NoteBookSection02 from "../../NoteBook/NoteBookSection02/NoteBookSection02";
import Testimonios from "../Page05/Testimonios";

const ExplotacionSexual = () => {
  const page4 = data[0].finalidades.page4;
  return (
    <div className="explotacion__content">
      <div className="explotacion__container">
        <div className="explotacion__hand">
          <img className="hand__img" src={hand} />
          <h2 className="hand__title">{page4.head}</h2>
        </div>
        <div className="explotacion__news">
          <div className="explotacion__news-content">
            <h1 className="explotacion__title">{page4.title}</h1>
            <div className="womenloading__content">
              <NoteBookSection02 page4={page4} />
              <img className="womenloading__img" src={womenloading} />
            </div>
          </div>
        </div>
      </div>
      <Testimonios />
      <div className="video__foot" />
    </div>
  );
};

export default ExplotacionSexual;
