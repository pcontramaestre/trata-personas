import React, { useLayoutEffect, useEffect, useRef } from "react";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import "./BookMedicina.css";

const BookMedicina = ({ page7 }) => {
  useLayoutEffect(() => {
    gsap.registerPlugin(ScrollTrigger);
    const ctx = gsap.context(() => {
      const scrollTriggerSliderSection02 = ScrollTrigger.getById('SliderSection02')
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: ".NoteBook05",
          scrub: true,
          // markers: true,
          start: () => {
            return scrollTriggerSliderSection02.end - scrollTriggerSliderSection02.start + ' center'
          },
          end: () => {
            return scrollTriggerSliderSection02.end - scrollTriggerSliderSection02.start + 500 + ' center'
          },
          id: 'noteBook_section02_' + page7.title
        },
      });
  
      tl.from(".NoteBook05", { x: +100, opacity: 0 });
      tl.to(".NoteBook05", { x: 0, opacity: 1 });
    })
    return () => ctx.revert()
  }, []);
  return (
    <div className="NoteBook05">
      <div className="NoteBook05__texts">
        <p
          className="NoteBook05__text1"
          dangerouslySetInnerHTML={{ __html: page7.text1 }}
        ></p>
        <h1 className="NoteBook05__text2">{page7.text2}</h1>
        <h3 className="NoteBook05__text3">{page7.text3}</h3>
      </div>
    </div>
  );
};

export default BookMedicina;
