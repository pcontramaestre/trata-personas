import Slides from "../Slides/Slides";
import NoteBookSection01 from "../NoteBook/NoteBookSection01/NoteBookSection01";
import BarGraphSection01 from "../BarGraph/BarGraphSection01/BarGraphSection01";
import BigInfoBoxSection01 from "../BigInfoBox/BigInfoBoxSection01/BigInfoBoxSection01";
import CircleGraph from "./CircleGraph/CircleGraph";
import NewSection01 from "../News/NewsSection01/NewSection01";
import data from "../../../trataSection01.json";
import style from "./Section1.module.css";
import MapSection01 from "../Map/MapSection01/MapSection01";
import CircleGraph02 from "./CircleGraph02/CircleGraph02";
import Women from "./Women/Women";

function Section1() {
  const page1 = data[0].visibilizacion_victimas.page1;

  return (
    <section className={style.Section1}>
      <div className={style.page1content}>
        <div className={style.page1}>
          <h1 className={style.page1__title}>
            {page1.text1} <br /> {page1.text2}
          </h1>
          <Slides />
        </div>
      </div>
      <NoteBookSection01 />
      <BarGraphSection01 />
      <MapSection01 />
      <BigInfoBoxSection01 />
      <CircleGraph />
      <NewSection01 />
      <CircleGraph02 />
      <Women />
      {/* <Box02Section01 /> */}
    </section>
  );
}

export default Section1;
