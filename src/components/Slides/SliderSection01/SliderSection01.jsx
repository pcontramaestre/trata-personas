import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "./SliderSection01.css";

const SliderSection01 = ({ texts }) => {
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
            <h1 className="titleslider">{text.title}</h1>
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
