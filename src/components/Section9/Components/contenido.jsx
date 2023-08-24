import React from "react";
import "./contenido.css";
import fondo1 from '../../../assets/Section9IMG/fondo1.png';

import data from "../../../../trataSection09.json";

function BackgroundComponent() {
  const page1 = data[0].Referencias.page1;
  return (
    <section id="section9" className="container">
      <div className="flex-center flex-column">
        <div id="fondo1" className="fondo-style">
          <img src={fondo1} alt="" />
          <h1 className="style">{page1.title1}</h1>
        </div>
        <div id="fondo2" className="flex-center fondo-style"></div>
        <div id="fondo3" className="flex-center fondo-style"></div>
        <div id="fondo4" className="flex-center fondo-style"></div>
        <div className="square">
          <div className="container-square">
            <div className="cuadro1-style">
              <div className="cuadro1-text">
                <h2 className="cuadro1-title">{page1.squareTitle1}</h2>
                <p className="cuadro1-description">{page1.squareContent1}</p>
              </div>
            </div>
            <div className="cuadro2-style style-hover">
              <div className="cuadro2-text">
                <h2 className="cuadro2-subtitle">{page1.squareTitle2}</h2>
                <p className="cuadro2-description">{page1.squareContent2}</p>
              </div>
            </div>
          </div>
          <div className="container-square">
            <div className="cuadro3-style style-hover">
              <div className="cuadro3-text">
                <h2 className="cuadro3-title">{page1.squareTitle3}</h2>
                <p className="cuadro3-description">{page1.squareContent3}</p>
              </div>
            </div>
            <div className="cuadro4-style style-hover">
              <div className="cuadro4-text">
                <h2 className="cuadro4-title">{page1.squareTitle4}</h2>
                <p className="cuadro4-description">{page1.squareContent4}</p>
              </div>
            </div>
          </div>
          <div className="container-square">
            <div className="cuadro5-style style-hover">
              <div className="cuadro5-text">
                <h2 className="cuadro5-title">{page1.squareTitle5}</h2>
                <p className="cuadro5-description">{page1.squareContent5}</p>
              </div>
            </div>
            <div className="cuadro6-style style-hover">
              <div className="cuadro6-text">
                <h2 className="cuadro6-title">{page1.squareTitle6}</h2>
                <p className="cuadro6-description">{page1.squareContent6}</p>
              </div>
            </div>
          </div>
          <div className="container-square">
            <div className="cuadro7-style style-hover">
              <div className="cuadro7-text">
                <h2 className="cuadro7-title">{page1.squareTitle7}</h2>
                <p className="cuadro7-description">{page1.squareContent7}</p>
              </div>
            </div>
            <div className="cuadro8-style style-hover">
              <div className="cuadro8-text">
                <h2 className="cuadro8-title">{page1.squareTitle8}</h2>
                <p className="cuadro8-description">{page1.squareContent8}</p>
              </div>
            </div>
          </div>
          <div className="container-square">
            <div className="cuadro9-style style-hover">
              <div className="cuadro9-text">
                <h2 className="cuadro9-title">{page1.squareTitle9}</h2>
                <p className="cuadro9-description">{page1.squareContent9}</p>
              </div>
            </div>
            <div className="cuadro10-style style-hover">
              <div className="cuadro10-text">
                <h2 className="cuadro10-title">{page1.squareTitle10}</h2>
                <p className="cuadro10-description">{page1.squareContent10}</p>
              </div>
            </div>
          </div>
          <div className="container-square">
            <div className="cuadro11-style style-hover">
              <div className="cuadro11-text">
                <h2 className="cuadro11-title">{page1.squareTitle11}</h2>
                <p className="cuadro11-description">{page1.squareContent11}</p>
              </div>
            </div>
            <div className="cuadro12-style style-hover">
              <div className="cuadro12-text">
                <h2 className="cuadro12-title">{page1.squareTitle12}</h2>
                <p className="cuadro12-description">{page1.squareContent12}</p>
              </div>
            </div>
          </div>
          <div className="container-square">
            <div className="cuadro13-style style-hover">
              <div className="cuadro13-text">
                <h2 className="cuadro13-title">{page1.squareTitle13}</h2>
                <p className="cuadro13-description">{page1.squareContent13}</p>
              </div>
            </div>
            <div className="cuadro14-style style-hover">
              <div className="cuadro14-text">
                <h2 className="cuadro14-title">{page1.squareTitle14}</h2>
                <p className="cuadro14-description">{page1.squareContent14}</p>
              </div>
            </div>
          </div>
          <div className="container-square">
            <div className="cuadro15-style style-hover">
              <div className="cuadro15-text">
                <h2 className="cuadro15-title">{page1.squareTitle15}</h2>
                <p className="cuadro15-description">{page1.squareContent15}</p>
              </div>
            </div>
            <div className="cuadro16-style style-hover">
              <div className="cuadro16-text">
                <h2 className="cuadro16-title">{page1.squareTitle15}</h2>
                <p className="cuadro16-description">{page1.squareContent15}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default BackgroundComponent;
