import "./NoteBookSection02.css";
import React, { useLayoutEffect, useEffect, useRef } from "react";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";

const NoteBookSection02 = ({ page4 }) => {
  useLayoutEffect(() => {
    gsap.registerPlugin(ScrollTrigger);
    const ctx = gsap.context(() => {
      const scrollTriggerSliderSection02 = ScrollTrigger.getById('SliderSection02')
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: ".NoteBook02__container",
          // markers: true,
          scrub: true,
          start: () => {
            return scrollTriggerSliderSection02.end - scrollTriggerSliderSection02.start + ' center'
          },
          end: () => {
            return scrollTriggerSliderSection02.end - scrollTriggerSliderSection02.start + 500 + ' center'
          },
          id: 'noteBook_section02_' + page4.title
        },
      });
  
      tl.from(".NoteBook02", { x: -100, opacity: 0 });
      tl.to(".NoteBook02", { x: 0, opacity: 1 });
    })
    return () => ctx.revert()
  }, []);

  return (
    <div className="NoteBook02__container">
      <div className="NoteBook02">
        <div className="NoteBook02__texts">
          <p
            className="NoteBook02__text1"
            dangerouslySetInnerHTML={{ __html: page4.text1 }}
          ></p>
          <h1 className="NoteBook02__text2">{page4.text2}</h1>
          <h3 className="NoteBook02__text3">{page4.text3}</h3>
        </div>
      </div>
    </div>
  );
};

export default NoteBookSection02;
