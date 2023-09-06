import "./BookLaboral.css";
import React, { useLayoutEffect, useEffect, useRef } from "react";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";

const BookLaboral = ({ page6 }) => {
  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: ".NoteBook03",
        start: "top 95%",
        end: "bottom 40%",
        scrub: true,
      },
    });

    tl.from(".NoteBook03", { x: +100, opacity: 0 });
    tl.to(".NoteBook03", { x: 0, opacity: 1 });
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
