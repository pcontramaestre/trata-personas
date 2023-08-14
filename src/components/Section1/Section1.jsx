import Slides from "../Slides/Slides";
import NoteBook from "../NoteBook/NoteBook";
import BarGraph from "../BarGraph/BarGraph";
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
        <Slides  />
      </div>
      {/* <NoteBook />
      <BarGraph />
      <Map />
      <BigInfoBox />
      <News />
      <BigInfoBox /> */}
    </section>
  );
}

export default Section1;
