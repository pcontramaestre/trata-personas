import NoteBook from '../NoteBook/NoteBook'
import News from '../News/News'
import Map from '../Map/Map'
import BigInfoBox from '../BigInfoBox/BigInfoBox'

import style from './Section0.module.css'

import data from '../../../troy.json'

const { homeHeader } = data
const { noteBook, news, map, bigInfoBox } = data.homeHeader

function convertSize (input) {
  const n = Number(input.split('px')[0])
  return (n * 100 / 1920) + 'vw'
}

function Section0 () {
  const homeHeaderContainer = {
    height: convertSize(homeHeader.size.height)
  }

  const homeHeaderFrontPageStyle = {
    height: convertSize(homeHeader.image.height)
  }

  const textStyles = homeHeader.text.map((texto, index) => ({
    ...texto,
    flag: '',
    content: '',
    top: convertSize(texto.top),
    left: convertSize(texto.left),
    width: convertSize(texto.width),
    height: convertSize(texto.height),
    fontSize: convertSize(texto.fontSize),
    lineHeight: texto.lineHeight && convertSize(texto.lineHeight)
  }))

  return (
    <section className={style.HomeHeaderBackground} style={homeHeaderContainer}>
      <div style={homeHeaderFrontPageStyle} className={style.HomeHeader} />
      {
        homeHeader.text.map((texto, index) => {
          switch (texto.tag) {
            case 'h1': {
              return <h1 className={style.HomeHeaderText} style={textStyles[index]} key={index}>{texto.content}</h1>
            }
            case 'h2': {
              return <h2 className={style.HomeHeaderText} style={textStyles[index]} key={index}>{texto.content}</h2>
            }
            case 'p': {
              return <p dangerouslySetInnerHTML={{ __html: texto.content }} className={style.HomeHeaderText} style={textStyles[index]} key={index} />
            }
          }
          return true
        })
      }
      <NoteBook noteBook={noteBook} />
      <News news={news} />
      <Map map={map} />
      <BigInfoBox bigInfoBox={bigInfoBox} />
    </section>
  )
}

export default Section0
