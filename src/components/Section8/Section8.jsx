import style from "./Section8.module.css";
import frontPage from "../../assets/Section8/frontPage.png";
import data from "../../../troy.json";
import Corett from "./Corett/Corett";
import Countries from "./Paises/Countries";
import "./Section8.css";
import VideoCorett from "./VideoCorett/VideoCorett";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useEffect } from "react";

gsap.registerPlugin(ScrollTrigger);

const imagesList = {
  frontPage,
};

function convertSize(input) {
  const n = Number(input.split("px")[0]);
  const r = (n * 100) / 1920 + "vw";
  return r;
}

const { credits } = data;
const { images, text } = data.credits;

function Section8() {
  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: "#section8",
        start: "top 50%",
        end: "center center",
        scrub: true,
      },
    });
    tl.from(".credits__mano1", { x: +100, opacity: 0 });
    tl.to(".credits__mano1", { x: 0, opacity: 1 });

    const tlcredits3 = gsap.timeline({
      scrollTrigger: {
        trigger: "#section8",
        start: "top 48%",
        end: "center center",
        scrub: true,
      },
    });
    tlcredits3.from(".credits__mano3", { x: -100, opacity: 0 });
    tlcredits3.to(".credits__mano3", { x: 0, opacity: 1 });

    const tlcredits2 = gsap.timeline({
      scrollTrigger: {
        trigger: "#section8",
        start: "top 45%",
        end: "center center",
        scrub: true,
      },
    });
    tlcredits2.from(".credits__mano2", { y: -100, opacity: 0 });
    tlcredits2.to(".credits__mano2", { y: 0, opacity: 1 });

    const tlcredits4 = gsap.timeline({
      scrollTrigger: {
        trigger: "#section8",
        start: "top 43%",
        end: "center center",
        scrub: true,
      },
    });
    tlcredits4.from(".credits__mano4", { y: +100, opacity: 0 });
    tlcredits4.to(".credits__mano4", { y: 0, opacity: 1 });
  }, []);

  const creditsContainer = {
    width: convertSize(credits.width),
    height: convertSize(credits.height),
    backgroundColor: "#CFF9FF",
  };

  const picturesStyles = images.map((image) => ({
    width: convertSize(image.width),
    height: convertSize(image.height),
    top: convertSize(
      Number(image.top.split("px")[0]) -
        Number(credits.top.split("px")[0]) +
        "px"
    ),
    left: convertSize(image.left),
  }));

  const textStyles = text.map((texto) => ({
    ...texto,
    top: convertSize(
      Number(texto.top.split("px")[0]) -
        Number(credits.top.split("px")[0]) +
        "px"
    ),
    left: convertSize(texto.left),
    width: convertSize(texto.width),
    height: convertSize(texto.height),
    fontSize: convertSize(texto.fontSize),
    lineHeight: texto.lineHeight && convertSize(texto.lineHeight),
  }));

  return (
    <div>
      <section
        id="section8"
        style={creditsContainer}
        className={style.CreditsBackground}
      >
        {images.map((image, index) => (
          <img
            src={imagesList[image.name]}
            className={style.pictures}
            style={picturesStyles[index]}
            key={index}
          />
        ))}
        {text.map((texto, index) => {
          switch (texto.tag) {
            case "h1": {
              return (
                <h1
                  className={style.creditsText}
                  style={textStyles[index]}
                  key={index}
                >
                  {texto.content}
                </h1>
              );
            }
            case "h2": {
              return (
                <h2
                  className={style.creditsText}
                  style={textStyles[index]}
                  key={index}
                >
                  {texto.content}
                </h2>
              );
            }
            case "p": {
              return (
                <p
                  dangerouslySetInnerHTML={{ __html: texto.content }}
                  className={style.creditsText}
                  style={textStyles[index]}
                  key={index}
                />
              );
            }
          }
          return true;
        })}
        <div className="credits__mano1" />
        <div className="credits__mano2" />
        <div className="credits__mano3" />
        <div className="credits__mano4" />
      </section>
      <section className={style.section08}>
        <Corett />

        <Countries />

        <VideoCorett />
      </section>
    </div>
  );
}

export default Section8;
