import NoteBook from '../NoteBook/NoteBook'
import BarGraph from '../BarGraph/BarGraph'
import SmallInfoBox from '../SmallInfoBox/SmallInfoBox'
import News from '../News/News'

import style from './Section3.module.css'

function Section3 () {
  return (
    <section className={style.Section3}>
      PROTECCIÓN Y ATENCIÓN A LAS VÍCTIMAS
      <NoteBook />
      <BarGraph />
      <SmallInfoBox />
      <News />
    </section>
  )
}

export default Section3
