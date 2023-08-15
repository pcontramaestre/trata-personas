import style from "./Map.module.css";
import belice from "../../assets/Map/belice.svg";
import costaRica from "../../assets/Map/costaRica.svg";
import elSalvador from "../../assets/Map/elSalvador.svg";
import guatemala from "../../assets/Map/guatemala.svg";
import honduras from "../../assets/Map/honduras.svg";
import mexico from "../../assets/Map/mexico.svg";
import nicaragua from "../../assets/Map/nicaragua.svg";
import panama from "../../assets/Map/panama.svg";
import republicaDominicana from "../../assets/Map/republicaDominicana.svg";

const flags = {
  belice,
  costaRica,
  elSalvador,
  guatemala,
  honduras,
  mexico,
  nicaragua,
  panama,
  republicaDominicana,
};

function convertSize(input) {
  const n = Number(input.split("px")[0]);
  return (n * 100) / 1920 + "vw";
}

function Map({ map }) {
  if (!map) return null;
  const mapStyle = {
    height: convertSize(map.size.height),
  };
  return (
    <div className={style.MapBackground} style={mapStyle}>
      {map.countrys.map((country, index) => (
        <Card country={country} totalTop={map.top} key={index} />
      ))}
    </div>
  );
}

function Card({ country, totalTop }) {
  console.log("country:", country);
  const styleCard = {
    top: convertSize(
      Number(country.position.top.split("px")[0]) -
        Number(totalTop.split("px")[0]) +
        "px"
    ),
    left: convertSize(country.position.left),
    fontSize: convertSize(country.fontSize),
  };

  const flagStyle = {
    width: convertSize(country.flag.width),
  };

  const nameStyle = {
    width: convertSize(country.size.width),
  };

  return (
    <div className={style.MapCard} style={styleCard}>
      <img src={flags[country.flag.name]} style={flagStyle} />
      <label style={nameStyle}>{country.name.toUpperCase()}</label>
    </div>
  );
}

export default Map;
