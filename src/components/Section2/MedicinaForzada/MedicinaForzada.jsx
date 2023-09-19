import { useLayoutEffect, useRef } from "react";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import "./MedicinaForzada.css";
import data from "../../../../trataSection02.json";
import BookMedicina from "../../NoteBook/NoteBookSection02Medicina/BookMedicina";
import pills from "../../../assets/Img-Section02/Page07/pills.png";

const MedicinaForzada = () => {
  useLayoutEffect(() => {
    const scrollTriggerSlider02 = ScrollTrigger.getById("SliderSection02");
    const scrollSexual = ScrollTrigger.getById("explotacionSexual");
    const scrollLaboral = ScrollTrigger.getById("explotacionLaboral");
    const animateGraphic = gsap.context(() => {
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: ".pills__img",
          // markers: true,
          start: () => {
            return (
              scrollTriggerSlider02.end -
              scrollTriggerSlider02.start +
              scrollSexual.end -
              scrollSexual.start +
              scrollLaboral.end -
              scrollLaboral.start +
              "top"
            );
          },
          end: "+=3000 bottom",
          scrub: 3,
          pin: "#section2",
          pinSpacing: true,
          id: "mendicidadForzada",
        },
      });
      tl.to(".pills__img", {
        x: "-100vw",
        ease: "power2.in",
      });
      tl.to(".medicina__graficoquemado", {
        x: "+100vw",
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

  const page7 = data[0].finalidades.page7;
  return (
    <div className="medicina__forzada">
      <div className="medicina__content">
        <h1 className="medicina__title">{page7.title}</h1>
        <BookMedicina page7={page7} />
      </div>
      <img className="pills__img" src={pills} />
      <div className="medicina__graficoquemado" />
      {/* <img className="medicina__img" src={background} /> */}
    </div>
  );
};

export default MedicinaForzada;
