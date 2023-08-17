import NoteBook from '../NoteBook/NoteBook'
import BarGraph from '../BarGraph/BarGraph'
import Map from '../Map/Map'
import BigInfoBox from '../BigInfoBox/BigInfoBox'

import style from './Section5.module.css'

import frontPage from '../../assets/Section5/repatriation.png'

import data from '../../../troy.json'

const { repatriation } = data
// const { noteBook, news, map, bigInfoBox } = data.repatriation

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

  const repatriationFrontPageStyle = {
    height: convertSize(repatriation.image.height),
    top: convertSize(repatriation.image.top)
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

  return (
    <section className={style.RepatriationBackground} style={repatriationCotainer}>
      <img src={frontPage} style={repatriationFrontPageStyle} className={style.RepatriationImage} />
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
      <NoteBook />
      <BarGraph />
      <Map />
      <BigInfoBox />
    </section>
  )
}

export default Section5
