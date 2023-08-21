import React from "react";
import "./BookIlicitas.css";

const BookIlicitas = ({ page12 }) => {
  return (
  
      <div className="NoteBook09">
        <div className="NoteBook09__texts">
          <p
            className="NoteBook09__text1"
            dangerouslySetInnerHTML={{ __html: page12.text1 }}
          ></p>
          <h1 className="NoteBook09__text2">{page12.text2}</h1>
          <h3 className="NoteBook09__text3">{page12.text3}</h3>
        </div>
      </div>

  );
};

export default BookIlicitas;
