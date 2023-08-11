import NoteBook from '../NoteBook/NoteBook'
import News from '../News/News'
import Map from '../Map/Map'
import BigInfoBox from '../BigInfoBox/BigInfoBox'

import style from './Section0.module.css'

function Section0 () {
  return (
    <section className={style.Section0}>
      TRATA DE PERSONAS
      <NoteBook />
      <News />
      <Map />
      <BigInfoBox />
    </section>
  )
}

export default Section0
