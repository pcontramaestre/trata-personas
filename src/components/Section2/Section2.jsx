import NoteBook from "../NoteBook/NoteBook";
import BigInfoBox from "../BigInfoBox/BigInfoBox";
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

function Section2() {
  const page1 = data[0].finalidades.page1;
  return (
    <section className="Section02">
      <div className="page2">
        <h1 className="page2__title">{page1.text1}</h1>
        <h1 className="page2__title2">{page1.text2}</h1>
      </div>
      <div className="slider__content">
        <SliderSection02 />
      </div>
      <SmallInfoSection02 />
      <GraphicFinalidades />
      <ExplotacionSexual />
      <ExplotacionLaboral />
      <MedicinaForzada />
      <Adopcion />
      <Matrimonio />
      <Esclavitud />
      <NoteBook />
      <BigInfoBox />
    </section>
  );
}

export default Section2;
