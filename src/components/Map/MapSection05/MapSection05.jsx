import { useEffect } from "react";
import { ReactComponent as Map } from "../../../assets/Section5/mapa/mapa3.svg"; // Cambio de "map" a "Map"
import { ReactComponent as ArrowMX} from '../../../assets/Section5/mapa/MEXICO_Mexico.svg'
import { ReactComponent as ArrowGT} from '../../../assets/Section5/mapa/GUATEMALA_Guatemala.svg'
import { ReactComponent as ArrowBZ} from '../../../assets/Section5/mapa/BELICE_Belice.svg'
import { ReactComponent as ArrowSV} from '../../../assets/Section5/mapa/ELSALVADOR_El.svg'
import { ReactComponent as ArrowHN} from '../../../assets/Section5/mapa/HONDURAS_Honduras.svg'
import { ReactComponent as ArrowCR} from '../../../assets/Section5/mapa/COSTARICA_Costa.svg'
import { ReactComponent as ArrowPA} from '../../../assets/Section5/mapa/PANAMA_Panama.svg'
import { ReactComponent as ArrowDO} from '../../../assets/Section5/mapa/REPUBLICADOMINICANA.svg'
import "./Mapsection05.css";
// import arrowMX from '../../../assets/Section5/mapa/MEXICO_Mexico.svg'
// import arrowGT from '../../../assets/Section5/mapa/GUATEMALA_Guatemala.svg'
// import arrowBZ from '../../../assets/Section5/mapa/BELICE_Belice.svg'
// import arrowSV from '../../../assets/Section5/mapa/ELSALVADOR_El.svg'
// import arrowHN from '../../../assets/Section5/mapa/HONDURAS_Honduras.svg'
// import arrowCR from '../../../assets/Section5/mapa/COSTARICA_Costa.svg'
// import arrowPA from '../../../assets/Section5/mapa/PANAMA_Panama.svg'
// import arrowDO from '../../../assets/Section5/mapa/REPUBLICADOMINICANA.svg'

const arrayCountries = ["MX", "GT", "BZ", "SV", "HN", "CR", "PA", "DO", "NI"];
// const countriesImage = [
//   arrowMX,
//   arrowGT,
//   arrowBZ,
//   arrowSV,
//   arrowHN,
//   arrowCR,
//   arrowPA,
//   arrowDO
// ]

const numberImages = {

}

function MapSection05() {
  useEffect(() => {
    const mapImages = arrayCountries.map((image, index) => {
      return document.querySelector('#mapImg' + (index + 1))
    })
    const countries = arrayCountries.map((country, index) => {
      return document.querySelector("#" + country);
    });
    
    countries.forEach((country, index) => {
      if (mapImages[index]) {
        country.addEventListener("mouseenter", () => {
          mapImages[index].style.display = "block"
          country.style.filter = 'brightness(0) saturate(100%) invert(87%) sepia(49%) saturate(3050%) hue-rotate(289deg) brightness(87%) contrast(95%)'
        });
        // country.addEventListener("mouseleave", () => {
        //   mapImages[index].style.display = ""
        // });
      }
    });

    mapImages.forEach((image, index) => {
      if (image) {
      //   image.addEventListener("mouseenter", () => {
      //     mapImages[index].style.display = "block"        
      // });
        image.addEventListener("mouseleave", () => {
          image.style.display = ""
          // console.log('filter:', country.style.filter)
          countries[index].style.filter = ''
          // console.log('filter:', country.style.filter)
        });
      }
    });
  },[]);
 
  return (
    <div className="map-container">
      <Map />
      <ArrowMX id="mapImg1" />
      <ArrowGT id="mapImg2" />
      <ArrowBZ id="mapImg3" />
      <ArrowSV id="mapImg4" />
      <ArrowHN id="mapImg5" />
      <ArrowCR id="mapImg6" />
      <ArrowPA id="mapImg7" />
      <ArrowDO id="mapImg8" />
      {/* <img id="mapImg1" src={arrowMX} alt="" />
      <img id="mapImg2" src={arrowGT} alt="" />
      <img id="mapImg3" src={arrowBZ} alt="" />
      <img id="mapImg4" src={arrowSV} alt="" />
      <img id="mapImg5" src={arrowHN} alt="" />
      <img id="mapImg6" src={arrowCR} alt="" />
      <img id="mapImg7" src={arrowPA} alt="" />
      <img id="mapImg8" src={arrowDO} alt="" /> */}
    </div>
  );
}

export default MapSection05;
