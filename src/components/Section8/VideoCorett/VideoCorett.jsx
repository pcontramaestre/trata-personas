import React, { useState, useRef } from "react";
import data from "../../../../trataSection08.json";
import Corett from "../../../assets/Video/Corett.jpg";
import "./VideoCorett.css";

const VideoCorett = () => {
  const page5 = data[0].creditos.page5;

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
    <div className="video__corett">
      <h1 className="videocorett__title">{page5.title}</h1>
      <div>
        {showThumbnail && (
          <img
            className="video-veronika"
            src={Corett}
            alt=""
            onClick={handleThumbnailClick}
          />
        )}
        {playVideo && (
          <div>
            <iframe
              className="videocorett__button"
              src="https://drive.google.com/file/d/1PayBYFvAtRl_h9Ywg4oNqRtP3XWQPvcV/preview"
              width="640"
              height="480"
              allow="autoplay"
              ref={iframeRef}
            ></iframe>
          </div>
        )}
      </div>
      <div className="videocorett__info">
        <div className="videocorett__info-texts">
          <div className="info__separador" />
          <div className="info__text-content">
            <p
              className="info__textcorett"
              dangerouslySetInnerHTML={{ __html: page5.box.text }}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default VideoCorett;
