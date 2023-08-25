import React from "react";
import "./ExplotacionLaboral.css";
import data from "../../../../../trataSection02.json";
import BookLaboral from "../../../NoteBook/NoteBookSection02Laboral/BookLaboral";
import backgroundpasto from "../../../../assets/Img-Section02/Page06/backgroundpasto.png";
import Testimonios from "../../Testimonios/Testimonios";

const ExplotacionLaboral = () => {
  const page6 = data[0].finalidades.page6;
  const name1 = page6.text4;
  const name2 = page6.text5;

  return (
    <div className="explotacion__laboral">
      <div className="explotacion__laboral-content">
        <h1
          className="laboral__title"
          dangerouslySetInnerHTML={{ __html: page6.title }}
        />
        <BookLaboral page6={page6} />
      </div>
      {/* <img className="laboral__img" src={backgroundpasto} /> */}
      <div className="laboral__testimonios">
        <Testimonios laboral={true} name1={name1} name2={name2} />
      </div>
      <div className="laboralsectiongraphic"></div>
      <div className="laboral__graphicquemado"></div>
    </div>
  );
};

export default ExplotacionLaboral;
