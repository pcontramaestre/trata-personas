import BarGraph from '../BarGraph/BarGraph'
import News from '../News/News'
import SmallInfoBox from '../SmallInfoBox/SmallInfoBox'

import style from './Section4.module.css'

function Section4 () {
  return (
    <section className={style.Section4}>
      PROCURACIÓN DE LA JUSTICIA
      <BarGraph />
      <SmallInfoBox />
      <News />
    </section>
  )
}

export default Section4
