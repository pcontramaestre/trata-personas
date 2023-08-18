import React from "react";
import "./PracticasEsclavitud.css";
import hand from "../../../../assets/Img-Section01/Page09/hand.svg";

const PracticasEsclavitud = ({ page11 }) => {
  const page = page11[0].finalidades.page11;
  const esclavitud = [
    { item: page.item1 },
    { item: page.item2 },
    { item: page.item3 },
    { item: page.item4 },
  ];

  return (
    <div className="practicas__esclavitud">
      <h1
        className="practicas__title"
        dangerouslySetInnerHTML={{ __html: page.title }}
      />
      <div className="practicas__container">
        {esclavitud.map((e, index) => (
          <div className="practicas__content">
            <div
              className={`practicas__texts ${
                e.item === "Servidumbre por deudas" || e.item === 
                "Venta de menores para explotación"
                  ? "flex-start"
                  : "flex-end"
              }`}
            >
              <div className={`practicas__item-background ${e.item}}`}>
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
                  src={hand}
                />
              </div>
            </div>
            <p />
          </div>
        ))}
      </div>
    </div>
  );
};

export default PracticasEsclavitud;
