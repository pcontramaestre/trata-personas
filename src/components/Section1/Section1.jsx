import Slides from '../Slides/Slides'
import NoteBook from '../NoteBook/NoteBook'
import BarGraph from '../BarGraph/BarGraph'
import Map from '../Map/Map'
import BigInfoBox from '../BigInfoBox/BigInfoBox'
import News from '../News/News'

import style from './Section1.module.css'

function Section1 () {
  return (
    <section className={style.Section1}>
      VISIBILIZACIÓN DE LAS VÍCTIMAS
      <Slides />
      <NoteBook />
      <BarGraph />
      <Map />
      <BigInfoBox />
      <News />
      <BigInfoBox />
    </section>
  )
}

export default Section1
