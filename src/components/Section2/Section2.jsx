import Slides from "../Slides/Slides";
import SmallInfoBox from "../SmallInfoBox/SmallInfoBox";
import NoteBook from "../NoteBook/NoteBook";
import BigInfoBox from "../BigInfoBox/BigInfoBox";
import "./Section2.css";
import data from "../../../trataSection02.json";
import SliderSection02 from "../Slides/SliderSection02/SliderSection02";

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
      <SmallInfoBox />
      <NoteBook />
      <BigInfoBox />
    </section>
  );
}

export default Section2;
