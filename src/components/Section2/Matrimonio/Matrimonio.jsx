import React, { useLayoutEffect } from "react";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import "./Matrimonio.css";
import data from "../../../../trataSection02.json";
import matromonio from "../../../assets/Img-Section02/Page09/matrimonio.png";
import BookMatrimonio from "../../NoteBook/NoteBookSection02Matrimonio/BookMatrimonio";

const Matrimonio = () => {
  useLayoutEffect(() => {
    const scrollTriggerSlider02 = ScrollTrigger.getById("SliderSection02");
    const scrollSexual = ScrollTrigger.getById("explotacionSexual");
    const scrollLaboral = ScrollTrigger.getById("explotacionLaboral");
    const scrollMendicidad = ScrollTrigger.getById("mendicidadForzada");
    const scrollAdopcion = ScrollTrigger.getById("trataAdopcion");
    const animateGraphic = gsap.context(() => {
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: ".matrimonio__content",
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
              120 +
              "top"
            );
          },
          end: "+=3000 bottom",
          scrub: 3,
          pin: "#section2",
          pinSpacing: true,
          id: "trataMatrimonio",
        },
      });
      tl.to(".matrimonio__img", {
        x: "-100vw",
        ease: "power2.in",
      });
      tl.to(".matrimonioquemado", {
        x: "+100vw",
        ease: "power2.Out",
      });
    });
    return () => animateGraphic.revert();
  }, []);
  const page9 = data[0].finalidades.page9;
  return (
    <div className="matrimonio">
      <div className="matrimonio__content">
        <h1 className="matrimonio__title">{page9.title}</h1>
        <BookMatrimonio page9={page9} />
      </div>
      <img className="matrimonio__img" src={matromonio} />
      <div className="matrimonioquemado" />
    </div>
  );
};

export default Matrimonio;
