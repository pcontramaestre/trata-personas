import React from "react";
import "./Esclavitud.css";
import data from "../../../../trataSection02.json";
import BookEsclavitud from "../../NoteBook/NoteBookSection02Esclavitud/BookEsclavitud";
// import esclavos from "../../../assets/Img-Section02/Page10/esclavos.png";

const Esclavitud = () => {
  const page10 = data[0].finalidades.page10;
  return (
    <div className="esclavitud">
      <div className="esclavitud__content">
        <h1 className="esclavitud__title">{page10.title}</h1>
        <small className="esclavitud__subtitle">{page10.subtitle}</small>
        <BookEsclavitud page10={page10} />
        {/* <img className="esclavitud__img" src={esclavos} /> */}
        <div className="esclavitud__img"/>
        <div className="esclavitudquemado"/>
      </div>
    </div>
  );
};

export default Esclavitud;
