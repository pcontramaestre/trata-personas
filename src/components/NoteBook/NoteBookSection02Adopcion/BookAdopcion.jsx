import React from "react";
import "./BookAdopcion.css";

const BookAdopcion = ({ page8 }) => {
  return (
    <div className="NoteBook06__container">
      <div className="NoteBook06">
        <div className="NoteBook06__texts">
          <p
            className="NoteBook06__text1"
            dangerouslySetInnerHTML={{ __html: page8.text1 }}
          ></p>
          <h1 className="NoteBook06__text2">{page8.text2}</h1>
          <h3 className="NoteBook06__text3">{page8.text3}</h3>
        </div>
      </div>
    </div>
  );
};

export default BookAdopcion;
