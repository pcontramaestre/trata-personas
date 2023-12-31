import NoteBookSection01 from "../NoteBook/NoteBookSection01/NoteBookSection01";
import BarGraphSection01 from "../BarGraph/BarGraphSection01/BarGraphSection01";
import CircleGraph from "./CircleGraph/CircleGraph";
import NewSection01 from "../News/NewsSection01/NewSection01";
import data from "../../../trataSection01.json";
import "./Section1.css";
import MapSection01 from "../Map/MapSection01/MapSection01";
import CircleGraph02 from "./CircleGraph02/CircleGraph02";
import Women from "./Women/Women";
import React, { useEffect, useLayoutEffect, useState } from "react";
import WomenSlider from "../Section1/WomenSlider/WomenSlider";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import CircleGraphSlider from "./CircleGraphSlider/CircleGraphSlider";
import SliderSection01 from "../Slides/SliderSection01/SliderSection01";

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
        left: "-100%",
        duration: 0.5,
        ease: "ease-in-out",
      }); // Cambio aquí
    } else {
      gsap.to(".text", { left: "100%", duration: 0.5, ease: "ease-in-out" }); // Cambio aquí
      gsap.to(".slidercircle", { left: 0, duration: 0.5, ease: "ease-in-out" }); // Cambio aquí
    }
  };

  const sliderReverse = () => {
    gsap.to(".text", { left: "+100%", duration: 0.5, ease: "ease-in-out" });
    gsap.to(".slidercircle", {
      left: 0,
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
        left: "-100%",
        duration: 0.5,
        ease: "ease-in-out",
      });
    } else {
      // Si el slider está abierto, cerrarlo
      gsap.to(".text-women", {
        left: "100%",
        duration: 0.5,
        ease: "ease-in-out",
      });
      gsap.to(".womenslider-circle", {
        left: 0,
        duration: 0.5,
        ease: "ease-in-out",
      });
    }
  };

  const reverseWomenSlider = () => {
    gsap.to(".text-women", {
      left: "+100%",
      duration: 0.5,
      ease: "ease-in-out",
    });
    gsap.to(".womenslider-gsap", {
      left: 0,
      duration: 0.5,
      ease: "ease-in-out",
    });
    setIsWomenSliderOpen(false);
  };

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    const manosLeft = document.querySelector(`.page1__manosleft`);
    const manosRight = document.querySelector(`.page1__manosright`);
    const priceLeft = document.querySelector(`.page1__priceleft`);
    const priceRight = document.querySelector(`.page1__priceright`);
    const manos = document.querySelector(".page1__manos");

    // Configura la animación para que las manos caigan en diagonal
    gsap.from(manos, {
      x: -100, // Posición inicial horizontal (izquierda)
      y: -100, // Posición inicial vertical (arriba)
      rotation: 15, // Rotación en grados (inclinación)
      duration: 1, // Duración de la animación
      opacity: 0, // Opacidad inicial (comienza completamente transparente)
      duration: 1, // Duración de la animación
      ease: "power4.out", // Curva de easing (ajusta según tus preferencias)
      scrollTrigger: {
        trigger: ".page1__manos",
        start: "top center", // Comienza la animación cuando las manos están en el centro de la vista
        end: "bottom center", // Termina la animación cuando las manos están en el centro de la vista
        scrub: true, // Para que el efecto sea suave
      },
    });

    // Configura el efecto de péndulo para manos_left
    gsap.fromTo(
      manosLeft,
      { rotation: -10 },
      {
        rotation: 10,
        transformOrigin: "center",
        ease: "none",
        scrollTrigger: {
          trigger: manosLeft,
          start: "top center",
          end: "center",
          scrub: true, // Para que el efecto sea suave
        },
      }
    );

    // Configura el efecto de péndulo para manos_right
    gsap.fromTo(
      manosRight,
      { rotation: 10 },
      {
        rotation: -10,
        transformOrigin: "center",
        ease: "none",
        scrollTrigger: {
          trigger: manosRight,
          start: "top center",
          end: "center",
          scrub: true, // Para que el efecto sea suave
        },
      }
    );

    // Configura el efecto inverso para price_left
    gsap.fromTo(
      priceLeft,
      { rotation: 10 },
      {
        rotation: -10,
        transformOrigin: "center",
        ease: "none",
        scrollTrigger: {
          trigger: manosLeft, // Usa el mismo trigger que manos_left
          start: "top center",
          end: "center",
          scrub: true, // Para que el efecto sea suave
        },
      }
    );

    // Configura el efecto inverso para price_right
    gsap.fromTo(
      priceRight,
      { rotation: -10 },
      {
        rotation: 10,
        transformOrigin: "center",
        ease: "none",
        scrollTrigger: {
          trigger: manosRight, // Usa el mismo trigger que manos_right
          start: "top center",
          end: "center",
          scrub: true, // Para que el efecto sea suave
        },
      }
    );
  }, []);


  useLayoutEffect(() => {
    const scrollTriggerSliderSection01 =
      ScrollTrigger.getById("SliderSection01");
    const scrollMap = ScrollTrigger.getById("mapPinned");
    const circleSlider = gsap.context(() => {
      gsap.to(".twoslider", {
        x: "-100vw",
        ease: "power2.inOut",
        scrollTrigger: {
          trigger: ".twoslider",
          // markers: true,
          start: () => {
            return (
              scrollTriggerSliderSection01.end -
              scrollTriggerSliderSection01.start +
              scrollMap.end -
              scrollMap.start +
              -30 +
              "top"
            );
          },
          end: "+=3000 bottom",
          scrub: 3,
          pin: "#section1",
          id: "SliderCircle",
        },
      });
    });
    return () => circleSlider.revert();
  }, []);

  useLayoutEffect(() => {
    const scrollTriggerCircle = ScrollTrigger.getById("SliderCircle");
    const scrollTriggerSlider01 = ScrollTrigger.getById("SliderSection01");
    const womenSlider = gsap.context(() => {
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: ".threeslider",
          // markers: true,
          // start: () => {
          //   return (
          //     scrollTriggerCircle.end -
          //     scrollTriggerCircle.start +
          //     scrollTriggerSlider01.end -
          //     scrollTriggerSlider01.start +
          //     "top 2%"
          //   );
          // },
          start: "top 2%",
          end: "bottom+=4000 bottom",
          scrub: 2,
          pin: "#section1",
          id: "SliderCircle",
          pinnedContainer: "#section1",
          pinSpacing: true,
        },
      });

      tl.from(".women__texts", {
        scaleX: 0.6,
        transformOrigin: "left",
        ease: "power2.out",
      });
      tl.from(
        ".women__texts-content1",
        {
          opacity: 0,
        },
        0.5
      );
      tl.from(
        ".women__texts-content2",
        {
          opacity: 0,
        },
        0.5
      );
      tl.from(
        ".womens__img",
        {
          y: 50,
          opacity: 0,
        },
        0.5
      );
      tl.to(".threeslider", {
        x: "-100vw",
        ease: "power2.inOut",
        duration: 5
      });
    });
    return () => womenSlider.revert();
  }, []);

  return (
    <section id="section1" className="Section1">
      <div className="page1content">
        <div className="relleno" />
        <div className="page1">
          <div className="page1__images">
            <div className="page1__manos" />
            <div className="page1__rejas" />
            <div className="manosleft__content">
              <div className="page1__manosleft" />
              <div className="page1__antebrazosleft" />
              <div className="page1__priceleft" />
            </div>
            <div className="manosright__content">
              <div className="page1__manosright" />
              <div className="page1__antebrazosright" />
              <div className="page1__priceright" />
            </div>
          </div>
        </div>
        <h1 className="page1__title">
          {page1.text1} <br /> {page1.text2}
        </h1>
        <div className="section__01slider">
          <SliderSection01 />
        </div>
      </div>
      <NoteBookSection01 />
      <BarGraphSection01 />
      <MapSection01 />
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
        {/* <div className="endslider"></div> */}
      </section>
      <div className="separadorslider" />
      {/* <InfoConsentimiento /> */}
    </section>
  );
}

export default Section1;
