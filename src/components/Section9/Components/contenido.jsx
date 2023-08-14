import React from "react";
import "./contenido.css";
import { Parallax } from "react-parallax";
import Cuadro1 from "./cuadros/cuadro1";
import Cuadro2 from "./cuadros/cuadro2";
import Cuadro3 from "./cuadros/cuadro3";
import Cuadro4 from "./cuadros/cuadro4";
import Cuadro5 from "./cuadros/cuadro5";
import Cuadro6 from "./cuadros/cuadro6";
import Cuadro7 from "./cuadros/cuadro7";
import Cuadro8 from "./cuadros/cuadro8";
import Cuadro9 from "./cuadros/cuadro9";
import Cuadro10 from "./cuadros/cuadro10";
import Cuadro11 from "./cuadros/cuadro11";
import Cuadro12 from "./cuadros/cuadro12";

const BackgroundComponent = () => {
  return (
    <div className="container">
      <div className="flex-center flex-column">
        <div id="fondo1" className="flex-center fondo-style">
          <Cuadro1 />
          <h1 className="style">REFERENCIAS</h1>
        </div>
        <div className="flex-center flex-column"></div>
        <div id="fondo2" className="flex-center fondo-style">
          <div className="cuadro2-style">
            <Cuadro2 />
          </div>
        </div>

        <div id="fondo3" className="flex-center fondo-style">
          <div className="cuadro3-style">
            <Cuadro3 />
          </div>
        </div>

        <div className="cuadro4-style">
          <Cuadro4 />
        </div>

        <div className="cuadro5-style">
          <Cuadro5 />
        </div>

        <div className="cuadro6-style">
          <Cuadro6 />
        </div>

        <div className="cuadro7-style">
          <Cuadro7 />
        </div>
        <div className="cuadro8-style">
          <Cuadro8 />
        </div>

        <div className="cuadro9-style">
          <Cuadro9 />
        </div>
        <div className="cuadro10-style">
          <Cuadro10 />
        </div>
        <div className="cuadro11-style">
          <Cuadro11 />
        </div>
        <div className="cuadro12-style">
          <Cuadro12 />
        </div>
      </div>
    </div>
  );
};

export default BackgroundComponent;
