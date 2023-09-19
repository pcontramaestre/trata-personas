import { useEffect, useState } from 'react'

import style from './Map.module.css'
import './Map.css'

import { ReactComponent as MapGreen } from '../../assets/Map/mapa1.svg'
import costaRica from '../../assets/Map/costaRica.svg'
import elSalvador from '../../assets/Map/elSalvador.svg'
import guatemala from '../../assets/Map/guatemala.svg'
import mexico from '../../assets/Map/mexico.svg'
import belice from '../../assets/Map/belice.svg'
import honduras from '../../assets/Map/honduras.svg'
import nicaragua from '../../assets/Map/nicaragua.svg'
import panama from '../../assets/Map/panama.svg'
import republicaDominicana from '../../assets/Map/republicaDominicana.svg'

const maps = {
  MapGreen
}

const flags = {
  costaRica,
  elSalvador,
  guatemala,
  mexico,
  belice,
  honduras,
  nicaragua,
  panama,
  republicaDominicana,
}

const arrayCountries = ['MX', 'GT', 'BZ', 'SV', 'HN', 'NI', 'CR', 'PA', 'DO']
const arrayContriesFlag = ['flagmexico', 'flagguatemala', 'flagbelice', 'flagelSalvador', 'flaghonduras', 'flagnicaragua', 'flagcostaRica', 'flagpanama', 'flagrepublicaDominicana']

function convertSize (input) {
  const n = Number(input.split('px')[0])
  return (n * 100) / 1920 + 'vw'
}

function Map ({ map, topSection }) {
  if (!map) return null

  const [mapState, setMapState] = useState(maps[map.name])

  useEffect(() => {
    if (map.name) {
      const countries = arrayCountries.map(country => document.getElementById(country + '01'))
      const countriesFlag = arrayContriesFlag.map(flag => document.querySelector('#' + flag))
      countriesFlag.forEach((flag, index) => {
        if (flag) {
          flag.addEventListener('mouseenter', () => {
            countries[index].querySelector(`.${countries[index].id.split('0')[0]}`).style.fill = '#13F8FD'
          })
          flag.addEventListener('mouseleave', () => {
            countries[index].querySelector(`.${countries[index].id.split('0')[0]}`).style.fill = ''
          })
        }
      })

      countries.forEach((country, index) => {
        if (country) {
          country.addEventListener('mouseenter', () => {
            countriesFlag[index].querySelector('span').style.color = '#13F8FD'
          })
          country.addEventListener('mouseleave', () => {
            countriesFlag[index].querySelector('span').style.color = ''
          })
        }
      })

      return () => {
        countriesFlag.forEach((flag, index) => {
          flag.removeEventListener('mouseenter', () => {})
          flag.removeEventListener('mouseleave', () => {})
        })
        countries.forEach((country, index) => {
          country.removeEventListener('mouseenter', () => {})
          country.removeEventListener('mouseleave', () => {})
        })
      }
    }
  }, [])

  const styleMapContainer = {
    height: convertSize(map.size.height),
    top: convertSize(topSection ? Number(map.top.split('px')[0]) - Number(topSection.split('px')[0]) + 'px' : map.top)
  }

  const styleContries = map.countrys.map(contry => ({
    top: convertSize(Number(contry.position.top.split('px')[0]) - Number(map.top.split('px')[0]) + 'px'),
    left: convertSize(contry.position.left),
    height: convertSize(contry.size.height),
    lineHeight: convertSize(contry.lineHeight)
  }))

  return (
    <div id='container-Map' className={style.ContainerMap} style={styleMapContainer}>
      {
        mapState
      }
      {
        map.countrys.map((country, index) => (
          <label id={'flag' + country.flag.name} style={styleContries[index]} className={style.flags} key={country.name + index}>
            <img src={flags[country.flag.name]} alt='noFound'/><span>{country.name.toUpperCase()}</span>
          </label>
        ))
      }
    </div>
  )
}

export default Map
