import React from "react";
import "./NoteBookSection02.css";

const NoteBookSection02 = ({ page4 }) => {
  return (
    <div className="NoteBook02__container">
      <div className="NoteBook02">
        <div className="NoteBook02__texts">
          <p
            className="NoteBook02__text1"
            dangerouslySetInnerHTML={{ __html: page4.text1 }}
          ></p>
          <h1 className="NoteBook02__text2">{page4.text2}</h1>
          <h3 className="NoteBook02__text3">{page4.text3}</h3>
        </div>
      </div>
    </div>
  );
};

export default NoteBookSection02;
