import NoteBook from '../NoteBook/NoteBook'
import BarGraph from '../BarGraph/BarGraph'
import News from '../News/News'
import BigInfoBox from '../BigInfoBox/BigInfoBox'

import style from './Section6.module.css'

function Section6 () {
  return (
    <section className={style.Section6}>
      PREVENCIÓN
      <NoteBook />
      <BarGraph />
      <BigInfoBox />
      <News />
    </section>
  )
}

export default Section6
