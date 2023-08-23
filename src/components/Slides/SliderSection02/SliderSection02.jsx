import React from "react";
import Slider from "react-slick";
import data from "../../../../trataSection02.json";
import "slick-carousel/slick/slick.css";
import "./SliderSection02.css";

const SliderSection02 = () => {
  const page2 = data[0].finalidades.page2.slider;
  const texts = [
    {
      title: page2.text1,
      foot: page2.text3,
    },
    { title: page2.text2, foot: page2.text4 },
  ];
  const settings = {
    dots: false,
    infinite: true,
    speed: 2500,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
    autoplay: true,
    autoplaySpeed: 3000,
  };

  return (
      <Slider {...settings}>
        {texts.map((text, index) => (
          <div key={index} className="slider-container">
            <div key={index} className="slider">
              <h1 className="titleslider02" dangerouslySetInnerHTML={{ __html: text.title }} />
              <p className="text3__slider">{text.foot}</p>
            </div>
          </div>
        ))}
      </Slider>
  );
};

export default SliderSection02;
