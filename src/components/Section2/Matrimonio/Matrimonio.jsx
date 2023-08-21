import React from "react";
import "./Matrimonio.css";
import data from "../../../../trataSection02.json";
import matromonio from "../../../assets/Img-Section02/Page09/matrimonio.png";
import BookMatrimonio from "../../NoteBook/NoteBookSection02Matrimonio/BookMatrimonio";

const Matrimonio = () => {
  const page9 = data[0].finalidades.page9;
  return (
    <div className="matrimonio">
      <div className="matrimonio__content">
        <h1 className="matrimonio__title">{page9.title}</h1>
        <BookMatrimonio page9={page9}/>
      </div>
      <img className="matrimonio__img" src={matromonio}/>
    </div>
  );
};

export default Matrimonio;
