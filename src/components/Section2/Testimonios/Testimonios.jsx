import React, { useState, useRef } from "react";
import "./Testimonios.css";
import play from "../../../assets/Img-Section02/play_button.png";

import José from "../../../assets/Video/José.jpg";
import María from "../../../assets/Video/María.jpg";
import Pablo from "../../../assets/Video/Pablo.jpg";
import Teresa from "../../../assets/Video/Teresa.jpg";
import Veronika from "../../../assets/Video/Veronica.jpg";

const miniaturas = {
  José,
  María,
  Pablo,
  Teresa,
};

const Testimonios = ({ name1, name2, laboral, handleVideosPlay }) => {
  const testimonios = [
    {
      name: name1,
    },
    {
      name: name2,
    },
  ];

  const [showThumbnail, setShowThumbnail] = useState(true);
  const [playVideo, setPlayVideo] = useState(false);
  const iframeRef = useRef(null);

  const handleThumbnailClick = () => {
    setShowThumbnail(false);
    setPlayVideo(true);
    // Reproducir el video
    iframeRef.current.contentWindow.postMessage(
      '{"event":"command","func":"playVideo","args":""}',
      "*"
    );
  };

  return (
    <div>
      {testimonios[1].name === null ? (
        <div className="videos__content">
          <div>
            <div className="video__play">
              {laboral ? (
                <h1 className="video__title laboral">{testimonios[0].name}</h1>
              ) : (
                <h1 className="video__title">{testimonios[0].name}</h1>
              )}
              <div>
                {showThumbnail && (
                  <img
                    className="video-veronika"
                    src={Veronika}
                    alt=""
                    onClick={handleThumbnailClick}
                  />
                )}
                {playVideo && (
                  <div>
                    <iframe
                      className="video__button veronika"
                      src="https://drive.google.com/file/d/1ur1Sr4Qoa20jWQ7VaolesCLjBlgOyIaK/preview"
                      width="640"
                      height="480"
                      allow="autoplay"
                      ref={iframeRef}
                    ></iframe>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      ) : (
        <div className="videos__content">
          {testimonios.map((e, index) => (
            <div key={index}>
              <div className="video__play">
                {laboral ? (
                  <h1 className="video__title laboral">{e.name}</h1>
                ) : (
                  <h1 className="video__title">{e.name}</h1>
                )}
                <div
                  onClick={() => {
                    handleVideosPlay.openVideo(e.name);
                  }}
                  className="video__button"
                  style={{ backgroundImage: `url(${miniaturas[e.name]})` }}
                >
                  {/* <img src={play} /> */}
                </div>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default Testimonios;
