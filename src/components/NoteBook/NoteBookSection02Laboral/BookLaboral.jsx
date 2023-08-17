import React from "react";
import "./BookLaboral.css";

const BookLaboral = ({ page6 }) => {
  return (
    <div className="NoteBook03__container">
      <div className="NoteBook03">
        <div className="NoteBook03__texts">
          <p
            className="NoteBook03__text1"
            dangerouslySetInnerHTML={{ __html: page6.text1 }}
          ></p>
          <h1 className="NoteBook03__text2">{page6.text2}</h1>
          <h3 className="NoteBook03__text3">{page6.text3}</h3>
        </div>
      </div>
    </div>
  );
};

export default BookLaboral;
