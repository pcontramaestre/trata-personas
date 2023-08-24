import React from "react";
import "./ExplotacionSexual.css";
import data from "../../../../../trataSection02.json";
import hand from "../../../../assets/Img-Section01/Page09/hand.svg";
import womenloading from "../../../../assets/Img-Section02/Page04/women_loading.png";
import NoteBookSection02 from "../../../NoteBook/NoteBookSection02/NoteBookSection02";
import Testimonios from "../../Testimonios/Testimonios";
import backgroundsexual from "../../../../assets/Img-Section02/Page04/background.png";

const ExplotacionSexual = () => {
  const page4 = data[0].finalidades.page4;
  const name1 = data[0].finalidades.page5.video1;
  const name2 = data[0].finalidades.page5.video2;
  return (
    <div className="explotacion__content">
      <div className="explotacion__container">
        <div className="explotacion__hand">
          <div className="hand__content">
            <img className="hand__img" src={hand} />
            <h2 className="hand__title">{page4.head}</h2>
          </div>
          <h1 className="explotacion__title">{page4.title}</h1>
        </div>
        <div className="explotacion__news">
          <div className="womenloading__content">
            <NoteBookSection02 page4={page4} />
            <img className="womenloading__img" src={womenloading} />
          </div>
        </div>
      </div>
      {/* <img className="background__sexual" src={backgroundsexual} /> */}
      <Testimonios laboral={false} name1={name1} name2={name2} />
      <div className="video__foot" />
    </div>
  );
};

export default ExplotacionSexual;
