import React from "react";
import "./BookMatrimonio.css";

const BookMatrimonio = ({ page9 }) => {
  return (
    <div className="NoteBook07">
      <div className="NoteBook07__texts">
        <p
          className="NoteBook07__text1"
          dangerouslySetInnerHTML={{ __html: page9.text1 }}
        ></p>
        <h1 className="NoteBook07__text2">{page9.text2}</h1>
        <h3 className="NoteBook07__text3">{page9.text3}</h3>
      </div>
    </div>
  );
};

export default BookMatrimonio;
