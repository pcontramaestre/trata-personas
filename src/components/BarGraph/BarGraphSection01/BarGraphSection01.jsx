import "./BarGraphSection01.css";
import data from "../../../../trataSection01.json";

function BarGraphSection01() {
  const page4 = data[0].visibilizacion_victimas.page4;
  return (
    <div className="BarGraph">
      <div className="baragraph__graphic">
        <h2 className="bargraph__title">{page4.graphic.title}</h2>
        <div className="bargraph__image">
          {" "}
          {/* <ul className="baragraph__columns">
            <li className="baragraph__column1">{page4.graphic.column1}</li>
            <li className="baragraph__column2">{page4.graphic.column2}</li>
            <li className="baragraph__column3">{page4.graphic.column3}</li>
            <li className="baragraph__column4">{page4.graphic.column4}</li>
          </ul> */}
        </div>
        {/* <ul className="baragraph__years">
          <li>{page4.graphic.year1}</li>
          <li>{page4.graphic.year2}</li>
          <li>{page4.graphic.year3}</li>
          <li>{page4.graphic.year4}</li>
        </ul> */}
      </div>
      <div className="bargraph__texts">
        <p
          className="bargraph__text1"
          dangerouslySetInnerHTML={{ __html: page4.text1 }}
        />
        <h2 className="bargraph__text2">
          {page4.text2} <br />{" "}
          <small className="bargraph__text3"> {page4.text3}</small>
        </h2>
      </div>
    </div>
  );
}

export default BarGraphSection01;
