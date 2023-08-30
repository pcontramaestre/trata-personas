import React, { useEffect } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/all";
import "./NewSection01.css";
import data from "../../../../trataSection01.json";
import hand from "../../../assets/Img-Section01/Page08/hand.svg";
gsap.registerPlugin(ScrollTrigger);

const NewSection01 = () => {
  const page8 = data[0].visibilizacion_victimas.page8;

  useEffect(() => {
    // Selecciona los elementos que deseas animar
    const newsCards = document.querySelectorAll(
      ".news__background1, .newshover__background2, .newshover__background3, .newshover__background1,  .news__background2, .news__background3"
    );

    // Configura la animación inicial
    gsap.set(newsCards, { x: "-100%" });

    // Crea la animación para mostrar las tarjetas juntas en pantalla
    gsap.to(newsCards, {
      x: "0%",
      stagger: 0.5, // Retraso entre animaciones individuales
      ease: "power2.out", // Easing de la animación
      duration: 10, // Duración de la animación
      scrollTrigger: {
        trigger: '.news__content', // Elemento que desencadena el ScrollTrigger
        start: 'top 90%', // Comienza la animación cuando el 80% superior del elemento es visible
        end: 'bottom 90%', // Termina la animación cuando el 20% inferior del elemento es visible
        scrub: true// Activa el "scrubbing" para una animación suave al hacer scroll
      }

    });
  }, []);

  return (
    <div className="news__content">
      <div className="news1">
        <div className="news__background1">
          <p className="news__p1">
            {page8.news.news1}
            <footer>{page8.news.foot}</footer>
          </p>
        </div>

        <div className="newshover__background1">
          <div className="newshover__content">
            <h1 className="newshover__title">{page8.news.hover1.title}</h1>
            <div className="newshover__separador" />
            <p
              className="newshover__text"
              dangerouslySetInnerHTML={{ __html: page8.news.hover1.text }}
            />
            <h3 className="newshover__fuente">{page8.news.hover1.fuente}</h3>
            <a className="newshover__link" href={page8.news.hover1.link}>
              <img src={hand} />
              {page8.news.calltoaction}
            </a>
          </div>
        </div>
      </div>

      <div className="news2">
        <div className="news__background2">
          <p className="news__p2">
            {page8.news.news2}
            <footer>{page8.news.foot}</footer>
          </p>
        </div>

        <div className="newshover__background2">
          <div className="newshover__content">
            <h1 className="newshover__title">{page8.news.hover2.title}</h1>
            <div className="newshover__separador" />
            <p
              className="newshover__text"
              dangerouslySetInnerHTML={{ __html: page8.news.hover2.text }}
            />
            <h3 className="newshover__fuente">{page8.news.hover2.fuente}</h3>
            <a className="newshover__link" href={page8.news.hover2.link}>
              <img src={hand} />
              {page8.news.calltoaction}
            </a>
          </div>
        </div>
      </div>

      <div className="news3">
        <div className="news__background3">
          <p className="news__p3">
            {page8.news.news3}
            <footer>{page8.news.foot2}</footer>
          </p>
        </div>
        <div className="newshover__background1">
          <div className="newshover__content">
            <h1 className="newshover__title">{page8.news.hover3.title}</h1>
            <div className="newshover__separador" />
            <p
              className="newshover__text"
              dangerouslySetInnerHTML={{ __html: page8.news.hover3.text }}
            />
            <h3 className="newshover__fuente">{page8.news.hover3.fuente}</h3>
            <a className="newshover__link" href={page8.news.hover3.link}>
              <img src={hand} />
              {page8.news.calltoaction}
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NewSection01;
