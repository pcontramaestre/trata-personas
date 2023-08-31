import React, { useEffect } from "react";
import data from "../../../../trataSection01.json";
import "./MapSection01.css";
import { ReactComponent as MapNumber } from "../../../assets/Img-Section01/Page05/mapanumbertwo.svg";
import hand from "../../../assets/Img-Section01/Page05/hand_click.svg";

const MapSection01 = () => {
  const page5 = data[0].visibilizacion_victimas.page5;
  const mapsIDstyles = ["MX", "GT", "BZ", "SV", "HN", "NI", "CR", "PA", "DO"];

  const mapsID = [
    "#MX02",
    "#GT02",
    "#BZ02",
    "#SV02",
    "#HN02",
    "#NI02",
    "#CR02",
    "#PA02",
    "#DO02",
  ];

  const handleMouseEnter = (maphoverContent) => () => {
    maphoverContent.style.display = "block";
  };

  const handleMouseLeave = (maphoverContent) => () => {
    maphoverContent.style.display = "none";
  };

  useEffect(() => {
    mapsID.forEach((mapId) => {
      const mapcontent = document.querySelector(mapId);
      const countryCode = mapId.substring(1, 3);
      const maphoverContent = document.querySelector(`.${countryCode}map`);

      const enterHandler = handleMouseEnter(maphoverContent);
      const leaveHandler = handleMouseLeave(maphoverContent);

      mapcontent.addEventListener("mouseenter", enterHandler);
      mapcontent.addEventListener("mouseleave", leaveHandler);

      return () => {
        mapcontent.removeEventListener("mouseenter", enterHandler);
        mapcontent.removeEventListener("mouseleave", leaveHandler);
      };
    });
  }, []);

  return (
    <div className="map__section01">
      <h1 className="map__title">{page5.title}</h1>
      <h2 className="map__text1">{page5.text1}</h2>
      <div className="map__content">
        <div className="map__percentage">
          <ul className="percentage__list">
            <li className="percentage1"></li>
            <li className="percentage2"></li>
            <li className="percentage3"></li>
          </ul>
          <ul className="percentage__number">
            <li>{page5.graphic_default.percentage1}</li>
            <li>{page5.graphic_default.percentage2}</li>
            <li>{page5.graphic_default.percentage3}</li>
          </ul>
        </div>
        <div className="mapcontent">
          <MapNumber className="mapnumber02" />
        </div>
        {mapsIDstyles.map((e, index) => (
          <div key={index} className={`maphover__content ${e}map`}>
            <div className={`maphovertext ${e}text`} />
            <div className={`maphoverimg ${e}img`} />
          </div>
        ))}
        <div className="map__foot">
          <img className="map__foot-img" src={hand} />
          <h2 className="map__foot-text">{page5.graphic_default.foot}</h2>
        </div>
      </div>
    </div>
  );
};

export default MapSection01;
