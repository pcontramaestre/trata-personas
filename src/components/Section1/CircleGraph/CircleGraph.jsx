import React, { useLayoutEffect } from "react";
import { gsap } from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import "./CircleGraph.css";
import data from "../../../../trataSection01.json";
import graphic from "../../../assets/Img-Section01/Page07/graphic.png";

const CircleGraph = () => {
  const page7 = data[0].visibilizacion_victimas.page7;

  useLayoutEffect(() => {
    gsap.registerPlugin(ScrollTrigger);
    const scrollTriggerBarGraph = ScrollTrigger.getById("SliderSection01");
    const scrollMap = ScrollTrigger.getById("mapPinned");
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: ".circlegraph", // Cambia el selector si es necesario
        // markers: true,
        start: () => {
          return (
            scrollMap.end -
            scrollMap.start +
            scrollTriggerBarGraph.end -
            scrollTriggerBarGraph.start +
            100 +
            " center"
          );
        },
        end: () => {
          return (
            scrollMap.end -
            scrollMap.start +
            scrollTriggerBarGraph.end -
            scrollTriggerBarGraph.start +
            250 +
            " center"
          );
        },
        scrub: true, // Activa el "scrubbing" para la animación suave
      },
    });

    const tltext = gsap.timeline({
      scrollTrigger: {
        trigger: ".circlegraph",
        duration: 5,
        // markers: true,
        start: () => {
          return (
            scrollTriggerBarGraph.end -
            scrollTriggerBarGraph.start +
            200 +
            " center"
          );
        },
        end: () => {
          return (
            scrollTriggerBarGraph.end -
            scrollTriggerBarGraph.start +
            300 +
            " center"
          );
        },
        scrub: true, // Activa el "scrubbing" para la animación suave
      },
    });

    // Definir la animación aquí
    tl.from(".circlegraph__percentage", { x: -200, opacity: 0 });
    tl.to(".circlegraph__percentage", { x: 0, opacity: 1 });
    tltext.from(".circlegraph__p", { x: -100, opacity: 0 });
    tltext.to(".circlegraph__p", { x: 0, opacity: 1 });
  }, []);

  return (
    <div className="circlegraph">
      <div className="circlegraph__title-content">
        <h1 className="circlegraph__title">
          {page7.title}
          <small
            className="circlegraph__small"
            dangerouslySetInnerHTML={{ __html: page7.foot_title }}
          />
        </h1>
      </div>
      <div className="circlegraph_graphic">
        <p
          className="circlegraph__p"
          dangerouslySetInnerHTML={{ __html: page7.graphic.text1 }}
        />
        <img className="circlegraph__img" src={graphic} />
        <ul className="circlegraph__percentage">
          <li className="circlegraph__percentage1">
            {page7.graphic.percentaje1}
          </li>
          <li className="circlegraph__percentage2">
            {page7.graphic.percentaje2}
          </li>
          <li className="circlegraph__percentage3">
            {page7.graphic.percentaje3}
          </li>
        </ul>
        <div className="circlegraph__barras">
          <ul className="list__colors">
            <li className="list__color1" />
            <li className="list__color2" />
            <li className="list__color3" />
          </ul>
          <ul className="list__texts">
            <li
              className="list__color-text1"
              dangerouslySetInnerHTML={{ __html: page7.graphic.text2 }}
            />
            <li
              className="list__color-text2"
              dangerouslySetInnerHTML={{ __html: page7.graphic.text3 }}
            />
            <li
              className="list__color-text3"
              dangerouslySetInnerHTML={{ __html: page7.graphic.text4 }}
            />
          </ul>
        </div>
      </div>
    </div>
  );
};

export default CircleGraph;
