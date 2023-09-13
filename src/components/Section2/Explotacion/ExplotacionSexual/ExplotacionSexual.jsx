import { useLayoutEffect, useRef } from "react";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";

import "./ExplotacionSexual.css";
import data from "../../../../../trataSection02.json";
import hand from "../../../../assets/Img-Section01/Page09/hand.svg";
import womenloading from "../../../../assets/Img-Section02/Page04/women_loading.png";
import grafico1 from "../../../../assets/Img-Section02/Page04/graficoquemado.png";
import NoteBookSection02 from "../../../NoteBook/NoteBookSection02/NoteBookSection02";
import Testimonios from "../../Testimonios/Testimonios";

const ExplotacionSexual = () => {
  const page4 = data[0].finalidades.page4;
  const name1 = data[0].finalidades.page5.video1;
  const name2 = data[0].finalidades.page5.video2;
  const grafico = useRef([]); // Create an array of refs for rows

  useLayoutEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    const graficoTl = gsap.timeline({
      scrollTrigger: {
        trigger: grafico.current, 
        start: "top center",
        end: "center center",
        scrub: true,
        markers: true
      },
    });
    graficoTl.fromTo(
      grafico.current,
      {
        opacity: 0,
      },
      {
        opacity: 1,
      }
    );

    // graficoTl.fromTo(
    //   grafico.current,
    //   {
    //     opacity: 1,
    //   },
    //   {
    //     opacity: 0,
    //   },4
      
    // );
  }, []);
  return (
    <div className="explotacion__content">
      <div className="explotacion__container">
        <div className="explotacion__hand">
          <div className="hand__content">
            <img className="hand__img" src={hand} />
            <h2 className="hand__title">{page4.head}</h2>
          </div>
          <h1 className="explotacion__title">{page4.title}</h1>
        </div>
        <div className="explotacion__news">
          <div className="womenloading__content">
            <NoteBookSection02 page4={page4} />
            <img className="womenloading__img" src={womenloading} />
            <img
              ref={grafico}
              className="womenloading__graphicquemado"
              src={grafico1}
            />
            {/* <div className="womenloading__graphic">
              <h1 className="womengraphic__title">{page4.imageback.title}</h1>
              <div className="womengraphic__background">
                <ul className="womengrapich__years">
                  <li>a</li>
                  <li>ab</li>
                  <li>abC</li>
                </ul>
              </div>
              <ul>
                <li></li>
              </ul>
            </div> */}
          </div>
        </div>
      </div>
      <Testimonios laboral={false} name1={name1} name2={name2} />
      <div className="video__foot" />
    </div>
  );
};

export default ExplotacionSexual;
