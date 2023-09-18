import { useLayoutEffect } from "react";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import "./ExplotacionSexual.css";
import data from "../../../../../trataSection02.json";
import hand from "../../../../assets/Img-Section01/Page09/hand.svg";
import womenloading from "../../../../assets/Img-Section02/Page04/women_loading.png";
import grafico1 from "../../../../assets/Img-Section02/Page04/graficoquemado.png";
import NoteBookSection02 from "../../../NoteBook/NoteBookSection02/NoteBookSection02";
import Testimonios from "../../Testimonios/Testimonios";

const ExplotacionSexual = ({handleVideosPlay}) => {
  const page4 = data[0].finalidades.page4;
  const name1 = data[0].finalidades.page5.video1;
  const name2 = data[0].finalidades.page5.video2;

  useLayoutEffect(() => {
    const scrollTriggerSlider02 = ScrollTrigger.getById("SliderSection02");
    const animateGraphic = gsap.context(() => {
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: ".explotacion__container",
          // markers: true,
          start: () => {
            return (
              scrollTriggerSlider02.end -
              scrollTriggerSlider02.start +
              80 +
              "top"
            );
          },
          end: "+=3000 bottom",
          scrub: 3,
          pin: "#section2",
          pinSpacing: true,
          id: "explotacionSexual",
        },
      });
      tl.to(".womenloading__img", {
        x: "+100vw",
        ease: "power2.in",
      });
      tl.to(".womenloading__graphicquemado", {
        x: "-100vw",
        ease: "power2.Out",
      });
    });
    return () => animateGraphic.revert();
  }, []);

  return (
    <div className="explotacion__content">
      <div id="explotacion__container" className="explotacion__container">
        <div className="explotacion__hand">
          <div className="hand__content">
            <img className="hand__img" src={hand} />
            <h2 className="hand__title">{page4.head}</h2>
          </div>
          <h1 className="explotacion__title">{page4.title}</h1>
        </div>
        <div id="explotacionNews" className="explotacion__news">
          <div className="womenloading__content">
            <NoteBookSection02 page4={page4} />
            <img className="womenloading__img" src={womenloading} />
            <img
              className="womenloading__graphicquemado"
              src={grafico1}
            />
          </div>
        </div>
      </div>
      <Testimonios handleVideosPlay={handleVideosPlay} laboral={false} name1={name1} name2={name2} />
      <div className="video__foot" />
    </div>
  );
};

export default ExplotacionSexual;
