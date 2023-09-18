import React, { useLayoutEffect } from "react";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import "./ExplotacionLaboral.css";
import data from "../../../../../trataSection02.json";
import BookLaboral from "../../../NoteBook/NoteBookSection02Laboral/BookLaboral";
import Testimonios from "../../Testimonios/Testimonios";

const ExplotacionLaboral = ({ handleVideosPlay }) => {
  const page6 = data[0].finalidades.page6;
  const name1 = page6.text4;
  const name2 = page6.text5;
  useLayoutEffect(() => {
    const scrollTriggerSlider02 = ScrollTrigger.getById("SliderSection02");
    const scrollSexual = ScrollTrigger.getById("explotacionSexual");
    const animateGraphic = gsap.context(() => {
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: ".explotacion__laboral-content",
          // markers: true,
          start: () => {
            return (
              scrollSexual.end -
              scrollSexual.start +
              scrollTriggerSlider02.end -
              scrollTriggerSlider02.start +
              "top"
            );
          },
          end: "+=3000 bottom",
          scrub: 3,
          pin: "#section2",
          pinSpacing: true,
          id: "explotacionLaboral",
        },
      });
      tl.to(".laboral__graphicquemado", {
        x: "+100vw",
        ease: "power2.Out",
      });
      tl.to(".laboral__men", {
        x: "+130vw",
        ease: "power2.in",
      });
    });
    return () => animateGraphic.revert();
  }, []);

  return (
    <div className="explotacion__laboral">
      <div className="explotacion__laboral-content">
        <h1
          className="laboral__title"
          dangerouslySetInnerHTML={{ __html: page6.title }}
        />
        <BookLaboral page6={page6} />
      </div>
      <div className="laboral__testimonios">
        <Testimonios
          laboral={true}
          name1={name1}
          name2={name2}
          handleVideosPlay={handleVideosPlay}
        />
      </div>
      <div className="laboral__men" />
      <div className="laboral__graphicquemado"></div>
    </div>
  );
};

export default ExplotacionLaboral;
