import SliderSection01 from "./SliderSection01/SliderSection01";
import data from "../../../trataSection01.json";

function Slides() {
  const page2 = data[0].visibilizacion_victimas.page2.slider;
  const texts = [
    {
      title: page2.content2.title,
      text1: page2.content2.text1,
      text2: page2.content2.text2,
      text3: page2.content2.text3,
    },
    {
      title: page2.content1.title,
      text2: page2.content1.text2,
      text1: "",
      text3: page2.content1.text3,
    },
  ];
  return (
    <div className="section__01slider">
      <SliderSection01 texts={texts} />
    </div>
  );
}

export default Slides;
