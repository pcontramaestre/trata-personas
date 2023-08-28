import React from "react";
import "./PracticasEsclavitud.css";
import hand from "../../../../assets/Img-Section01/Page09/hand.svg";
import handblanco from "../../../../assets/Img-Section02/Page11/iconoblanco.svg";
// import handblanco from "../../../../assets/Img-Section02/Page11/"

const PracticasEsclavitud = ({ page11 }) => {
  const page = page11[0].finalidades.page11;
  const esclavitud = [
    { item: page.item1, id: 1, itemcontent: page.item1_content },
    { item: page.item2, id: 2, itemcontent: page.item2_content },
    { item: page.item3, id: 3, itemcontent: page.item3_content },
    { item: page.item4, id: 4, itemcontent: page.item4_content },
  ];

  return (
    <div className="practicas__esclavitud">
      <h1
        className="practicas__title"
        dangerouslySetInnerHTML={{ __html: page.title }}
      />
      <div className="practicas__container">
        {esclavitud.map((e, index) => (
          <div className="practicas__content" key={index}>
            <div
              className={`practicas__texts ${
                e.item === "Servidumbre por deudas" ||
                e.item === "Venta de menores para explotación"
                  ? "flex-start"
                  : "flex-end"
              }`}
            >
              <div className={`practicas__item-background ${e.item}k`}>
                <h1
                  className={`practicas__item ${
                    e.item === "Matrimonio servil" ? "blanco" : null
                  }`}
                >
                  {e.item}
                </h1>
                <img
                  className={`${
                    e.item === "Matrimonio servil"
                      ? "img__matrimonio"
                      : "img__comun"
                  }`}
                  src={e.item === "Matrimonio servil" ? handblanco : hand}
                />
              </div>

              <p
                className={`practicashover${e.id} `}
                dangerouslySetInnerHTML={{ __html: e.itemcontent }}
              ></p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default PracticasEsclavitud;
