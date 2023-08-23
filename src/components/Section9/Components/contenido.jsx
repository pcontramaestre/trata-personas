import React from "react";
import "./contenido.css";
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
import Cuadro13 from "./cuadros/cuadro13";
import Cuadro14 from "./cuadros/cuadro14";
import Cuadro15 from "./cuadros/cuadro15";
import Cuadro16 from "./cuadros/cuadro16";

const BackgroundComponent = () => {
  return (
    <div className="container">
      <div className="flex-center flex-column">
        <div id="fondo1" className="fondo-style">
          <img src="src/components/Section9/Section9IMG/fondo1.png" alt="" />
          <h1 className="style">REFERENCIAS</h1>
        </div>
        <div id="fondo2" className="flex-center fondo-style">
          <img
            src="src/components/Section9/Section9IMG/819f19fbc8d2bf12d848c4a71e828d49.png"
            alt=""
          />
        </div>
        <div id="fondo3" className="flex-center fondo-style"></div>
        <div id="fondo4" className="flex-center fondo-style"></div>
        <div className="square">
          <div className="container-square">
            <Cuadro1 />
            <div className="cuadro2-style style-hover">
              <Cuadro2 />
            </div>
          </div>
          <div className="container-square">
            <div className="cuadro3-style style-hover">
              <Cuadro3 />
            </div>
            <div className="cuadro4-style style-hover">
              <Cuadro4 />
            </div>
          </div>
          <div className="container-square">
            <div className="cuadro5-style style-hover">
              <Cuadro5 />
            </div>
            <div className="cuadro6-style style-hover">
              <Cuadro6 />
            </div>
          </div>
          <div className="container-square">
            <div className="cuadro7-style style-hover">
              <Cuadro7 />
            </div>
            <div className="cuadro8-style style-hover">
              <Cuadro8 />
            </div>
          </div>
          <div className="container-square">
            <div className="cuadro9-style style-hover">
              <Cuadro9 />
            </div>
            <div className="cuadro10-style style-hover">
              <Cuadro10 />
            </div>
          </div>
          <div className="container-square">
            <div className="cuadro11-style style-hover">
              <Cuadro11 />
            </div>
            <div className="cuadro12-style style-hover">
              <Cuadro12 />
            </div>
          </div>
          <div className="container-square">
            <div className="cuadro13-style style-hover">
              <Cuadro13 />
            </div>
            <div className="cuadro14-style style-hover">
              <Cuadro14 />
            </div>
          </div>
          <div className="container-square">
            <div className="cuadro15-style style-hover">
              <Cuadro15/>
            </div>
            <div className="cuadro16-style style-hover">
              <Cuadro16 />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BackgroundComponent;
