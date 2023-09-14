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
import grafico3 from "../../assets/Section4/grafico3.png";
import grafico4 from "../../assets/Section4/grafico4.png";
import grafico5 from "../../assets/Section4/grafico5.png";
import grafico2 from "../../assets/Section4/grafico2.png";
import infoGif from "../../assets/Section3/infoGifVerdeOscuro1.png";
import row1 from "../../assets/Section4/1-otros.png";
import row2 from "../../assets/Section4/2-eslavitud.png";
import row3 from "../../assets/Section4/3-mendicidad.png";
import row4 from "../../assets/Section4/4-adopción.png";
import row5 from "../../assets/Section4/5-explotacion.png";
import row6 from "../../assets/Section4/6-explotacionsexual.png";

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
  const textRef = useRef(null);
  const textRef2 = useRef(null);
  const textRef3 = useRef(null);

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
          end: "center center",
          scrub: true,
          // markers: true,
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

    const imgTl2 = gsap.timeline({
      scrollTrigger: {
        trigger: textRef3.current,
        start: "top center", // Inicia la animación cuando el componente está en el centro de la vista
        end: "center center", // Termina la animación cuando el componente está completamente fuera de la vista
        scrub: true, // Hace que la animación sea suave mientras se desplaza
        // markers: true, // Muestra marcadores de ScrollTrigger para depuración
      },
    });

    imgTl2.fromTo(
      textRef3.current,
      {
        x: "100%", // Mueve el elemento hacia la izquierda al 100% de su ancho
        opacity: 0, // Inicialmente establece la opacidad en 0 para que aparezca gradualmente
      },
      {
        x: "0%", // Lleva el elemento a su posición original (0%)
        opacity: 1, // Establece la opacidad en 1 para que sea completamente visible
      }
    );

    // Animations for text
    const textTl = gsap.timeline({
      scrollTrigger: {
        trigger: textRef.current,
        start: "top center", // Inicia la animación cuando el componente está en el centro de la vista
        end: "center center", // Termina la animación cuando el componente está completamente fuera de la vista
        scrub: true, // Hace que la animación sea suave mientras se desplaza
        // markers: true, // Muestra marcadores de ScrollTrigger para depuración
      },
    });

    textTl.fromTo(
      textRef.current,
      {
        x: "100%", // Mueve el elemento hacia la izquierda al 100% de su ancho
        opacity: 0, // Inicialmente establece la opacidad en 0 para que aparezca gradualmente
      },
      {
        x: "0%", // Lleva el elemento a su posición original (0%)
        opacity: 1, // Establece la opacidad en 1 para que sea completamente visible
      }
    );
    // Animations for text2
    const textTl2 = gsap.timeline({
      scrollTrigger: {
        trigger: textRef2.current,
        start: "top center", // Inicia la animación cuando el componente está en el centro de la vista
        end: "center center", // Termina la animación cuando el componente está completamente fuera de la vista
        scrub: true, // Hace que la animación sea suave mientras se desplaza
        // markers: true, // Muestra marcadores de ScrollTrigger para depuración
      },
    });

    textTl2.fromTo(
      textRef2.current,
      {
        x: "-100%", // Mueve el elemento hacia la izquierda al 100% de su ancho
        opacity: 0, // Inicialmente establece la opacidad en 0 para que aparezca gradualmente
      },
      {
        x: "0%", // Lleva el elemento a su posición original (0%)
        opacity: 1, // Establece la opacidad en 1 para que sea completamente visible
      }
    );
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

  const animationText2 = data.protectionAndCare.animationText2;

  return (
    <section
      id="section4"
      className={style.LawEnforcementBackground}
      style={lawEnforcementeBackground}
    >
      <div className={style.animationText2} ref={textRef}>
        <p className={style.text5}>{animationText2.text5} </p>
        <p className={style.text5}>
          <strong className={style.textStrong}>
            {animationText2.textStrong}
          </strong>{" "}
          {animationText2.text8}
        </p>

        <h2 className={style.text7}>{animationText2.text7}</h2>
        <p className={style.text6}>{animationText2.text6}</p>
      </div>

      <div className={style.animationText3} ref={textRef2}>
        <p className={style.text9}>{animationText2.text9} </p>
        <p className={style.text9}>
          <strong className={style.textStrong2}>
            {animationText2.textStrong2}
          </strong>{" "}
          {animationText2.text12}
        </p>
        <h2 className={style.text11}>{animationText2.text11}</h2>
        <p className={style.text10}>{animationText2.text10}</p>
      </div>

      <div className={style.graphic2}>
        <img src={grafico2} alt="" />
      </div>

      <div className={style.animationGraphic} ref={textRef3}>
        <img className={style.row1} src={row1} alt="" />
        <img className={style.row2} src={row2} alt="" />
        <img className={style.row3} src={row3} alt="" />
        <img className={style.row4} src={row4} alt="" />
        <img className={style.row5} src={row5} alt="" />
        <img className={style.row6} src={row6} alt="" />
      </div>

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
