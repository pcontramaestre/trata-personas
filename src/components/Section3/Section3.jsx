import { useEffect, useState, useLayoutEffect, useRef } from "react";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";

import NoteBook from "../NoteBook/NoteBook";
// import BarGraph from '../BarGraph/BarGraph'
import SmallInfoBox from "../SmallInfoBox/SmallInfoBox";
import News from "../News/News";
import BigInfoBox from "../BigInfoBox/BigInfoBox.jsx";

import style from "./Section3.module.css";

import data from "../../../troy.json";

import background from "../../assets/Section3/frontPageBackground.png";
import leftHand from "../../assets/Section3/frontPageLeftHand.png";
import bars from "../../assets/Section3/frontPageBars.png";
import rightHand from "../../assets/Section3/frontPageRightHand.png";
import camilla from "../../assets/Img-Section02/Page13/organs.png";
import grafico1 from "../../assets/Section3/grafico1.png";
import grafico2 from "../../assets/Section3/grafico2.png";
import frecuencia from "../../assets/Section3/frecuencia.svg";
import atenciones from "../../assets/Section3/atenciones.svg";
import group from "../../assets/Instructions/group.svg";
import infoGifSection3 from "../../assets/Section3/infoGifVerdeOscuro1.png";
import audio from "../../assets/Instructions/audio1.png";
import amarillo1 from "../../assets/Section3/amarillo1.jpg";
import rosado1 from "../../assets/Section3/rosado1.jpg";
import azul1 from "../../assets/Section3/azul1.jpg";
import verde1 from "../../assets/Section3/verde1.jpg";
import amarillo2 from "../../assets/Section3/amarillo2.jpg";
import rosado2 from "../../assets/Section3/rosado2.jpg";
import azul2 from "../../assets/Section3/azul2.jpg";
import psicosocial from "../../assets/Section3/psicosocial.png";
import medico from "../../assets/Section3/medico.png";
import legal from "../../assets/Section3/legal.png";
import manutencion from "../../assets/Section3/manutencion.png";
import educacion from "../../assets/Section3/educacion.svg";
import alojamiento from "../../assets/Section3/alojamiento.png";
import reintegracion from "../../assets/Section3/reintegracion.png";
import backgroundCard from "../../assets/Section3/backgroundCard.png";
import graphic from "../../assets/Section3/grafico-21.png";

const imagesList = {
  background,
  leftHand,
  bars,
  rightHand,
  camilla,
  grafico1,
  grafico2,
  frecuencia,
  atenciones,
  group,
  amarillo1,
  rosado1,
  azul1,
  verde1,
  amarillo2,
  rosado2,
  azul2,
  psicosocial,
  medico,
  legal,
  manutencion,
  educacion,
  alojamiento,
  reintegracion,
};

const iconList = {
  infoGifSection3,
};

const { protectionAndCare } = data;
const {
  images,
  text,
  icons,
  noteBook,
  news,
  bigCard,
  smallInfoBox,
  rows,
  bigInfoBox,
} = protectionAndCare;

function convertSize(input) {
  const n = Number(input.split("px")[0]);
  const r = (n * 100) / 1920 + "vw";
  return r;
}

