import React from "react";
import "./MedicinaForzada.css";
import data from "../../../../trataSection02.json";
import BookMedicina from "../../NoteBook/NoteBookSection02Medicina/BookMedicina";
import pills from "../../../assets/Img-Section02/Page07/pills.png"


const MedicinaForzada = () => {
  const page7 = data[0].finalidades.page7;
  return (
    <div className="medicina__forzada">
      <div className="medicina__content">
        <h1 className="medicina__title">{page7.title}</h1>
        <BookMedicina page7={page7} />
      </div>
      <img className="pills__img" src={pills}/>
      <div className="medicina__graficoquemado"/>
      {/* <img className="medicina__img" src={background} /> */}
    </div>
  );
};

export default MedicinaForzada;
