import "./NoteBookSection01.css";
import hand from "../../../assets/Img-Section01/Page03/MANOS.png";
import data from "../../../../trataSection01.json"

function NoteBookSection01() {
  const page3 = data[0].visibilizacion_victimas.page3;

  return (
    <div className="NoteBook__container">
      <div className="NoteBook">
        <div className="NoteBook__texts">
          <p
            className="NoteBook__text1"
            dangerouslySetInnerHTML={{ __html: page3.text1 }}
          ></p>
          <h1 className="NoteBook__text2">{page3.text2}</h1>
          <h3 className="NoteBook__text3">{page3.text3}</h3>
        </div>
      </div>
      <img className="img__hands" src={hand} />
    </div>
  );
}

export default NoteBookSection01;
