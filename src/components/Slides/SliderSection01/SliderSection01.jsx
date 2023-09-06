import React, { useEffect, useState } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "./SliderSection01.css";
import { gsap } from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const animateSlide = (slide, setSlidesViewed) => {
  const tween = gsap.fromTo(slide, { x: "100%" }, { x: "0%", duration: 20000 });

  ScrollTrigger.create({
    trigger: slide,
    animation: tween,
    start: "top bottom-=75%",
    end: "bottom 75%",
    toggleActions: "play none none none",
    scrub: true,
    onToggle: (self) => {
      if (self.isActive) {
        setSlidesViewed((prev) => prev + 1);
      }
    },
  });
};

const SliderSection01 = ({ texts }) => {
  const [slidesViewed, setSlidesViewed] = useState(0);
  const [enableScroll, setEnableScroll] = useState(false);

  useEffect(() => {
    gsap.utils
      .toArray(".slider-container")
      .forEach((slide) => animateSlide(slide, setSlidesViewed));
  }, []);

  useEffect(() => {
    if (slidesViewed === texts.length) {
      setEnableScroll(true);
    }
  }, [slidesViewed, texts]);

  useEffect(() => {
    if (enableScroll) {
      // Enable page scrolling when all slides have been viewed
      gsap.to(window, { duration: 0.1, scrollTo: "max" });
      document.body.style.overflow = "auto"; // Restore scrolling
    } else {
      document.body.style.overflow = "hidden"; // Disable scrolling
    }
  }, [enableScroll]);

  const settings = {
    dots: false,
    infinite: true,
    speed: 2500,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
    autoplay: false,
  };

  return (
    <Slider {...settings}>
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
    </Slider>
  );
};

export default SliderSection01;
