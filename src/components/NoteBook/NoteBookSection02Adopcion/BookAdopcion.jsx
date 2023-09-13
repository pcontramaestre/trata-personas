import React, { useLayoutEffect, useEffect, useRef } from "react";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import "./BookAdopcion.css";

const BookAdopcion = ({ page8 }) => {
  useLayoutEffect(() => {
    gsap.registerPlugin(ScrollTrigger);
    const ctx = gsap.context(() => {
      const scrollTriggerSliderSection02 = ScrollTrigger.getById('SliderSection02')
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: ".NoteBook06",
          // start: "top 95%",
          // end: "bottom 50%",
          scrub: true,
          // markers: true,
          start: () => {
            return scrollTriggerSliderSection02.end - scrollTriggerSliderSection02.start + ' center'
          },
          end: () => {
            return scrollTriggerSliderSection02.end - scrollTriggerSliderSection02.start + 350 + ' center'
          },
          id: 'noteBook_section02_' + page8.title
        },
      });
      tl.from(".NoteBook06", { x: -100, opacity: 0 });
      tl.to(".NoteBook06", { x: 0, opacity: 1 });
    })
    return () => ctx.revert()
  }, []);
  return (
    <div className="NoteBook06">
      <div className="NoteBook06__texts">
        <p
          className="NoteBook06__text1"
          dangerouslySetInnerHTML={{ __html: page8.text1 }}
        ></p>
        <h1 className="NoteBook06__text2">{page8.text2}</h1>
        <h3 className="NoteBook06__text3">{page8.text3}</h3>
      </div>
    </div>
  );
};

export default BookAdopcion;
