import React, { useLayoutEffect, useEffect, useRef } from "react";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import "./BookMedicina.css";

const BookMedicina = ({ page7 }) => {
  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: ".NoteBook05",
        start: "top 95%",
        end: "bottom 150%",
        scrub: true,
      },
    });

    tl.from(".NoteBook05", { x: +100, opacity: 0 });
    tl.to(".NoteBook05", { x: 0, opacity: 1 });
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
