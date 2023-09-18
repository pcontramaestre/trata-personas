import { useLayoutEffect, useRef } from "react";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import "./Adopcion.css";
import data from "../../../../trataSection02.json";
import BookAdopcion from "../../NoteBook/NoteBookSection02Adopcion/BookAdopcion";
import bebe from "../../../assets/Img-Section02/Page08/children.png";
import Testimonios from "../Testimonios/Testimonios";

const Adopcion = () => {
  const page8 = data[0].finalidades.page8;
  const name1 = page8.text4;
  const name2 = null;
  useLayoutEffect(() => {
    const scrollTriggerSlider02 = ScrollTrigger.getById("SliderSection02");
    const scrollSexual = ScrollTrigger.getById("explotacionSexual");
    const scrollLaboral = ScrollTrigger.getById("explotacionLaboral");
    const scrollMendicidad = ScrollTrigger.getById("mendicidadForzada");
    const animateGraphic = gsap.context(() => {
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: ".adopcion__content",
          // markers: true,
          start: () => {
            return (
              scrollTriggerSlider02.end -
              scrollTriggerSlider02.start +
              scrollSexual.end -
              scrollSexual.start +
              scrollLaboral.end -
              scrollLaboral.start +
              scrollMendicidad.end -
              scrollMendicidad.start +
              100 +
              "top"
            );
          },
          end: "+=3000 bottom",
          scrub: 3,
          pin: "#section2",
          pinSpacing: true,
          id: "trataAdopcion",
        },
      });
     
      tl.to(".adopciongraphic", {
        x: "-100vw",
        ease: "power2.Out",
      });
      tl.to(".adopcion__img", {
        x: "+100vw",
        ease: "power2.in",
      });
    });
    return () => animateGraphic.revert();
  }, []);
  return (
    <div className="adopcion">
      <div className="adopcion__content">
        <h1 className="adopcion__title">{page8.title}</h1>
        <BookAdopcion page8={page8} />
        <img className="adopcion__img" src={bebe} />
        <div className="adopciongraphic" />
      </div>
      <div className="adopcion__testimonios">
        <Testimonios laboral={false} name1={name1} name2={name2} />
      </div>
    </div>
  );
};

export default Adopcion;
