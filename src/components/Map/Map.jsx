import { useEffect, useState } from 'react'

import style from './Map.module.css'
import './Map.css'

import { ReactComponent as MapGreen } from '../../assets/Map/mapa1.svg'

const maps = {
  MapGreen
}

const arrayCountries = ['MX', 'GT', 'BZ', 'SV', 'HN', 'NI', 'CR', 'PA', 'DO']
const arrayContriesFlag = ['E-MX', 'E-GT', 'E-BZ', 'E-SV', 'E-HN', 'E-NI', 'E-CR', 'E-PA', 'E-DO']

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
      return () => {
        countriesFlag.forEach((flag, index) => {
          flag.removeEventListener('mouseenter', () => {})
          flag.removeEventListener('mouseleave', () => {})
        })
      }
    }
  }, [])

  const styleMapContainer = {
    height: convertSize(map.size.height),
    top: convertSize(topSection ? Number(map.top.split('px')[0]) - Number(topSection.split('px')[0]) + 'px' : map.top)
  }

  return (
    <div id='container-Map' className={style.ContainerMap} style={styleMapContainer}>
      {
        mapState
      }
    </div>
  )
}

export default Map
