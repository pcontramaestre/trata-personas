import React from "react";
import "./ActividadesIlicitas.css";
import data from "../../../../trataSection02.json";
import BookIlicitas from "../../NoteBook/NoteBookSecition02ActIlicitas/BookIlicitas";
import act from "../../../assets/Img-Section02/Page12/illegal.png";

const ActividadesIlicitas = () => {
  const page12 = data[0].finalidades.page12;
  return (
    <div className="actividades">
      <div className="actividades__content">
        <h1 className="actividades__title">{page12.title}</h1>
      </div>
      <BookIlicitas page12={page12} />
      <img className="actividades__img" src={act} />
      <div className="ilicitasquemado"/>
    </div>
  );
};

export default ActividadesIlicitas;
