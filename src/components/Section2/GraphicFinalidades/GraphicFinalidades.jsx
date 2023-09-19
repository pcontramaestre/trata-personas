import React, { useLayoutEffect } from "react";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import "./GraphicFinalidades.css";

import data from "../../../../trataSection02.json";

const GraphicFinalidades = () => {
  const page3 = data[0].finalidades.page3.graphic;
  useLayoutEffect(() => {
    gsap.registerPlugin(ScrollTrigger); // Registra ScrollTrigger
    const spaceSlider = ScrollTrigger.getById("SliderSection02");

    // Configura las animaciones
    gsap.from(".finalidadexplotacion", {
      opacity: 0,
      y: 50,
      duration: 1,
      scrollTrigger: {
        // markers: true,
        trigger: ".finalidadexplotacion",
        start: () => {
          return spaceSlider.end - spaceSlider.start + " center";
        },
        end: () => {
          return spaceSlider.end - spaceSlider.start + "bottom 50%";
        },

        scrub: 1,
      },
    });

    gsap.from(".finalidad__filados", {
      opacity: 0,
      y: 50,
      duration: 1,
      scrollTrigger: {
        // markers: true,
        trigger: ".finalidad__filados",
        start: () => {
          return spaceSlider.end - spaceSlider.start + " center";
        },
        end: () => {
          return spaceSlider.end - spaceSlider.start + "bottom 50%";
        },
        scrub: 1,
      },
    });

    gsap.from(".finalidad__filatres", {
    
      opacity: 0,
      y: 50,
      duration: 1,
      scrollTrigger: {
        trigger: ".finalidad__filatres",
        start: () => {
          return spaceSlider.end - spaceSlider.start + "top 75%";
        },
        end: () => {
          return spaceSlider.end - spaceSlider.start + "top 80%";
        },
        scrub: 1,
      },
    });
  }, []); // Asegúrate de que esto solo se ejecute una vez

  return (
    <div className="graphic__finalidad">
      <div className="graphicfinalidad__content">
        <div className="finalidadexplotacion">
          <div className="finalidadexplotacion__content">
            <h1 className="explotaciontitle">{page3.text1}</h1>
            <p className="finalidad__percentagegold">{page3.percentage1}</p>
          </div>
        </div>
        <div className="finalidad__filados">
          <div className="finalidadmendicidad">
            <div className="finalidadmendicidad__content">
              <h1 className="mendicidadtitle">{page3.text2}</h1>
              <p className="mendicidadpercentage">{page3.percentage2}</p>
            </div>
          </div>
          <div className="finalidadilicita">
            <div className="finalidadilicita__content">
              <h1 className="ilicitatitle">{page3.text3}</h1>
              <p className="finalidad__percentagegold">{page3.percentage3}</p>
            </div>
          </div>
          <div className="finalidadeslaboral">
            <div className="finalidadexplotacion__content-laboral">
              <h1 className="explotacion-laboral__title">{page3.text4}</h1>
              <p className="mendicidadpercentage">{page3.percentage4}</p>
            </div>
          </div>
        </div>
        <div className="finalidad__filatres">
          <div className="finalidadotros">
            <div className="finalidadotros__content">
              <h1 className="explotacion-laboral__title">{page3.text5}</h1>
              <p className="mendicidadpercentage">{page3.percentage5}</p>
            </div>
          </div>
          <div className="finalidadmatrimonio">
            <div className="finalidadmatrimonio__content">
              <h1 className="adopciontitle">{page3.text6}</h1>
              <p className="finalidad__percentagegold">{page3.percentage6}</p>
            </div>
          </div>
          <div className="finalidadesclavitud">
            <div className="finalidadesclavitud__content">
              <h1 className="esclavitudtitle">{page3.text7}</h1>
              <p className="mendicidadpercentage">{page3.percentage7}</p>
            </div>
          </div>
          <div className="finalidadesadopcion">
            <div className="finalidadadopcion__content">
              <h1 className="adopciontitle">{page3.text8}</h1>
              <p className="finalidad__percentagegold">{page3.percentage8}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default GraphicFinalidades;
