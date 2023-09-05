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
import React, { useEffect, useState } from "react";
import WomenSlider from "../Section1/WomenSlider/WomenSlider";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import CircleGraphSlider from "./CircleGraphSlider/CircleGraphSlider";
import InfoConsentimiento from "./InfoConsentimiento/InfoConsentimiento";

function Section1() {
  const page1 = data[0].visibilizacion_victimas.page1;
  gsap.registerPlugin(ScrollTrigger);
  const [isSliderOpen, setIsSliderOpen] = useState(false);
  const [isWomenSliderOpen, setIsWomenSliderOpen] = useState(false);

  const toggleSlider = () => {
    setIsSliderOpen(!isSliderOpen);
    if (!isSliderOpen) {
      // Si el slider está cerrado, abrirlo
      gsap.to(".text", { left: 0, duration: 0.5, ease: "ease-in-out" });
      gsap.to(".slidercircle", {
        right: "-100%",
        duration: 0.5,
        ease: "ease-in-out",
      });
    } else {
      // Si el slider está abierto, cerrarlo
      gsap.to(".text", { left: "-100%", duration: 0.5, ease: "ease-in-out" });
      gsap.to(".slidercircle", {
        right: 0,
        duration: 0.5,
        ease: "ease-in-out",
      });
    }
  };

  const sliderReverse = () => {
    gsap.to(".text", { left: "-100%", duration: 0.5, ease: "ease-in-out" });
    gsap.to(".slidercircle", {
      right: 0,
      duration: 0.5,
      ease: "ease-in-out",
    });
    setIsSliderOpen(false);
  };

  const toggleWomenSlider = () => {
    setIsWomenSliderOpen(!isWomenSliderOpen);
    if (!isWomenSliderOpen) {
      // Si el slider está cerrado, abrirlo
      gsap.to(".text-women", { left: 0, duration: 0.5, ease: "ease-in-out" });
      gsap.to(".womenslider-gsap", {
        right: "-100%",
        duration: 0.5,
        ease: "ease-in-out",
      });
    } else {
      // Si el slider está abierto, cerrarlo
      gsap.to(".text-women", {
        left: "-100%",
        duration: 0.5,
        ease: "ease-in-out",
      });
      gsap.to(".womenslider-circle", {
        right: 0,
        duration: 0.5,
        ease: "ease-in-out",
      });
    }
  };

  const reverseWomenSlider = () => {
    gsap.to(".text-women", {
      left: "-100%",
      duration: 0.5,
      ease: "ease-in-out",
    });
    gsap.to(".womenslider-gsap", {
      right: 0,
      duration: 0.5,
      ease: "ease-in-out",
    });
    setIsWomenSliderOpen(false);
  };

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
            <CircleGraphSlider sliderReverse={sliderReverse} />
          </div>
          <div className="slidercircle">
            <CircleGraph02 toggleSlider={toggleSlider} />
          </div>
        </section>
        <section className="threeslider">
          <div className="text-women">
            <WomenSlider reverseWomenSlider={reverseWomenSlider} />
          </div>
          <div className="womenslider-gsap">
            <Women toggleWomenSlider={toggleWomenSlider} />
          </div>
        </section>
        <div className="endslider"></div>
      </section>
      <div className="separadorslider" />
      <InfoConsentimiento />
    </section>
  );
}

export default Section1;
