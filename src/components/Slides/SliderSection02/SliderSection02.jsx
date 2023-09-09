import React from "react";
import { useLayoutEffect } from "react";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
// import Slider from "react-slick";
import data from "../../../../trataSection02.json";
import "slick-carousel/slick/slick.css";
import "./SliderSection02.css";

gsap.registerPlugin(ScrollTrigger)

const SliderSection02 = () => {

  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      gsap.to('.slider-father', {
        x: () => {
          return document.querySelector('.section__02slider').offsetWidth - document.querySelector('.slider-father').offsetWidth
        },
        ease: 'power2.inOut',
        scrollTrigger: {
          trigger: '.slider-father',
          // markers: true,
          start: 'top 20%',
          end: '+=3000 bottom',
          scrub: 2,
          pin: '#section2',
          id: 'SliderSection02',
          onEnter: () => {
            const arrayTitles = [
              // 'noteBook_section02_Explotación sexual',
              // 'noteBook_section02_Explotación laboral',
              // 'noteBook_section02_Mendicidad forzada',
              // 'noteBook_section02_Adopción irregular o ilegal',
              // 'noteBook_section02_Matrimonio forzoso',
              // 'noteBook_section02_Esclavitud',
              // 'noteBook_section02_Actividades ilícitas',
              // 'noteBook_section02_Extracción <br/> ilícita  de órganos'
            ]
            arrayTitles.forEach(noteBook => {
              const scrollTriggerNoteBook = ScrollTrigger.getById(noteBook)
              scrollTriggerNoteBook.refresh()
            })
          }
        }
      })
    })
    return () => ctx.revert()
  }, [])

  const page2 = data[0].finalidades.page2.slider;
  const texts = [
    {
      title: page2.text1,
      foot: page2.text3,
    },
    { title: page2.text2, foot: page2.text4 },
  ];
  // const settings = {
  //   dots: false,
  //   infinite: true,
  //   speed: 2500,
  //   slidesToShow: 1,
  //   slidesToScroll: 1,
  //   arrows: false,
  //   autoplay: false,
  //   // autoplaySpeed: 3000,
  // };

  // return (
  //   <Slider {...settings}>
  //     {texts.map((text, index) => (
  //       <div key={index} className="slider-container">
  //         <div key={index} className="slider">
  //           <h1
  //             className="titleslider02"
  //             dangerouslySetInnerHTML={{ __html: text.title }}
  //           />
  //           <p className="text3__slider">{text.foot}</p>
  //         </div>
  //       </div>
  //     ))}
  //   </Slider>
  // );
  return (
    <div className="slider-father">
      {texts.map((text, index) => (
        <div key={index} className="slider-container-section2">
          <div key={index} className="slider-section2">
            <h1
              className="titleslider02"
              dangerouslySetInnerHTML={{ __html: text.title }}
            />
            <p className="text3__slider-section2">{text.foot}</p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default SliderSection02;
