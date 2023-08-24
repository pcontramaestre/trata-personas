import React from "react";
// import "./Header.css";
import data from "../../../trataHeader.json";
import style from "./Header.css"
import header1 from "../../assets/Header/header-1.jpg";
import header2 from "../../assets/Header/header-2.jpg";
import header3 from "../../assets/Header/header-3.jpg";
import header4 from "../../assets/Header/header-4.png";
import header5 from "../../assets/Header/header-5.png";
import header6 from "../../assets/Header/header-6.png";
import header7 from "../../assets/Header/header-7.png";
import header8 from "../../assets/Header/header-8.png";
import header9 from "../../assets/Header/header-9.png";

function Header() {
  const page1 = data[0].header.page1;
  return (
   <section className="header-container">
      <div className="header-container_img">
        <div className="header-text">
          <img src={header1} alt="" />
          <div className="text">{page1.text1}</div>
        </div>
        <div className="header-text">
        <img src={header2} alt="" />
          <div className="text">{page1.text2}</div>
        </div>
        <div className="header-text">
        <img src={header3} alt="" />
          <div className="text">{page1.text3}</div>
        </div>
      </div>
      <div className="header-container_img">
        <div className="header-text">
        <img src={header4} alt="" />
          <div className="text">{page1.text4}</div>
        </div>
        <div className="header-text">
          <img src={header5} alt="" />
          <div className="text">{page1.text5}</div>
        </div>
        <div className="header-text">
          <img src={header6} alt="" />
          <div className="text">{page1.text6}</div>
        </div>
      </div>
      <div className="header-container_img">
        <div className="header-text">
          <img src={header7} alt="" />
          <div className="text">{page1.text7}</div>
        </div>
        <div className="header-text">
          <img src={header8} alt="" />
          <div className="text">{page1.text8}</div>
        </div>
        <div className="header-text">
          <img src={header9} alt="" />
          <div className="text">{page1.text9}</div>
        </div>
      </div>
    </section>
  );
}

export default Header;
