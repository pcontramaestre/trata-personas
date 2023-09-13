import "./BookLaboral.css";
import React, { useLayoutEffect, useEffect, useRef } from "react";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";

const BookLaboral = ({ page6 }) => {
  useLayoutEffect(() => {
    gsap.registerPlugin(ScrollTrigger);
    const ctx = gsap.context(() => {
      const scrollTriggerSliderSection02 = ScrollTrigger.getById('SliderSection02')
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: ".NoteBook03",
          scrub: true,
          // markers: true,
          start: () => {
            return scrollTriggerSliderSection02.end - scrollTriggerSliderSection02.start + ' center'
          },
          end: () => {
            return scrollTriggerSliderSection02.end - scrollTriggerSliderSection02.start + 100 + ' center'
          },
          id: 'noteBook_section02_' + page6.title
        },
      });
  
      tl.from(".NoteBook03", { x: +100, opacity: 0 });
      tl.to(".NoteBook03", { x: 0, opacity: 1 });
    })
    return () => ctx.revert()
  }, []);

  return (
    <div className="NoteBook03">
      <div className="NoteBook03__texts">
        <p
          className="NoteBook03__text1"
          dangerouslySetInnerHTML={{ __html: page6.text1 }}
        ></p>
        <h1 className="NoteBook03__text2">{page6.text2}</h1>
        <h3 className="NoteBook03__text3">{page6.text3}</h3>
      </div>
    </div>
  );
};

export default BookLaboral;
