import React, { useLayoutEffect, useEffect, useRef } from "react";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import "./BarGraphSection01.css";
import data from "../../../../trataSection01.json";

function BarGraphSection01() {
  const page4 = data[0].visibilizacion_victimas.page4;

  const titleRef = useRef();
  const imageRef = useRef();
  const textsRef = useRef();

  const barGraphRef = useRef();

  useLayoutEffect(() => {
    gsap.to(barGraphRef.current, {
      opacity: 1, // Asegura que el elemento sea visible cuando comience la animación
      scrollTrigger: {
        trigger: barGraphRef.current,
        
        start: "top center", // Inicia las animaciones cuando el inicio del div está en el centro de la vista
        end: "bottom center", // Termina las animaciones cuando el final del div está en el centro de la vista
        scrub: true,
      },
    });

    let tl = gsap.timeline({
      opacity: 1,
      scrollTrigger: {
        trigger: barGraphRef.current,
        start: "top center", // Inicia las animaciones cuando el inicio del div está en el centro de la vista
        end: "bottom center", // Termina las animaciones cuando el final del div está en el centro de la vista
        // pin: true,
        scrub: true,
        // markers: true,
      },
    });

    tl.fromTo(
      titleRef.current,
      {
        x: "-100%",
        opacity: 0,
      },
      {
        x: "0%",
        opacity: 1,
      }
    );

    tl.fromTo(
      imageRef.current,
      {
        y: "100%",
        opacity: 0,
      },
      {
        y: "0%",
        opacity: 1,
      }
    );

    tl.fromTo(
      textsRef.current,
      {
        x: "100%",
        opacity: 0,
      },
      {
        x: "0%",
        opacity: 1,
      }
    );
  }, []);


  return (
    <div className="BarGraph" ref={barGraphRef}>
      <div className="baragraph__graphic">
        <h2 className="bargraph__title"  ref={titleRef}>{page4.graphic.title}</h2>
        <div className="bargraph__image" ref={imageRef}>
          {" "}
          <div className="baragraphcolumns">
            <ul className="baragraph__columns-1">
              <li className="baragraph__column1">{page4.graphic.column1}</li>
              <li className="baragraph__column2">{page4.graphic.column2}</li>
              <li className="baragraph__column3">{page4.graphic.column3}</li>
              <li className="baragraph__column4">{page4.graphic.column4}</li>
            </ul>
          </div>
        </div>
        <ul className="baragraph__years">
          <li>{page4.graphic.year1}</li>
          <li>{page4.graphic.year2}</li>
          <li>{page4.graphic.year3}</li>
          <li>{page4.graphic.year4}</li>
        </ul>
      </div>
      <div className="bargraph__texts" ref={textsRef}>
        <p
          className="bargraph__text1"
          dangerouslySetInnerHTML={{ __html: page4.text1 }}
        />
        <h2 className="bargraph__text2">
          {page4.text2} <br />{" "}
          <small className="bargraph__text3"> {page4.text3}</small>
        </h2>
      </div>
    </div>
  );
}

export default BarGraphSection01;
