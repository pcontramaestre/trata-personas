import React, { useEffect, useRef } from "react";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import "./Countries.css";
import data from "../../../../trataSection08.json";
import belices from "../../../assets/Section8/Page2/belice.png";
import costarica from "../../../assets/Section8/Page2/costarica.png";
import elsalvador from "../../../assets/Section8/Page2/elsalvador.png";
import guatemala from "../../../assets/Section8/Page2/guatemala.png";
import honduras from "../../../assets/Section8/Page2/honduras.png";
import mexico from "../../../assets/Section8/Page2/mexico.png";
import nicaragua from "../../../assets/Section8/Page2/nicaragua.png";
import panama from "../../../assets/Section8/Page2/panama.png";
import rdm from "../../../assets/Section8/Page2/rdm.png";
gsap.registerPlugin(ScrollTrigger);

const Countries = () => {
  const page4 = data[0].creditos.page4;

  const countries = [
    {
      name: page4.country1,
      title: page4.titlebelice,
      image: belices,
      background: "blue",
    },
    {
      name: page4.country2,
      title: page4.titlecostarica,
      image: costarica,
      background: "pink",
    },
    {
      name: page4.country3,
      title: page4.titleelsalvador,
      image: elsalvador,
      background: "blue",
    },
    {
      name: page4.country4,
      title: page4.titleguatemala,
      image: guatemala,
      background: "pink",
    },
    {
      name: page4.country5,
      title: page4.titlehonduras,
      image: honduras,
      background: "blue",
    },
    {
      name: page4.country6,
      title: page4.titlemexico,
      image: mexico,
      background: "pink",
    },
    {
      name: page4.country7,
      title: page4.titlenicaragua,
      image: nicaragua,
      background: "blue",
    },
    {
      name: page4.country8,
      title: page4.titlepanama,
      image: panama,
      background: "pink",
    },
    {
      name: page4.country9,
      title: page4.titlerdm,
      image: rdm,
      background: "blue",
    },
  ];

  const animateCountry = (element, direction) => {
    gsap.from(element, {
      x: direction === "right" ? "100%" : "-100%",
      opacity: 0,
      duration: 1,
      scrollTrigger: {
        trigger: element,
        start: "top center",
        end: "bottom center",
        toggleActions: "play none none reverse",
      },
    });
  };

  return (
    <div className="countries">
      {countries.map((e, index) => (
        <div
          className={`${
            e.background === "pink"
              ? "countries__backgroundrosa"
              : "countries__background"
          } `}
          key={index}
          ref={(el) =>
            animateCountry(el, e.background === "pink" ? "left" : "right")
          }
        >
          <div className="countries__content">
            <div className="countries__name">
              <img className="countries__img" src={e.image} />
              <h1
                className={`${
                  e.background === "pink"
                    ? "name__country rosaname"
                    : "name__country"
                }`}
              >
                {e.name}
              </h1>
            </div>
            <p
              dangerouslySetInnerHTML={{ __html: e.title }}
              className="text__country"
            />
          </div>
        </div>
      ))}
    </div>
  );
};

export default Countries;
