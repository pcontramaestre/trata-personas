import React, { useLayoutEffect } from "react";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import "./ActividadesIlicitas.css";
import data from "../../../../trataSection02.json";
import BookIlicitas from "../../NoteBook/NoteBookSecition02ActIlicitas/BookIlicitas";
import act from "../../../assets/Img-Section02/Page12/illegal.png";

const ActividadesIlicitas = () => {
  useLayoutEffect(() => {
    const scrollTriggerSlider02 = ScrollTrigger.getById("SliderSection02");
    const scrollSexual = ScrollTrigger.getById("explotacionSexual");
    const scrollLaboral = ScrollTrigger.getById("explotacionLaboral");
    const scrollMendicidad = ScrollTrigger.getById("mendicidadForzada");
    const scrollAdopcion = ScrollTrigger.getById("trataAdopcion");
    const scrollMatrimonio = ScrollTrigger.getById("trataMatrimonio");
    const scrollEsclavitud = ScrollTrigger.getById("trataEsclavitud");
    const animateGraphic = gsap.context(() => {
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: ".actividades__content",
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
              scrollAdopcion.end -
              scrollAdopcion.start +
              scrollMatrimonio.end -
              scrollMatrimonio.start +
              scrollEsclavitud.end -
              scrollEsclavitud.start +
              250 +
              "top"
            );
          },
          end: "+=3000 bottom",
          scrub: 3,
          pin: "#section2",
          pinSpacing: true,
          id: "trataIlicitas",
        },
      });
      tl.to(".actividades__img", {
        x: "+100vw",
        ease: "power2.in",
      });
      tl.to(".ilicitasquemado", {
        x: "-100vw",
        ease: "power2.Out",
      });
    });
    return () => animateGraphic.revert();
  }, []);
  const page12 = data[0].finalidades.page12;
  return (
    <div className="actividades">
      <div className="actividades__content">
        <h1 className="actividades__title">{page12.title}</h1>
      </div>
      <BookIlicitas page12={page12} />
      <img className="actividades__img" src={act} />
      <div className="ilicitasquemado" />
    </div>
  );
};

export default ActividadesIlicitas;
