import Slides from '../Slides/Slides'
import SmallInfoBox from '../SmallInfoBox/SmallInfoBox'
import NoteBook from '../NoteBook/NoteBook'
import BigInfoBox from '../BigInfoBox/BigInfoBox'

import style from './Section2.module.css'

function Section2 () {
  return (
    <section className={style.Section2}>
      LAS FINALIDADES DE LA TRATA DE PERSONAS
      <Slides />
      <SmallInfoBox />
      <NoteBook />
      <BigInfoBox />
    </section>
  )
}

export default Section2
