import NoteBook from '../NoteBook/NoteBook'
import BarGraph from '../BarGraph/BarGraph'
import Map from '../Map/Map'
import BigInfoBox from '../BigInfoBox/BigInfoBox'

import style from './Section5.module.css'

import frontPage from '../../assets/Section5/repatriation.png'
import group from '../../assets/Instructions/group.svg'
import straightBlueArrow from '../../assets/Section5/straightBlueArrow.svg'
import straightYellowArrow from '../../assets/Section5/straightYellowArrow.svg'
import straightRedArrow from '../../assets/Section5/straightRedArrow.svg'

import data from '../../../troy.json'

const { repatriation } = data
const { noteBook, bigInfoBox, map } = data.repatriation

const images = {
  frontPage,
  group,
  straightBlueArrow,
  straightYellowArrow,
  straightRedArrow
}

function convertSize (input) {
  const n = Number(input.split('px')[0])
  const r = (n * 100 / 1920) + 'vw'
  return r
}

function relativeMedition (input) {
  const n = Number(input.split('px')[0]) - Number(repatriation.top.split('px')[0])
  return n + 'px'
}

function Section5 () {
  const repatriationCotainer = {
    height: convertSize(Number(repatriation.topNextSection.split('px')[0]) - Number(repatriation.top.split('px')[0]) + 'px')
  }

  const textStyles = repatriation.text.map((texto) => ({
    ...texto,
    top: convertSize(relativeMedition(texto.top)),
    left: convertSize(texto.left),
    width: convertSize(texto.width),
    height: convertSize(texto.height),
    fontSize: convertSize(texto.fontSize),
    lineHeight: texto.lineHeight && convertSize(texto.lineHeight)
  }))

  const imagesStyles = repatriation.image.map(photo => ({
    top: convertSize(relativeMedition(photo.top)),
    width: convertSize(photo.width),
    height: convertSize(photo.height),
    left: convertSize(photo.left)
  }))

  return (
    <section className={style.RepatriationBackground} style={repatriationCotainer}>
      {
        repatriation.image.map((photo, index) => (
          <img src={images[photo.name]} style={imagesStyles[index]} className={style.RepatriationImages} key={photo.name + index} />
        ))
      }
      {
        repatriation.text.map((texto, index) => {
          switch (texto.tag) {
            case 'h1': {
              return <h1 className={style.repatriationText} style={textStyles[index]} key={index}>{texto.content}</h1>
            }
            case 'h2': {
              return <h2 className={style.repatriationText} style={textStyles[index]} key={index}>{texto.content}</h2>
            }
            case 'p': {
              return <p dangerouslySetInnerHTML={{ __html: texto.content }} className={style.repatriationText} style={textStyles[index]} key={index} />
            }
          }
          return true
        })
      }
      <NoteBook noteBook={noteBook} topSection={repatriation.top} />
      <BarGraph />
      <Map map={map} topSection={repatriation.top} />
      <BigInfoBox bigInfoBox={bigInfoBox} topSection={repatriation.top} />
    </section>
  )
}

export default Section5
