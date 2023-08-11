import NoteBook from '../NoteBook/NoteBook'
import BarGraph from '../BarGraph/BarGraph'
import Map from '../Map/Map'
import BigInfoBox from '../BigInfoBox/BigInfoBox'

import style from './Section5.module.css'

function Section5 () {
  return (
    <section className={style.Section5}>
      REPATRIACIÓN
      <NoteBook />
      <BarGraph />
      <Map />
      <BigInfoBox />
    </section>
  )
}

export default Section5
