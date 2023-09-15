import React from "react";
import data from "../../../../trataSection08.json";
import videoCorett from "../../Video/VideoCorett.mp4";
import "./VideoCorett.css";

const VideoCorett = () => {
  const page5 = data[0].creditos.page5;
  return (
    <div className="video__corett">
      <h1 className="videocorett__title">{page5.title}</h1>
      <video controls className="videocorett__button">
        <source src={videoCorett} type="video/mp4" />
      </video>
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
