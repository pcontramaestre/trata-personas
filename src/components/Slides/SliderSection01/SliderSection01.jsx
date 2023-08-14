import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "./SliderSection01.css";

const SliderSection01 = ({ texts }) => {
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
  };

  console.log(texts);

  return (
    <Slider {...settings}>
      {texts.map((text, index) => (
        <div className="slider-container">
          <div key={index} className="slider">
            <h1 className="titleslider">{text.title}</h1>
            <p className="text2__slider">{text.text1}</p>
            <p className="text1__slider">{text.text2}</p>
            <p className="text3__slider">{text.text3}</p>
          </div>
        </div>
      ))}
    </Slider>
  );
};

export default SliderSection01;
