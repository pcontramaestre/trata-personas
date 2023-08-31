import { useEffect, useState } from 'react'

import style from './Map.module.css'

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
      countries.forEach((country, index) => {
        console.log('country:', country)
        if (country) {
          country.addEventListener('mouseenter', () => {
            country.style.filter = 'brightness(0) saturate(100%) invert(95%) sepia(65%) saturate(2813%) hue-rotate(122deg) brightness(102%) contrast(108%)'
          })
          country.addEventListener('mouseleave', () => {
            country.style.filter = ''
          })
          countriesFlag[index].addEventListener('mouseenter', () => {
            countries[index].style.filter = 'brightness(0) saturate(100%) invert(95%) sepia(65%) saturate(2813%) hue-rotate(122deg) brightness(102%) contrast(108%)'
          })
          countriesFlag[index].addEventListener('mouseleave', () => {
            countries[index].style.filter = ''
          })
        }
      })
      return () => {
        countries.forEach((country, index) => {
          country.removeEventListener('mouseenter', () => {})
          country.removeEventListener('mouseleave', () => {})
          countriesFlag[index].removeEventListener('mouseenter', () => {})
          countriesFlag[index].removeEventListener('mouseleave', () => {})
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
        mapState
      }
    </div>
  )
}

export default Map
