import React, { useState, useEffect } from "react";
import "./Header.css";
import data from "../../../trataHeader.json";
import header1 from "../../assets/Header/header-1.jpg";
import header2 from "../../assets/Header/header-2.jpg";
import header3 from "../../assets/Header/header-3.jpg";
import header4 from "../../assets/Header/header-4.png";
import header5 from "../../assets/Header/header-5.png";
import header6 from "../../assets/Header/header-6.png";
import header7 from "../../assets/Header/header-7.png";
import header8 from "../../assets/Header/header-8.png";
import header9 from "../../assets/Header/header-9.png";
import menuBlancoImg from '../../assets/Header/menu-blanco.png';

function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [fixedPosition, setFixedPosition] = useState(true);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };
  
  const page1 = data[0].header.page1;
  return (
    <div>
      <div className="hamburger-icon" onClick={toggleMenu}>
        {
          <img src={menuBlancoImg} alt="Menu Icon" className="hamburger-icon"/>
        }
      </div>
      {menuOpen && (
        <div className={`menu-expanded ${menuOpen ? 'active' : ''}`}>
          {
            <section className="header-container">
              <div className="header-container_img">
                <div className="header-text">
                <a href="#section1" onClick={toggleMenu}>
                  <img src={header1} alt="" />
                  <div className="text">{page1.text1}</div>
                </a>
                </div>
                <div className="header-text">
                <a href="#section2" onClick={toggleMenu}>
                  <img src={header2} alt="" />
                  <div className="text">{page1.text2}</div>
                </a>
                </div>
                <div className="header-text">
                <a href="#section3" onClick={toggleMenu}>
                  <img src={header3} alt="" />
                  <div className="text">{page1.text3}</div>
                </a>
                </div>
              </div>
              <div className="header-container_img">
                <div className="header-text">
                <a href="#section4" onClick={toggleMenu}>
                  <img src={header4} alt="" />
                  <div className="text">{page1.text4}</div>
                </a>
                </div>
                <div className="header-text">
                <a href="#section5" onClick={toggleMenu}>
                  <img src={header5} alt="" />
                  <div className="text">{page1.text5}</div>
                </a>
                </div>
                <div className="header-text">
                <a href="#section6" onClick={toggleMenu}>
                  <img src={header6} alt="" />
                  <div className="text">{page1.text6}</div>
                </a>
                </div>
              </div>
              <div className="header-container_img">
                <div className="header-text">
                <a href="#section7" onClick={toggleMenu}>
                  <img src={header7} alt="" />
                  <div className="text">{page1.text7}</div>
                </a>
                </div>
                <div className="header-text">
                <a href="#section8" onClick={toggleMenu}>
                  <img src={header8} alt="" />
                  <div className="text">{page1.text8}</div>
                </a>
                </div>
                <div className="header-text">
                <a href="#section9" onClick={toggleMenu}>
                  <img src={header9} alt="" />
                  <div className="text">{page1.text9}</div>
                </a>
                </div>
              </div>
            </section>
          }
        </div>
      )}
    </div>
  );
}

export default Header;
