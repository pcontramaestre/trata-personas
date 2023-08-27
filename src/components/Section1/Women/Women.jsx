import React from "react";
import data from "../../../../trataSection01.json";
import "./Women.css";
import gifblanco from "../../../assets/Img-Section01/Page10/gifblanco.gif";
import womens from "../../../assets/Img-Section01/Page10/chicas.png";
import hand from "../../../assets/Img-Section01/Page09/hand.svg";

const Women = () => {
  const page10 = data[0].visibilizacion_victimas.page10;
  const page11 = data[0].visibilizacion_victimas.page11;

  return (
    <div className="women">
      <div className="women__content">
        <h1
          className="women__title"
          dangerouslySetInnerHTML={{ __html: page10.title }}
        />
        <div className="women__texts">
          <div className="women__texts-content1">
            <p className="women__text-p">{page10.card1.text1}</p>
            <h1 className="women__percentage">{page10.card1.percentage1}</h1>
          </div>
          <div className="women__texts-content2">
            <p className="women__text-p">{page10.card2.text2}</p>
            <h1 className="women__percentage">{page10.card2.percentage2}</h1>
            <img className="womens__img" src={womens} />
          </div>
        </div>
        <div className="women__card-content">
          <div className="women__card1">
            <p
              className="women__card-p"
              dangerouslySetInnerHTML={{ __html: page10.card3.text3 }}
            />
          </div>
          <div className="women__card2">
            <p
              className="women__card-p"
              dangerouslySetInnerHTML={{ __html: page10.card4.text4 }}
            />
            <img className="women__gif" src={gifblanco} />
            <div className="women__popup">{page10.card4.popup}</div>
          </div>
        </div>
      </div>
      <img src={hand} />
      <div className="videocorett__info">
        <div className="videocorett__info-texts">
          <div className="info__separador" />
          <div className="info__text-content">
            <h1 className="info__title">{page11.title}</h1>
            <p
              className="info__text1"
              dangerouslySetInnerHTML={{ __html: page11.text1 }}
            />
            <h2 className="info__text2">{page11.foot}</h2>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Women;
