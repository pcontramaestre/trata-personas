import style from "./NoteBook.module.css";
import React, { useLayoutEffect, useRef } from "react";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";

import whiteSheet from "../../assets/NoteBook/whiteSheet.png";
import whiteSheetShort from "../../assets/NoteBook/whiteSheetShort.png";

const whiteSheets = {
  whiteSheet,
  whiteSheetShort,
};

function convertSize(input) {
  const n = Number(input.split("px")[0]);
  return (n * 100) / 1920 + "vw";
}

function convertAngle(input) {
  const n = Number(input.split("deg")[0]);
  return n * (Math.PI / 180);
}

function NoteBook({ noteBook, topSection }) {
  const textRef = useRef(null);
  if (!noteBook) return null;

  useLayoutEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    // Animación para el texto
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
        x: "-100%", // Mueve el elemento hacia la izquierda al 100% de su ancho
        opacity: 0, // Inicialmente establece la opacidad en 0 para que aparezca gradualmente
      },
      {
        x: "0%", // Lleva el elemento a su posición original (0%)
        opacity: 1, // Establece la opacidad en 1 para que sea completamente visible
      }
    );
  }, []);

  const whiteSheetStyle = {
    top: convertSize(
      topSection
        ? Number(noteBook.top.split("px")[0]) -
            Number(topSection.split("px")[0]) +
            "px"
        : noteBook.top
    ),
    left: convertSize(noteBook.left),
    width: convertSize(noteBook.width),
    height: convertSize(noteBook.height),
    backgroundImage: `url(${
      noteBook.backgroundImage
        ? whiteSheets[noteBook.backgroundImage]
        : whiteSheets.whiteSheet
    })`,
    transform: `rotateZ(${-Number(noteBook.rotation.split("deg")[0])}deg)`,
  };

  const contentStyle = noteBook.text.paragraph.map((paragraph) => ({
    ...noteBook.text.paragraphStyles,
    content: "",
    width: convertSize(paragraph.width),
    height: convertSize(paragraph.height),
    top: convertSize(
      (Number(paragraph.top.split("px")[0]) -
        Number(noteBook.top.split("px")[0])) /
        Math.cos(convertAngle(noteBook.rotation)) +
        "px"
    ),
    left: convertSize("160px"),
    fontSize: convertSize(noteBook.text.paragraphStyles.fontSize),
    lineHeight: convertSize(noteBook.text.paragraphStyles.lineHeight),
  }));

  const titleStyle = noteBook.text.title.map((title) => ({
    ...noteBook.text.titleStyles,
    width: convertSize(title.width),
    height: convertSize(title.height),
    top: convertSize(
      (Number(title.top.split("px")[0]) - Number(noteBook.top.split("px")[0])) /
        Math.cos(convertAngle(noteBook.rotation)) +
        "px"
    ),
    left: convertSize("160px"),
    fontSize: convertSize(noteBook.text.titleStyles.fontSize),
    lineHeight: convertSize(noteBook.text.titleStyles.lineHeight),
  }));

  const footerStyle = {
    ...noteBook.text.footer,
    width: convertSize(noteBook.text.footer.width),
    height: convertSize(noteBook.text.footer.height),
    top: convertSize(
      (Number(noteBook.text.footer.top.split("px")[0]) -
        Number(noteBook.top.split("px")[0])) /
        Math.cos(convertAngle(noteBook.rotation)) +
        "px"
    ),
    left: convertSize("160px"),
    fontSize: convertSize(noteBook.text.footer.fontSize),
  };

  return (
    <article className={style.NoteBook} style={whiteSheetStyle} ref={textRef}>
      {noteBook.text.paragraph.map((paragraph, index) => (
        <p
          className={style.NoteBookText}
          style={contentStyle[index]}
          dangerouslySetInnerHTML={{ __html: paragraph.content }}
          key={index}
        />
      ))}
      {noteBook.text.title.map((title, index) => (
        <h1
          className={style.NoteBookText}
          style={titleStyle[index]}
          key={index}
        >
          {title.content}
        </h1>
      ))}
      <footer className={style.NoteBookText} style={footerStyle}>
        {noteBook.text.footer.content}
      </footer>
    </article>
  );
}

export default NoteBook;
