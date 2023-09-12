import React, { useLayoutEffect } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "./SliderSection01.css";
import { gsap } from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import data from "../../../../trataSection01.json";

gsap.registerPlugin(ScrollTrigger);

const SliderSection01 = () => {
  const page2 = data[0].visibilizacion_victimas.page2.slider;
  const texts = [
    {
      title: page2.content1.title,
      text2: page2.content1.text2,
      text1: "",
      text3: page2.content1.text3,
    },
    {
      title: page2.content2.title,
      text1: page2.content2.text1,
      text2: page2.content2.text2,
      text3: page2.content2.text3,
    },
  ];
  useLayoutEffect(() => {
    const animation = gsap.context(() => {
      gsap.to(".slider-father01", {
        x: () => {
          return (
            document.querySelector(".section__01slider").offsetWidth -
            document.querySelector(".slider-father01").offsetWidth
          );
        },
        ease: "power2.inOut",
        scrollTrigger: {
          trigger: ".slider-father01",
          // markers: true,
          start: "top 20%",
          end: "+=3000 bottom",
          scrub: 3,
          pin: "#section1",
          id: "SliderSection01",
        },
      });
    });
    return () => animation.revert();
  }, []);

  return (
    <div className="slider-father01">
      {texts.map((text, index) => (
        <div key={index} className="slider-container">
          <div key={index} className="slider">
            <h1
              className="titleslider"
              dangerouslySetInnerHTML={{ __html: text.title }}
            />
            <p className="text2__slider">{text.text1}</p>
            <p
              className="text1__slider"
              dangerouslySetInnerHTML={{ __html: text.text2 }}
            ></p>
            <p className="text3__slider">{text.text3}</p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default SliderSection01;
