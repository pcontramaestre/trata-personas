import { useState } from "react";
import "./Section2.css";
import data from "../../../trataSection02.json";
import SliderSection02 from "../Slides/SliderSection02/SliderSection02";
import SmallInfoSection02 from "../SmallInfoBox/SmallInfoSection02/SmallInfoSection02";
import GraphicFinalidades from "./GraphicFinalidades/GraphicFinalidades";
import ExplotacionSexual from "./Explotacion/ExplotacionSexual/ExplotacionSexual";
import ExplotacionLaboral from "./Explotacion/ExplotacionLaboral/ExplotacionLaboral";
import MedicinaForzada from "./MedicinaForzada/MedicinaForzada";
import Adopcion from "./Adopcion/Adopcion";
import Matrimonio from "./Matrimonio/Matrimonio";
import Esclavitud from "./Esclavitud/Esclavitud";
import PracticasEsclavitud from "./Esclavitud/PracticasEsclavitud/PracticasEsclavitud";
import ActividadesIlicitas from "./ActividadesIlicitas/ActividadesIlicitas";
import Organos from "./Organos/Organos";
import BoxInfoSection02 from "../BigInfoBox/BigInfoBoxSection02/BoxInfoSection02";
import persona1 from "../../assets/Img-Section02/Page01/persona1.png";
import botas1 from "../../assets/Img-Section02/Page01/botas1.png";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import InfoConsentimiento from "../Section1/InfoConsentimiento/InfoConsentimiento";

gsap.registerPlugin(ScrollTrigger);

function Section2({handleVideosPlay}) {
  const page1 = data[0].finalidades.page1;

  return (
    <section id="section2" className="Section02">
      <InfoConsentimiento />
      <div className="page2content">
        <div className="page2__imagesbackground">
          <img
            className="page2__imagemen animation-image"
            src={persona1}
            alt=""
          />
          <div className="page2__sombreromen" />
          <img className="page2__botas animation-image2" src={botas1} alt="" />
        </div>
        <div className="page2">
          <h1 className="page2__title">{page1.text1}</h1>
          <h1 className="page2__title2">{page1.text2}</h1>
        </div>
        <div className="section__02slider">
          <SliderSection02 />
        </div>
      </div>
      <SmallInfoSection02 />
      <GraphicFinalidades />
      <ExplotacionSexual handleVideosPlay={handleVideosPlay} />
      <ExplotacionLaboral handleVideosPlay={handleVideosPlay} />
      <MedicinaForzada />
      <Adopcion />
      <Matrimonio />
      <Esclavitud />
      <PracticasEsclavitud page11={data} />
      <ActividadesIlicitas />
      <Organos />
      <BoxInfoSection02 />
    </section>
  );
}

export default Section2;
