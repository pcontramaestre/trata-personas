import React, { useLayoutEffect, useEffect, useRef } from "react";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";

import "./NoteBookSection01.css";
import hand from "../../../assets/Img-Section01/Page03/MANOS.png";
import data from "../../../../trataSection01.json";

function NoteBookSection01() {
  const page3 = data[0].visibilizacion_victimas.page3;
  const textRef = useRef(null);
  const imgRef = useRef(null);

  // useLayoutEffect(() => {
  //   gsap.registerPlugin(ScrollTrigger);

  //   // Animación para el texto
  //   const textTl = gsap.timeline({
  //     scrollTrigger: {
  //       trigger: textRef.current,
  //       start: "top center", // Inicia la animación cuando el componente está en el centro de la vista
  //       end: "bottom center", // Termina la animación cuando el componente está completamente fuera de la vista
  //       scrub: true, // Hace que la animación sea suave mientras se desplaza
  //       // markers: true, // Muestra marcadores de ScrollTrigger para depuración
  //     },
  //   });

  //   textTl.fromTo(
  //     textRef.current,
  //     {
  //       x: "-100%", // Mueve el elemento hacia la izquierda al 100% de su ancho
  //       opacity: 0, // Inicialmente establece la opacidad en 0 para que aparezca gradualmente
  //     },
  //     {
  //       x: "0%", // Lleva el elemento a su posición original (0%)
  //       opacity: 1, // Establece la opacidad en 1 para que sea completamente visible
  //     }
  //   );

  //   // Animación para la imagen
  //   const imgTl = gsap.timeline({
  //     scrollTrigger: {
  //       trigger: imgRef.current,
  //       start: "top center", // Inicia la animación cuando el componente está en el centro de la vista
  //       end: "bottom center", // Termina la animación cuando el componente está completamente fuera de la vista
  //       scrub: true, // Hace que la animación sea suave mientras se desplaza
  //       // markers: true, // Muestra marcadores de ScrollTrigger para depuración
  //     },
  //   });

  //   imgTl.fromTo(
  //     imgRef.current,
  //     {
  //       x: "100%", // Mueve el elemento hacia la derecha al 100% de su ancho
  //       opacity: 0, // Inicialmente establece la opacidad en 0 para que aparezca gradualmente
  //     },
  //     {
  //       x: "0%", // Lleva el elemento a su posición original (0%)
  //       opacity: 1, // Establece la opacidad en 1 para que sea completamente visible
  //     }
  //   );
  // }, []);

  return (
    <div className="NoteBook__container">
      <div className="NoteBook">
        <div className="NoteBook__texts" ref={textRef}>
          <p
            className="NoteBook__text1"
            dangerouslySetInnerHTML={{ __html: page3.text1 }}
          ></p>
          <h1 className="NoteBook__text2">{page3.text2}</h1>
          <h3 className="NoteBook__text3">{page3.text3}</h3>
        </div>
      </div>
      <img className="img__hands" src={hand} alt="Hand" ref={imgRef} />
    </div>
  );
}

export default NoteBookSection01;
