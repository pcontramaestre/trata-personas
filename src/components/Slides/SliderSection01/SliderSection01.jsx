import React, { useLayoutEffect } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "./SliderSection01.css";
import { gsap } from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const SliderSection01 = ({ texts }) => {
  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
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
          start: "top 5%",
          end: "+=3000 bottom",
          scrub: 2,
          pin: "#section1",
          id: "SliderSection01",
        },
      });
    });
    return () => ctx.revert();
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