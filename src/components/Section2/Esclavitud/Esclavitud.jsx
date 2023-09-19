import React, { useLayoutEffect } from "react";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import "./Esclavitud.css";
import data from "../../../../trataSection02.json";
import BookEsclavitud from "../../NoteBook/NoteBookSection02Esclavitud/BookEsclavitud";

const Esclavitud = () => {
  useLayoutEffect(() => {
    const scrollTriggerSlider02 = ScrollTrigger.getById("SliderSection02");
    const scrollSexual = ScrollTrigger.getById("explotacionSexual");
    const scrollLaboral = ScrollTrigger.getById("explotacionLaboral");
    const scrollMendicidad = ScrollTrigger.getById("mendicidadForzada");
    const scrollAdopcion = ScrollTrigger.getById("trataAdopcion");
    const scrollMatrimonio = ScrollTrigger.getById("trataMatrimonio");
    const animateGraphic = gsap.context(() => {
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: ".esclavitud__content",
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
              120 +
              "top"
            );
          },
          end: "+=3000 bottom",
          scrub: 3,
          pin: "#section2",
          pinSpacing: true,
          id: "trataEsclavitud",
        },
      });
      tl.to(".esclavitud__img", {
        x: "+100vw",
        ease: "power2.in",
      });
      tl.to(".esclavitudquemado", {
        x: "-100vw",
        ease: "power2.Out",
      });
      tl.from(".animacion__fantasma", {
        x: "+100vw",
        ease: "power2.Out",
      });
      tl.to(".animacion__fantasma", {
        x: "0vw",
        ease: "power2.in",
      });
    });
    return () => animateGraphic.revert();
  }, []);
  const page10 = data[0].finalidades.page10;
  return (
    <div className="esclavitud">
      <div className="esclavitud__content">
        <h1 className="esclavitud__title">{page10.title}</h1>
        <small className="esclavitud__subtitle">{page10.subtitle}</small>
        <BookEsclavitud page10={page10} />
        <div className="esclavitud__img" />
        <div className="esclavitudquemado" />
      </div>
    </div>
  );
};

export default Esclavitud;
