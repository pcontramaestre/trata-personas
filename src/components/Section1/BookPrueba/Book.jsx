import React from "react";
import "./Book.css";
import data from "../../../../trataSection01.json";

const Book = () => {
  const page3 = data[0].visibilizacion_victimas.page3;
  return (
    <div className="bookprueba">
      <div className="book__background">
        <p className="booktext1" dangerouslySetInnerHTML={{ __html: page3.text1 }}></p>
        <h1 className="booktext2">{page3.text2}</h1>
        <h3 className="booktext3">{page3.text3}</h3>
      </div>
    </div>
  );
};

export default Book;
