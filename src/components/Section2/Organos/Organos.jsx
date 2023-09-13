import React, { useLayoutEffect, useEffect, useRef } from "react";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import "./Organos.css";
import data from "../../../../trataSection02.json";
import camilla from "../../../assets/Img-Section02/Page13/organs.png";
import arrow from "../../../assets/Img-Section02/Page13/arrow.svg";

const Organos = () => {
  const page13 = data[0].finalidades.page13;
  useLayoutEffect(() => {
    gsap.registerPlugin(ScrollTrigger);
    const ctx = gsap.context(() => {
      const scrollTriggerSliderSection02 = ScrollTrigger.getById('SliderSection02')
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: ".book_organos__container",
          // start: "top 95%",
          // end: "bottom 30%",
          scrub: true,
          // markers: true,
          start: () => {
            return scrollTriggerSliderSection02.end - scrollTriggerSliderSection02.start + 70 + ' center'
          },
          end: () => {
            return scrollTriggerSliderSection02.end - scrollTriggerSliderSection02.start + 500 + ' center'
          },
          id: 'noteBook_section02_' + page13.title
        },
      });
  
      tl.from(".book_organos", { x:+100, opacity: 0 });
      tl.to(".book_organos", { x: 0, opacity: 1 });
    })
    return () => ctx.revert()
  }, []);
  return (
    <div className="organos">
      <div className="organos__content">
        <div className="organos__title-book">
          <h1
            className="organos__title"
            dangerouslySetInnerHTML={{ __html: page13.title }}
          />
          <div className="book_organos__container">
            <div className="book_organos">
              <div className="books__texts-organos">
                <div className="arrow__book">
                  <img className="arrow__img" src={arrow} />
                  <p
                    className="books__text"
                    dangerouslySetInnerHTML={{ __html: page13.text1 }}
                  />
                </div>
                <div className="arrow__book booktres">
                  <img className="arrow__img" src={arrow} />
                  <p
                    className="books__text"
                    dangerouslySetInnerHTML={{ __html: page13.text2 }}
                  />
                </div>
                <div className="arrow__book booktres">
                  <img className="arrow__img" src={arrow} />
                  <p
                    className="books__text"
                    dangerouslySetInnerHTML={{ __html: page13.text3 }}
                  />
                </div>
                <h3 className="book__text-foot">{page13.text4}</h3>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="organos__img-content">
        <p
          className="organos__text-foot"
          dangerouslySetInnerHTML={{ __html: page13.foot }}
        />
      </div>
      {/* <img className="organos__img" src={camilla} /> */}
    </div>
  );
};

export default Organos;
