import { useEffect } from "react";

import "./Video.css";
import x from "../../assets/Video/X.png";

// import José from "../../assets/Video/José.jpg"
// import María from "../../assets/Video/María.jpg"
// import Pablo from "../../assets/Video/Pablo.jpg"
// import Teresa from "../../assets/Video/Teresa.jpg"

// const miniaturas = {
//   José,
//   María,
//   Pablo,
//   Teresa
// }

function Video({ close, name }) {
  const videos = {
    Pablo:
      "https://www.youtube.com/embed/DMsUfyK2SWM?rel=0&showinfo=0&controls=0",
    ["José"]:
      "https://www.youtube.com/embed/DMsUfyK2SWM?rel=0&showinfo=0&controls=0",
    Teresa:
      "https://www.youtube.com/embed/DMsUfyK2SWM?rel=0&showinfo=0&controls=0",
    ["María"]:
      "https://www.youtube.com/embed/DMsUfyK2SWM?rel=0&showinfo=0&controls=0",
  };

  useEffect(() => {
    const html = document.querySelector("html");
    html.style.overflow = "hidden";
    return () => {
      html.style.overflow = "";
    };
  }, []);

  return (
    <article className="video_container">
      <h1 className="title_video">{name}</h1>
      <iframe
        src={videos[name]}
        className="video_screen"
        allow="autoplay"
      ></iframe>
      <button className="button_close_video" onClick={() => close()}>
        <img src={x} />
      </button>
    </article>
  );
}

export default Video;
