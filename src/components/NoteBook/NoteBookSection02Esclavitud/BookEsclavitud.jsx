import React, { useLayoutEffect, useEffect, useRef } from "react";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import "./BookEsclavitud.css"

const BookEsclavitud = ({page10}) => {
  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: ".NoteBook08",
        start: "top 95%",
        end: "bottom 40%",
        scrub: true,
      },
    });

    tl.from(".NoteBook08", { x: -100, opacity: 0 });
    tl.to(".NoteBook08", { x: 0, opacity: 1 });
  }, []);
  return (
    <div className="NoteBook08__container">
    <div className="NoteBook08">
      <div className="NoteBook08__texts">
        <p
          className="NoteBook08__text1"
          dangerouslySetInnerHTML={{ __html: page10.text1 }}
        ></p>
        <h1 className="NoteBook08__text2">{page10.text2}</h1>
        <h3 className="NoteBook08__text3">{page10.text3}</h3>
      </div>
    </div>
  </div>
  )
}

export default BookEsclavitud