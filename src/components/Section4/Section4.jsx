import { useEffect, useLayoutEffect, useRef } from "react";
// import BarGraph from '../BarGraph/BarGraph'
import News from "../News/News";
import SmallInfoBox from "../SmallInfoBox/SmallInfoBox";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import style from "./Section4.module.css";

import data from "../../../troy.json";

import background from "../../assets/Section4/frontPageBackground.png";
import person1 from "../../assets/Section4/frontPagePerson1.png";
import person2 from "../../assets/Section4/frontPagePerson2.png";
import person3 from "../../assets/Section4/frontPagePerson3.png";
import person4 from "../../assets/Section4/frontPagePerson4.png";
import grafico1 from "../../assets/Section4/grafico1.png";
import grafico2 from "../../assets/Section4/grafico2.png";
import grafico3 from "../../assets/Section4/grafico3.png";
import grafico4 from "../../assets/Section4/grafico4.png";
import grafico5 from "../../assets/Section4/grafico5.png";
import infoGif from "../../assets/Instructions/infoGifBlanco1.svg";

const imagesList = {
  background,
  person1,
  person2,
  person3,
  person4,
  grafico1,
  grafico2,
  grafico3,
  grafico4,
  grafico5,
  infoGif,
};

const { lawEnforcement } = data;
const { images, text, news1, news2, smallInfoBox } = lawEnforcement;

function convertSize(input) {
  const n = Number(input.split("px")[0]);
  const r = (n * 100) / 1920 + "vw";
  return r;
}

function Section4() {
  const imgRefs = {};

  const personImages = images.filter((image) => image.name.includes("person"));

  // Crear referencias para las imágenes seleccionadas
  personImages.forEach((image) => {
    imgRefs[image.name] = useRef(null);
  });

  useLayoutEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    personImages.forEach((image) => {
      const imgTl = gsap.timeline({
        scrollTrigger: {
          trigger: imgRefs[image.name].current,
          start: "top center",
          end: "bottom center",
          scrub: true,
          markers: true,
        },
      });

      imgTl.fromTo(
        imgRefs[image.name].current,
        {
          x: "-20%",
        },
        {
          x: "0%",
        }
      );
    });
  }, []);

  useEffect(() => {
    if (smallInfoBox && smallInfoBox.infoGraphic) {
      const icon = document.getElementById("infoGif");
      const div = document.getElementsByName("SmallInfoBoxinfoGif")[0];

      function activeDisplay() {
        div.style.display = "flex";
      }

      function desactiveDisplay() {
        div.style.display = "";
      }

      icon.addEventListener("mouseenter", activeDisplay);
      div.addEventListener("mouseleave", desactiveDisplay);
      return () => {
        icon.removeEventListener("mouseenter", activeDisplay);
        div.removeEventListener("mouseleave", desactiveDisplay);
      };
    }
  }, []);

  const lawEnforcementeBackground = {
    width: convertSize(lawEnforcement.width),
    height: convertSize(lawEnforcement.height),
    backgroundColor: lawEnforcement.backgroundColor,
  };

  const imagesStyles = images.map((image) => ({
    ...image,
    width: convertSize(image.width),
    height: convertSize(image.height),
    top: convertSize(
      Number(image.top.split("px")[0]) -
        Number(lawEnforcement.top.split("px")[0]) +
        "px"
    ),
    left: convertSize(image.left),
  }));

  const textStyles = text.map((texto) => ({
    ...texto,
    top: convertSize(
      Number(texto.top.split("px")[0]) -
        Number(lawEnforcement.top.split("px")[0]) +
        "px"
    ),
    left: convertSize(texto.left),
    width: convertSize(texto.width),
    height: convertSize(texto.height),
    fontSize: convertSize(texto.fontSize),
    lineHeight: texto.lineHeight && convertSize(texto.lineHeight),
  }));

  return (
    <section
      id="section4"
      className={style.LawEnforcementBackground}
      style={lawEnforcementeBackground}
    >
      
      {images.map((image, index) => (
        <img
          id={image.id ? image.id : null}
          src={image && imagesList[image.name]}
          style={imagesStyles[index]}
          className={
            image.name === "infoGif"
              ? style.infoGif
              : style.LawEnforcementImages
          }
          key={image.name + index}
          ref={imgRefs[image.name]}
        />
      ))}
      {text.map((texto, index) => {
        switch (texto.tag) {
          case "h1": {
            return (
              <h1
                className={style.LawEnforcementText}
                style={textStyles[index]}
                key={index}
              >
                {texto.content}
              </h1>
            );
          }
          case "h2": {
            return (
              <h2
                className={style.LawEnforcementText}
                style={textStyles[index]}
                key={index}
              >
                {texto.content}
              </h2>
            );
          }
          case "p": {
            return (
              <p
                dangerouslySetInnerHTML={{ __html: texto.content }}
                className={style.LawEnforcementText}
                style={textStyles[index]}
                key={index}
              />
            );
          }
        }
        return true;
      })}
      {/* <BarGraph /> */}
      <SmallInfoBox
        info={smallInfoBox.infoGraphic}
        topSection={lawEnforcement.top}
      />
      <News news={news1} topSection={lawEnforcement.top} />
      <News news={news2} topSection={lawEnforcement.top} />
    </section>
  );
}

export default Section4;
