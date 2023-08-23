import React from "react";
// import "./Header.css";
import data from "../../../trataHeader.json";
import style from "./Header.css"

function Header() {
  const page1 = data[0].header.page1;
  return (
    <section className="header-container">
      <div className="header-container_img">
        <div className="header-text">
          <img src="src/assets/Header/header-1.jpg" alt="" />
          <div className="text">{page1.text1}</div>
        </div>
        <div className="header-text">
          <img src="src/assets/Header/header-2.jpg" alt="" />
          <div className="text">{page1.text2}</div>
        </div>
        <div className="header-text">
          <img src="src/assets/Header/header-3.jpg" alt="" />
          <div className="text">{page1.text3}</div>
        </div>
      </div>
      <div className="header-container_img">
        <div className="header-text">
          <img src="src/assets/Header/header-4.png" alt="" />
          <div className="text">{page1.text4}</div>
        </div>
        <div className="header-text">
          <img src="src/assets/Header/header-5.png" alt="" />
          <div className="text">{page1.text5}</div>
        </div>
        <div className="header-text">
          <img src="src/assets/Header/header-6.png" alt="" />
          <div className="text">{page1.text6}</div>
        </div>
      </div>
      <div className="header-container_img">
        <div className="header-text">
          <img src="src/assets/Header/header-7.png" alt="" />
          <div className="text">{page1.text7}</div>
        </div>
        <div className="header-text">
          <img src="src/assets/Header/header-8.png" alt="" />
          <div className="text">{page1.text8}</div>
        </div>
        <div className="header-text">
          <img src="src/assets/Header/header-9.png" alt="" />
          <div className="text">{page1.text9}</div>
        </div>
      </div>
    </section>
  );
}

export default Header;
