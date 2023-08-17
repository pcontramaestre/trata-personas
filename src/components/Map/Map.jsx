import style from './Map.module.css'

import belice from '../../assets/Map/belice.svg'
import costaRica from '../../assets/Map/costaRica.svg'
import elSalvador from '../../assets/Map/elSalvador.svg'
import guatemala from '../../assets/Map/guatemala.svg'
import honduras from '../../assets/Map/honduras.svg'
import mexico from '../../assets/Map/mexico.svg'
import nicaragua from '../../assets/Map/nicaragua.svg'
import panama from '../../assets/Map/panama.svg'
import republicaDominicana from '../../assets/Map/republicaDominicana.svg'

const flags = {
  belice,
  costaRica,
  elSalvador,
  guatemala,
  honduras,
  mexico,
  nicaragua,
  panama,
  republicaDominicana
}

function convertSize (input) {
  const n = Number(input.split('px')[0])
  return (n * 100) / 1920 + 'vw'
}

function Map ({ map, topSection }) {
  if (!map) return null

  const mapStyle = {
    height: convertSize(map.size.height),
    top: convertSize(topSection ? Number(map.top.split('px')[0]) - Number(topSection.split('px')[0]) + 'px' : map.top),
    backgroundImage: `url("./src/assets/Map/${map.backgroundImage}")`
  }
  return (
    <div className={style.MapBackground} style={mapStyle}>
      {map.countrys.map((country, index) => (
        <Card country={country} totalTop={topSection ? Number(map.top.split('px')[0]) - Number(topSection.split('px')[0]) + 'px' : map.top} key={index} />
      ))}
    </div>
  )
}

function Card ({ country, totalTop }) {
  const styleCard = {
    top: convertSize(
      Number(country.position.top.split('px')[0]) -
        Number(totalTop.split('px')[0]) +
        'px'
    ),
    left: convertSize(country.position.left),
    fontSize: convertSize(country.fontSize)
  }

  const flagStyle = {
    width: convertSize(country.flag.width)
  }

  const nameStyle = {
    width: convertSize(country.size.width),
    fontSize: convertSize(country.fontSize),
    fontFamily: country.fontFamily,
    fontWeight: country.fontWeight,
    lineHeight: convertSize(country.lineHeight),
    letterSpacing: country.letterSpacing,
    textAlign: country.textAlign
  }

  return (
    <div className={style.MapCard} style={styleCard}>
      {
        country.flag.name ? <img src={flags[country.flag.name]} style={flagStyle} /> : null
      }
      {
        country.name ? <label style={nameStyle}>{country.name.toUpperCase()}</label> : null
      }
    </div>
  )
}

export default Map
