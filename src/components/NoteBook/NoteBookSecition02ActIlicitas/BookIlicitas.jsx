import React, { useLayoutEffect, useEffect, useRef } from "react";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import "./BookIlicitas.css";

const BookIlicitas = ({ page12 }) => {
  useLayoutEffect(() => {
    gsap.registerPlugin(ScrollTrigger);
    const ctx = gsap.context(() => {
      const scrollTriggerSlider02 = ScrollTrigger.getById("SliderSection02");
      const scrollSexual = ScrollTrigger.getById("explotacionSexual");
      const scrollLaboral = ScrollTrigger.getById("explotacionLaboral");
      const scrollMendicidad = ScrollTrigger.getById("mendicidadForzada");
      const scrollAdopcion = ScrollTrigger.getById("trataAdopcion");
      const scrollMatrimonio = ScrollTrigger.getById("trataMatrimonio");
      const scrollEsclavitud = ScrollTrigger.getById("trataEsclavitud");
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: ".NoteBook09",
          scrub: true,
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
              100 +
              " center"
            );
          },
          end: () => {
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
              " center"
            );
          },
          id: "noteBook_section02_" + page12.title,
        },
      });

      tl.from(".NoteBook09", { x: -100, opacity: 0 });
      tl.to(".NoteBook09", { x: 0, opacity: 1 });
    });
    return () => ctx.revert();
  }, []);
  return (
    <div className="NoteBook09">
      <div className="NoteBook09__texts">
        <p
          className="NoteBook09__text1"
          dangerouslySetInnerHTML={{ __html: page12.text1 }}
        ></p>
        <h1 className="NoteBook09__text2">{page12.text2}</h1>
        <h3 className="NoteBook09__text3">{page12.text3}</h3>
      </div>
    </div>
  );
};

export default BookIlicitas;
