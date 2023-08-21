import BarGraph from '../BarGraph/BarGraph'
import News from '../News/News'
import SmallInfoBox from '../SmallInfoBox/SmallInfoBox'

import style from './Section4.module.css'

import data from '../../../troy.json'

const { lawEnforcement } = data

function convertSize (input) {
  const n = Number(input.split('px')[0])
  const r = (n * 100 / 1920) + 'vw'
  return r
}

function Section4 () {
  const lawEnforcementeBackground = {
    width: convertSize(lawEnforcement.width),
    height: convertSize(lawEnforcement.height),
    backgroundColor: lawEnforcement.backgroundColor
  }

  return (
    <section className={style.LawEnforcementBackground} style={lawEnforcementeBackground}>
      <BarGraph />
      <SmallInfoBox />
      <News />
    </section>
  )
}

export default Section4
