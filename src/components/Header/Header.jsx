import React from "react";
import "./Header.css";

const Header = () => {
  return (
    <div className="header-container">
      <div className="header-container_img">
        <div className="header-text">
          <img src="src\assets\Header\header-1.jpg" alt="" />
          <div className="text">VISIBILIZACIÓN DE LAS VÍCTIMAS</div>
        </div>
        <div className="header-text">
          <img src="src\assets\Header\header-2.jpg" alt="" />
          <div className="text">LAS FINALIDADES DE LA TRATA DE PERSONAS</div>
        </div>
        <div className="header-text">
          <img src="src\assets\Header\header-3.jpg" alt="" />
          <div className="text">PROTECCIÓN Y ATENCIÓN A LAS VÍCTIMAS</div>
        </div>
      </div>
      <div className="header-container_img">
        <div className="header-text">
          <img src="src\assets\Header\header-4.png" alt="" />
          <div className="text">PROCURACIÓN DE LA JUSTICIA</div>
        </div>
        <div className="header-text">
          <img src="src\assets\Header\header-5.png" alt="" />
          <div className="text">REPATRIACCIÓN</div>
        </div>
        <div className="header-text">
          <img src="src\assets\Header\header-6.png" alt="" />
          <div className="text">PREVENCIÓN</div>
        </div>
      </div>
      <div className="header-container_img">
      <div className="header-text">
          <img src="src\assets\Header\header-7.png" alt="" />
          <div className="text">ACONTECIMIENTOS DE INTERÉS</div>
        </div>
        <div className="header-text">
          <img src="src\assets\Header\header-8.png" alt="" />
          <div className="text">CRÉDITOS</div>
        </div>
        <div className="header-text">
          <img src="src\assets\Header\header-9.png" alt="" />
          <div className="text">REFERENCIAS</div>
        </div>
      </div>
    </div>
  );
};

export default Header;
