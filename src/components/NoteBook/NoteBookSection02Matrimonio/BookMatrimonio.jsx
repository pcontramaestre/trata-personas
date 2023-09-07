import React, { useLayoutEffect, useEffect, useRef } from "react";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import "./BookMatrimonio.css";

const BookMatrimonio = ({ page9 }) => {
  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: ".NoteBook07",
        start: "top 95%",
        end: "bottom 40%",
        scrub: true,
      },
    });

    tl.from(".NoteBook07", { x: +100, opacity: 0 });
    tl.to(".NoteBook07", { x: 0, opacity: 1 });
  }, []);
  return (
    <div className="NoteBook07">
      <div className="NoteBook07__texts">
        <p
          className="NoteBook07__text1"
          dangerouslySetInnerHTML={{ __html: page9.text1 }}
        ></p>
        <h1 className="NoteBook07__text2">{page9.text2}</h1>
        <h3 className="NoteBook07__text3">{page9.text3}</h3>
      </div>
    </div>
  );
};

export default BookMatrimonio;
