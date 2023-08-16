import React from "react";
import data from "../../../../trataSection01.json";
import "./Women.css";
import women from "../../../assets/Img-Section01/Page10/women.png";
import womens from "../../../assets/Img-Section01/Page10/chicas.png";
import hand from "../../../assets/Img-Section01/Page09/hand.svg";

const Women = () => {
  const page10 = data[0].visibilizacion_victimas.page10;
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
            {/* <h1>{page10.card1.percentage1}</h1> */}
          </div>
          <div className="women__texts-content2">
            <p className="women__text-p">{page10.card2.text2}</p>
            {/* <h1>{page10.card2.percentage2}</h1> */}
            <img className="womens__img" src={womens} />
          </div>
          
        </div>
        <img className="women__background" src={women} />
       
        <img />

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
          </div>
        </div>
      </div>
      <img src={hand} />
    </div>
  );
};

export default Women;