function Section3() {
  const imgRefs = useRef([]); // Create an array of refs for images
  const containerRowRefs = useRef([]); // Create an array of refs for rows
  const textRef = useRef(null);
  const textRef2 = useRef(null);
  const textRef3 = useRef(null);
  const textRef4 = useRef(null);

  useLayoutEffect(() => {
    gsap.registerPlugin(ScrollTrigger);
    const ctx = gsap.context(() => {

      // Animations for FrontPage
      // console.log('entre en Layout de Section3')
      gsap.from("#rightHandsection3", {
        x: "100%",
        opacity: 0,
        scrollTrigger: {
          trigger: "#backgroundsection3",
          // markers: true,
          start: "43% top",
          end: "+=1700 bottom",
          pin: "#section3",
          pinSpacing: true,
          scrub: 1,
          pinnedContainer: "#section3",
          id: "backgroundsection3",
          onEnter: () => {
            console.log('entre')
            const scrollTriggerNoteBook = ScrollTrigger.getById('noteBooksection3')
            scrollTriggerNoteBook.refresh()
            // console.log('scrollTrigger:', scrollTriggerNoteBook)
          }
        }
      })
      // const imgTl = gsap.timeline({
      //   scrollTrigger: {
      //     trigger: "#backgroundsection3",
      //     // markers: true,
      //     start: "43% top",
      //     end: "+=1700 bottom",
      //     pin: "#section3",
      //     pinSpacing: true,
      //     scrub: 1,
      //     pinnedContainer: "#section3",
      //     id: "backgroundsection3"
      //   },
      // });

      // imgTl.fromTo(
      //   "#rightHandsection3",
      //   {
      //     x: "100%",
      //     opacity: 0,
      //   },
      //   {
      //     x: "0%",
      //     opacity: 1,
      //   }
      // );

      // Animacion del NoteBook
      const containerAnimation = document.getElementsByName('noteBook' + noteBook.section)[0]
      gsap.from(containerAnimation, {
        left: '100%',
        opacity: 0,
        scrollTrigger: {
          trigger: containerAnimation,
          id: 'noteBooksection3',
          // markers: true,
          start: 'top 90%',
          end: 'bottom bottom',
          scrub: 1,
          pinnedContainer: '#section3'
        }
      })

      // Animations for rows
      rows.forEach((row, index) => {
        const containerRowTl = gsap.timeline({
          scrollTrigger: {
            trigger: containerRowRefs.current[index], // Use the specific ref for this row
            start: "center center",
            end: "bottom center",
            pinSpacing: true,
            // pin: "#section3",
            pinnedContainer: "#section3",
            scrub: true,
            // markers: true,
            onEnter: () => {
              const bigCard = document.querySelector("#bigCard" + row.image.name)
              bigCard.style.visibility = "visible"
            }
          },
        });
        containerRowTl.fromTo(
          "#bigCard" + row.image.name,
          {
            opacity: 0,
          },
          {
            opacity: 1,
          }
        );

        containerRowTl.fromTo(
          "#bigCard" + row.image.name,
          {
            opacity: 1,
          },
          {
            opacity: 0,
          },4
        );
      });

      // Animations for text
      const textTl2 = gsap.timeline({
        scrollTrigger: {
          trigger: textRef2.current,
          start: "top center", // Inicia la animación cuando el componente está en el centro de la vista
          end: "center center", // Termina la animación cuando el componente está completamente fuera de la vista
          scrub: true, // Hace que la animación sea suave mientras se desplaza
          // markers: true, // Muestra marcadores de ScrollTrigger para depuración
          pinSpacing: true,
          pinnedContainer: "#section3"
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
      const textTl3 = gsap.timeline({
        scrollTrigger: {
          trigger: textRef3.current,
          start: "top center", // Inicia la animación cuando el componente está en el centro de la vista
          end: "center center", // Termina la animación cuando el componente está completamente fuera de la vista
          scrub: true, // Hace que la animación sea suave mientras se desplaza
          // markers: true, // Muestra marcadores de ScrollTrigger para depuración
          pinSpacing: true,
          pinnedContainer: "#section3"
        },
      });

      textTl3.fromTo(
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
      const textTl4 = gsap.timeline({
        scrollTrigger: {
          trigger: textRef4.current,
          start: "top center", // Inicia la animación cuando el componente está en el centro de la vista
          end: "center center", // Termina la animación cuando el componente está completamente fuera de la vista
          scrub: true, // Hace que la animación sea suave mientras se desplaza
          // markers: true, // Muestra marcadores de ScrollTrigger para depuración
          pinnedContainer: "#section3",
          pinSpacing: true
        },
      });

      textTl4.fromTo(
        textRef4.current,
        {
          x: "100%", // Mueve el elemento hacia la izquierda al 100% de su ancho
          opacity: 0, // Inicialmente establece la opacidad en 0 para que aparezca gradualmente
        },
        {
          x: "0%", // Lleva el elemento a su posición original (0%)
          opacity: 1, // Establece la opacidad en 1 para que sea completamente visible
        }
      );
      const textTl = gsap.timeline({
        scrollTrigger: {
          trigger: textRef.current,
          // start: "top center", // Inicia la animación cuando el componente está en el centro de la vista
          start: () => {
            const scrollBanner = ScrollTrigger.getById("backgroundsection3")

            return scrollBanner.end-scrollBanner.start + " center"
          }, // Inicia la animación cuando el componente está en el centro de la vista
          // end: "center center", // Termina la animación cuando el componente está completamente fuera de la vista
          end: () => {
            const scrollBanner = ScrollTrigger.getById("backgroundsection3")

            return scrollBanner.end-scrollBanner.start + (textRef.current.offsetHeight/2) + " center"
          }, // Termina la animación cuando el componente está completamente fuera de la vista
          scrub: true, // Hace que la animación sea suave mientras se desplaza
          // markers: true, // Muestra marcadores de ScrollTrigger para depuración
          pinSpacing: true,
          // pinnedContainer: "#section3" 
        },
      });

      textTl.fromTo(
        textRef.current,
        {
          x: "-100%", // Mueve el elemento hacia la izquierda al 100% de su ancho
          opacity: 0, // Inicialmente establece la opacidad en 0 para que aparezca gradualmente
        },
        {
          x: "0%", // Lleva el elemento a su posición original (0%)
          opacity: 1, // Establece la opacidad en 1 para que sea completamente visible
        }
      );

      // Animations for images
      
    });

    return () => ctx.revert();
  }, []);

  useEffect(() => {
    if (smallInfoBox) {
      const iconsList = document.getElementsByName(icons[0].name);
      const divs = document.getElementsByName(`SmallInfoBox${icons[0].name}`);

      function activeDisplay(index) {
        divs[index].style.display = "flex";
      }

      function desactiveDisplay(index) {
        divs[index].style.display = "";
      }

      iconsList.forEach((icon, index) =>
        icon.addEventListener("mouseenter", () => {
          activeDisplay(index);
        })
      );
      divs.forEach((div, index) =>
        div.addEventListener("mouseleave", () => {
          desactiveDisplay(index);
        })
      );
      return () => {
        iconsList.forEach((icon, index) =>
          icon.removeEventListener("mouseenter", () => {
            activeDisplay(index);
          })
        );
        divs.forEach((div, index) =>
          div.removeEventListener("mouseleave", () => {
            desactiveDisplay(index);
          })
        );
      };
    }
  }, []);

  const protectionAndCareBackgroundStyles = {
    width: convertSize(protectionAndCare.width),
    height: convertSize(protectionAndCare.height),
    backgroundColor: protectionAndCare.backgroundColor,
  };

  const imagesStyles = images.map((image) => ({
    ...image,
    width: convertSize(image.width),
    height: convertSize(image.height),
    top: convertSize(
      Number(image.top.split("px")[0]) -
        Number(protectionAndCare.top.split("px")[0]) +
        "px"
    ),
    left: convertSize(image.left),
  }));

  const rowsImageStyles = rows.map((row) => ({
    ...row.image,
    width: convertSize(row.image.width),
    height: convertSize(row.image.height),
    top: convertSize(
      Number(row.image.top.split("px")[0]) -
        Number(row.properties.top.split("px")[0]) +
        "px"
    ),
    left: convertSize(row.image.left),
  }));

  const rowsStyles = rows.map((row) => ({
    ...row.properties,
    width: convertSize(row.properties.width),
    height: convertSize(row.properties.height),
    backgroundImage: `url(${imagesList[row.properties.name]})`,
    top: convertSize(
      Number(row.properties.top.split("px")[0]) -
        Number(protectionAndCare.top.split("px")[0]) +
        "px"
    ),
    left: convertSize(row.properties.left),
  }));

  const rowsTextStyles = rows.map((row) => ({
    ...row.text,
    width: convertSize(row.text.width),
    height: convertSize(row.text.height),
    top: convertSize(
      Number(row.text.top.split("px")[0]) -
        Number(row.properties.top.split("px")[0]) +
        "px"
    ),
    left: convertSize(row.text.left),
  }));

  const rowsNumberStyles = rows.map((row) => ({
    ...row.number,
    width: convertSize(row.number.width),
    height: convertSize(row.number.height),
    top: convertSize(
      Number(row.number.top.split("px")[0]) -
        Number(row.properties.top.split("px")[0]) +
        "px"
    ),
    fontSize: convertSize(row.number.fontSize),
    lineHeight: convertSize(row.number.lineHeight),
    left: convertSize(row.number.left),
  }));

  const textStyles = text.map((texto) => ({
    ...texto,
    top: convertSize(
      Number(texto.top.split("px")[0]) -
        Number(protectionAndCare.top.split("px")[0]) +
        "px"
    ),
    left: convertSize(texto.left),
    width: convertSize(texto.width),
    height: convertSize(texto.height),
    fontSize: convertSize(texto.fontSize),
    lineHeight: texto.lineHeight && convertSize(texto.lineHeight),
  }));

  const iconStyles = icons.map((icon) => ({
    ...icon,
    width: convertSize(icon.width),
    height: convertSize(icon.height),
    top: convertSize(
      Number(icon.top.split("px")[0]) -
        Number(protectionAndCare.top.split("px")[0]) +
        "px"
    ),
    left: convertSize(icon.left),
  }));

  const listImageHover = [
    "psicosocial",
    "medico",
    "legal",
    "manutencion",
    "educacion",
    "alojamiento",
    "reintegracion",
  ];

  const listImageFrontPage = ["leftHand", "bars", "rightHand"];
  const animationText = data.protectionAndCare.animationText;

  const audioRef = useRef(null);

  return (
    <section
      id="section3"
      className={style.ProtectionCare}
      style={protectionAndCareBackgroundStyles}
    >
      <div className={style.animationText1} ref={textRef}>
        <p className={style.text1}>{animationText.text1} </p>
        <p className={style.text1}>
          <strong className={style.textStrong}>
            {animationText.textStrong}
          </strong>{" "}
          {animationText.text4}
        </p>
        <h2 className={style.text3}>{animationText.text3}</h2>
        <p className={style.text2}>{animationText.text2}</p>
      </div>

      <div className={style.animationText2} ref={textRef2}>
        <p className={style.text5}>{animationText.text5} </p>
        <p className={style.text7}>{animationText.text7}</p>
        <p className={style.text9}>{animationText.text9}</p>
        <p className={style.text11}>{animationText.text11}</p>
      </div>
      <div className={style.animationText3} ref={textRef3}>
        <p className={style.text6}>{animationText.text6}</p>
        <p className={style.text8}>{animationText.text8}</p>
        <p className={style.text10}>{animationText.text10}</p>
        <p className={style.text12}>{animationText.text12}</p>
      </div>
      <div className={style.animationGraphic} ref={textRef4}>
        <img src={graphic} alt="" />
      </div>

      {rows.map((row, index) => (
        <div
          ref={(el) => (containerRowRefs.current[index] = el)}
          className={style.containerRow}
          style={rowsStyles[index]}
          key={"rows" + index}
        >
          <p className={style.contentrow} style={rowsTextStyles[index]}>
            {row.text.content}
          </p>
          <img
            className={style.contentrow}
            src={imagesList[row.image.name]}
            style={rowsImageStyles[index]}
            alt=""
          />
          <h1 className={style.contentrow} style={rowsNumberStyles[index]}>
            {row.number.content}
          </h1>
          <BigCard
            className={style.bigCardProtection}
            bigCard={bigCard}
            topSection={row.properties.top}
            name={row.image.name}
          />
        </div>
      ))}
      {images.map((image, index) => (
        <img
          id={image.name + "section3"}
          name={image.grupo ? image.grupo : null}
          src={imagesList[image.name]}
          style={imagesStyles[index]}
          className={
            listImageFrontPage.includes(image.name)
              ? style.ProtectionCareImagesFrontPage
              : style.ProtectionCareImages
          }
          key={image.name + index}
          ref={image.name === "rightHand" ? imgRefs : null} // Asigna la referencia solo a la mano derecha
        />
      ))}
      {icons.map((icon, index) => (
        <img
          name={icon.name}
          src={icon && iconList[icon.name]}
          style={iconStyles[index]}
          className={style.ProtectionCareIcon}
          key={icon.name + index}
        />
      ))}
      {text.map((texto, index) => {
        switch (texto.tag) {
          case "h1": {
            return (
              <h1
                className={style.ProtectionCareText}
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
                className={style.ProtectionCareText}
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
                className={style.ProtectionCareText}
                style={textStyles[index]}
                key={index}
              />
            );
          }
        }
        return true;
      })}
      <BigInfoBox bigInfoBox={bigInfoBox} topSection={protectionAndCare.top} />
      <NoteBook noteBook={noteBook} topSection={protectionAndCare.top} />
      {/* <BarGraph /> */}
      {Object.values(smallInfoBox).map((infoBox, index) => (
        <SmallInfoBox
          info={infoBox}
          topSection={protectionAndCare.top}
          key={infoBox.name + index}
        />
      ))}
      
    </section>
  );
}

function BigCard({ bigCard, topSection, name }) {
  const cardStyles = name
    ? {
        ...bigCard,
        width: convertSize(bigCard.width),
        height: convertSize(bigCard.height),
        top: convertSize(
          Number(bigCard[name].top.split("px")[0]) -
            Number(topSection.split("px")[0]) +
            "px"
        ),
        left: convertSize(bigCard[name].left),
        borderRadius: convertSize(bigCard.borderRadius),
        backgroundImage: `url(${backgroundCard})`,
      }
    : {};

  const titleStyles = name
    ? {
        ...bigCard.titleStile,
        fontSize: convertSize(bigCard.titleStile.fontSize),
        lineHeight: convertSize(bigCard.titleStile.lineHeight),
        width: convertSize(bigCard[name].title.width),
        height: convertSize(bigCard[name].title.height),
        top: convertSize(
          Number(bigCard[name].title.top.split("px")[0]) -
            Number(bigCard[name].topCard.split("px")[0]) +
            "px"
        ),
        left: convertSize(
          Number(bigCard[name].title.left.split("px")[0]) -
            Number(bigCard[name].leftCard.split("px")[0]) +
            "px"
        ),
      }
    : {};

  const subtitleStyles = name
    ? {
        ...bigCard.subtitleStile,
        fontSize: convertSize(bigCard.subtitleStile.fontSize),
        lineHeight: convertSize(bigCard.subtitleStile.lineHeight),
        width: convertSize(bigCard[name].subtitle.width),
        height: convertSize(bigCard[name].subtitle.height),
        top: convertSize(
          Number(bigCard[name].subtitle.top.split("px")[0]) -
            Number(bigCard[name].topCard.split("px")[0]) +
            "px"
        ),
        left: convertSize(
          Number(bigCard[name].subtitle.left.split("px")[0]) -
            Number(bigCard[name].leftCard.split("px")[0]) +
            "px"
        ),
      }
    : {};

  const textStyle = name
    ? {
        ...bigCard.textStile,
        fontSize: convertSize(bigCard.textStile.fontSize),
        lineHeight: convertSize(bigCard.textStile.lineHeight),
        width: convertSize(bigCard[name].text.width),
        height: convertSize(bigCard[name].text.height),
        top: convertSize(
          Number(bigCard[name].text.top.split("px")[0]) -
            Number(bigCard[name].topCard.split("px")[0]) +
            "px"
        ),
        left: convertSize(
          Number(bigCard[name].text.left.split("px")[0]) -
            Number(bigCard[name].leftCard.split("px")[0]) +
            "px"
        ),
      }
    : {};

  return (
    <div
      style={cardStyles}
      className={style.BigCardStyles}
      id={"bigCard" + name}
    >
      {name ? (
        <>
          <h1 style={titleStyles} className={style.textStyles}>
            {bigCard[name].title.content}
          </h1>
          <h2 style={subtitleStyles} className={style.textStyles}>
            {bigCard[name].subtitle.content}
          </h2>
          <p style={textStyle} className={style.textStyles}>
            {bigCard[name].text.content}
          </p>
        </>
      ) : null}
    </div>
  );
}

export default Section3;
