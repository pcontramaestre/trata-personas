import Slides from "../Slides/Slides";
import NoteBookSection01 from "../NoteBook/NoteBookSection01/NoteBookSection01";
import BarGraphSection01 from "../BarGraph/BarGraphSection01/BarGraphSection01";
import Map from "../Map/Map";
import BigInfoBox from "../BigInfoBox/BigInfoBox";
import News from "../News/News";
import data from "../../../trataSection01.json";
import style from "./Section1.module.css";

function Section1() {
  const page1 = data[0].visibilizacion_victimas.page1;

  return (
    <section className={style.Section1}>
      <div className={style.page1}>
        <h1 className={style.page1__title}>
          {page1.text1} <br /> {page1.text2}
        </h1>
      </div>
      <div className={style.slider__content}>
        <Slides />
      </div>
      <NoteBookSection01 />
      <BarGraphSection01 />
      <Map />
      <BigInfoBox />
      <News />
      <BigInfoBox />
    </section>
  );
}

export default Section1;
