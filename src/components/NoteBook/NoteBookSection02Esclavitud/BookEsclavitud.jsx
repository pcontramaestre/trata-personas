import React, { useLayoutEffect, useEffect, useRef } from "react";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import "./BookEsclavitud.css";

const BookEsclavitud = ({ page10 }) => {
  useLayoutEffect(() => {
    gsap.registerPlugin(ScrollTrigger);
    const ctx = gsap.context(() => {
      const scrollTriggerSlider02 = ScrollTrigger.getById("SliderSection02");
      const scrollSexual = ScrollTrigger.getById("explotacionSexual");
      const scrollLaboral = ScrollTrigger.getById("explotacionLaboral");
      const scrollMendicidad = ScrollTrigger.getById("mendicidadForzada");
      const scrollAdopcion = ScrollTrigger.getById("trataAdopcion");
      const scrollMatrimonio = ScrollTrigger.getById("trataMatrimonio");
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: ".NoteBook08",
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
              400 +
              " center"
            );
          },
          id: "noteBook_section02_" + page10.title,
        },
      });

      tl.from(".NoteBook08", { x: -100, opacity: 0 });
      tl.to(".NoteBook08", { x: 0, opacity: 1 });
    });
    return () => ctx.revert();
  }, []);
  return (
    <div className="NoteBook08__container">
      <div className="NoteBook08">
        <div className="NoteBook08__texts">
          <p
            className="NoteBook08__text1"
            dangerouslySetInnerHTML={{ __html: page10.text1 }}
          ></p>
          <h1 className="NoteBook08__text2">{page10.text2}</h1>
          <h3 className="NoteBook08__text3">{page10.text3}</h3>
        </div>
      </div>
    </div>
  );
};

export default BookEsclavitud;
