import React, { useState, useRef } from "react";
import data from "../../../../trataSection08.json";
import Corett from "../../../assets/video/VideoCorett.mp4";
import "./VideoCorett.css";

const VideoCorett = () => {
  const page5 = data[0].creditos.page5;

  return (
    <div className="video__corett">
      <h1 className="videocorett__title">{page5.title}</h1>
      <div>
        <video className="videocorett__video" width="940" controls>
          <source src={Corett} type="video/mp4" />
          Tu navegador no admite la reproducción de videos MP4.
        </video>
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
