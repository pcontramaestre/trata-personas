import React from "react";
import "./BookMedicina.css";

const BookMedicina = ({ page7 }) => {
  return (
    <div className="NoteBook05__container">
      <div className="NoteBook05">
        <div className="NoteBook05__texts">
          <p
            className="NoteBook05__text1"
            dangerouslySetInnerHTML={{ __html: page7.text1 }}
          ></p>
          <h1 className="NoteBook05__text2">{page7.text2}</h1>
          <h3 className="NoteBook05__text3">{page7.text3}</h3>
        </div>
      </div>
    </div>
  );
};

export default BookMedicina;
