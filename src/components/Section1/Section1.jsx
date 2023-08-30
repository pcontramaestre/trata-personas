import Slides from "../Slides/Slides";
import NoteBookSection01 from "../NoteBook/NoteBookSection01/NoteBookSection01";
import BarGraphSection01 from "../BarGraph/BarGraphSection01/BarGraphSection01";
import BigInfoBoxSection01 from "../BigInfoBox/BigInfoBoxSection01/BigInfoBoxSection01";
import CircleGraph from "./CircleGraph/CircleGraph";
import NewSection01 from "../News/NewsSection01/NewSection01";
import data from "../../../trataSection01.json";
import style from "./Section1.module.css";
import MapSection01 from "../Map/MapSection01/MapSection01";
import CircleGraph02 from "./CircleGraph02/CircleGraph02";
import Women from "./Women/Women";
import React, { useEffect } from "react";
import WomenSlider from "../Section1/WomenSlider/WomenSlider";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import CircleGraphSlider from "./CircleGraphSlider/CircleGraphSlider";
import InfoConsentimiento from "./InfoConsentimiento/InfoConsentimiento";

function Section1() {
  const page1 = data[0].visibilizacion_victimas.page1;
  gsap.registerPlugin(ScrollTrigger);
  useEffect(() => {
    gsap
      .timeline({
        scrollTrigger: {
          trigger: ".twoslider",
          pin: true,
          start: "top top",
          end: ".endslider",
          scrub: 0.3,
        },
        defaults: { duration: 1, ease: "none" },
      })
      .to(".slidercircle", { xPercent: 100 })
      .to(".text", { xPercent: 100 }, 0)
      .from(
        ".text .CircleGraph__slider",
        { opacity: 1, x: "-=100", duration: 0.5 },
        0.5
      );
  }, []);

  useEffect(() => {
    gsap
      .timeline({
        scrollTrigger: {
          trigger: ".threeslider",
          pin: true,
          start: "top top",
          end: ".endslider",
          scrub: 0.3,
        },
        defaults: { duration: 1, ease: "none" },
      })
      .to(".womenslider-gsap", { xPercent: 100 })
      .to(".text-women", { xPercent: 100 }, 0)
      .from(
        ".text-women .womenslider-gsap",
        { opacity: 1, x: "-=100", duration: 0.5 },
        0.5
      );
  }, []);

  return (
    <section id="section1" className={style.Section1}>
      <div className={style.page1content}>
        <div className={style.page1}>
          <h1 className={style.page1__title}>
            {page1.text1} <br /> {page1.text2}
          </h1>
          <Slides />
        </div>
      </div>
      <NoteBookSection01 />
      <BarGraphSection01 />
      <MapSection01 />
      <BigInfoBoxSection01 />
      <CircleGraph />
      <NewSection01 />
      <section className="animations__sliders">
        <section className="twoslider">
          <div className="text">
            <CircleGraphSlider />
          </div>
          <div className="slidercircle">
            <CircleGraph02 />
          </div>
        </section>
        <section className="threeslider">
          <div className="text-women">
            <WomenSlider />
          </div>
          <div className="womenslider-gsap">
            <Women />
          </div>
        </section>
        <div className="endslider"></div>
      </section>
      <div className="separadorslider"/>
      <InfoConsentimiento />
    </section>
  );
}

export default Section1;
