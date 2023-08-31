import { useEffect } from "react";
import { ReactComponent as Map } from "../../../assets/Section5/mapa/mapa3.svg"; // Cambio de "map" a "Map"
import "./Mapsection05.css";
import arrowMX from '../../../assets/Section5/mapa/MEXICO_Mexico.svg'
import arrowGT from '../../../assets/Section5/mapa/GUATEMALA_Guatemala.svg'
import arrowBZ from '../../../assets/Section5/mapa/BELICE_Belice.svg'
import arrowSV from '../../../assets/Section5/mapa/ELSALVADOR_El.svg'
import arrowHN from '../../../assets/Section5/mapa/HONDURAS_Honduras.svg'
import arrowCR from '../../../assets/Section5/mapa/COSTARICA_Costa.svg'
import arrowPA from '../../../assets/Section5/mapa/PANAMA_Panama.svg'
import arrowDO from '../../../assets/Section5/mapa/REPUBLICADOMINICANA.svg'

const arrayCountries = ["MX", "GT", "BZ", "SV", "HN", "NI", "CR", "PA", "DO"];

function MapSection05() {
  useEffect(() => {
    const countries = arrayCountries.map((country) => {
      let countryTag = document.querySelector("#" + country);
      if (!countryTag) {
        countryTag = document.querySelector("#" + country + map.name);
      }
      return countryTag;
    });
    
    countries.forEach((country) => {
        country.addEventListener("mouseenter", () => {
          console.log("hola");
        const mapImg = document.querySelector("#mapImg1")
        mapImg.style.display = "visibility"
        
      });
      country.addEventListener("mouseleave", () => {
       
      });
    });
  },[]);
 
  return (
    <div className="map-container">
      <Map />
      <img id="mapImg1" src={arrowMX} alt="" />
      <img id="mapImg2" src={arrowGT} alt="" />
      <img id="mapImg3" src={arrowBZ} alt="" />
      <img id="mapImg4" src={arrowSV} alt="" />
      <img id="mapImg5" src={arrowHN} alt="" />
      <img id="mapImg6" src={arrowCR} alt="" />
      <img id="mapImg7" src={arrowPA} alt="" />
      <img id="mapImg8" src={arrowDO} alt="" />
    </div>
  );
}

export default MapSection05;
