import React from "react";
import "./Adopcion.css";
import data from "../../../../trataSection02.json";
import BookAdopcion from "../../NoteBook/NoteBookSection02Adopcion/BookAdopcion";
import bebe from "../../../assets/Img-Section02/Page08/children.png";
import Testimonios from "../Testimonios/Testimonios";

const Adopcion = () => {
  const page8 = data[0].finalidades.page8;
  const name1 = page8.text4;
  const name2 = null;
  return (
    <div className="adopcion">
      <div className="adopcion__content">
        <h1 className="adopcion__title">{page8.title}</h1>
        <BookAdopcion page8={page8} />
        <img className="adopcion__img" src={bebe} />
      </div>
      <div className="laboral__testimonios">
        <Testimonios laboral={false} name1={name1} name2={name2} />
      </div>
    </div>
  );
};

export default Adopcion;
