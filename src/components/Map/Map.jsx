import { useEffect, useState } from 'react'

import style from './Map.module.css'

import { ReactComponent as MapGreen } from '../../assets/Map/mapa1.svg'
import mapPink from '../../assets/Map/mapPink.svg'
// import mexicoHoverMapPink from '../../assets/Map/mapa3.svg'

const maps = {
  MapGreen,
  // mexicoHoverMapPink,
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
    if (!map.name) {
      const countries = arrayCountries.map(country => {
        let countryTag = document.querySelector('#' + country)
        if (!countryTag) {
          countryTag = document.querySelector('#' + country + map.name)
        }
        return countryTag
      })
      const countriesFlag = arrayContriesFlag.map(flag => document.querySelector('#' + flag))
      countries.forEach(country => {
        country.addEventListener('mouseenter' , () => {
          country.style.filter = 'brightness(0) saturate(100%) invert(95%) sepia(65%) saturate(2813%) hue-rotate(122deg) brightness(102%) contrast(108%)'
        })
        country.addEventListener('mouseleave' , () => {
          country.style.filter = ''
        })
        country.id = country.id + map.name
      })
      countriesFlag.forEach((flag, index) => {
        flag.addEventListener('mouseenter' , () => {
          countries[index].style.filter = 'brightness(0) saturate(100%) invert(95%) sepia(65%) saturate(2813%) hue-rotate(122deg) brightness(102%) contrast(108%)'
        })
        flag.addEventListener('mouseleave' , () => {
          countries[index].style.filter = ''
        })
      })
      return () => {
        countries.forEach(country => {
          country.removeEventListener('mouseenter', () => {})
          country.removeEventListener('mouseleave', () => {})
        })
        countriesFlag.forEach(flag => {
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
    <div className={style.ContainerMap} style={styleMapContainer}>
      {
        mapState ? mapState : null
      }
    </div>
  )
}

export default Map
