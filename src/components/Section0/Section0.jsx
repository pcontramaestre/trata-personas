import NoteBook from '../NoteBook/NoteBook'
import News from '../News/News'
import Map from '../Map/Map'
import BigInfoBox from '../BigInfoBox/BigInfoBox'

import style from './Section0.module.css'

import data from '../../../troy.json'

const { news } = data[0]

function Section0 () {
  return (
    <section className={style.Section0Background}>
      TRATA DE PERSONAS
      <NoteBook />
      <News news={news} />
      <Map />
      <BigInfoBox />
    </section>
  )
}

export default Section0