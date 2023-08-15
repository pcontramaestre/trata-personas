import NoteBook from '../NoteBook/NoteBook'
import News from '../News/News'
import Map from '../Map/Map'
import BigInfoBox from '../BigInfoBox/BigInfoBox'

import style from './Section0.module.css'

import data from '../../../troy.json'

const { news, map, noteBook } = data

function Section0 () {
  return (
    <section className={style.Section0Background}>
      TRATA DE PERSONAS
      <NoteBook noteBook={noteBook} />
      <News news={news} />
      <Map map={map} />
      <BigInfoBox />
    </section>
  )
}

export default Section0
