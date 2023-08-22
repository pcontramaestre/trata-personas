import NoteBook from '../NoteBook/NoteBook'
// import BarGraph from '../BarGraph/BarGraph'
import SmallInfoBox from '../SmallInfoBox/SmallInfoBox'
import News from '../News/News'

import style from './Section3.module.css'

import data from '../../../troy.json'

import frontPage from '../../assets/Section3/frontPage.png'
import grafico1 from '../../assets/Section3/grafico1.png'
import grafico2 from '../../assets/Section3/grafico2.png'
import frecuencia from '../../assets/Section3/frecuencia.svg'
import atenciones from '../../assets/Section3/atenciones.svg'
import group from '../../assets/Instructions/group.svg'
import infoGif from '../../assets/Instructions/infoGifBlanco1.svg'
import audio from '../../assets/Instructions/audio1.svg'

const imagesList = {
  frontPage,
  grafico1,
  grafico2,
  frecuencia,
  atenciones,
  group,
  audio
}

const iconList = {
  infoGif
}

const { protectionAndCare } = data
const { images, text, icons, noteBook, news } = protectionAndCare

function convertSize (input) {
  const n = Number(input.split('px')[0])
  const r = (n * 100 / 1920) + 'vw'
  return r
}

function Section3 () {
  const protectionAndCareBackgroundStyles = {
    width: convertSize(protectionAndCare.width),
    height: convertSize(protectionAndCare.height),
    backgroundColor: protectionAndCare.backgroundColor
  }

  const imagesStyles = images.map(image => ({
    ...image,
    width: convertSize(image.width),
    height: convertSize(image.height),
    top: convertSize(Number(image.top.split('px')[0]) - Number(protectionAndCare.top.split('px')[0]) + 'px'),
    left: convertSize(image.left)
  }))

  const textStyles = text.map(texto => ({
    ...texto,
    top: convertSize(Number(texto.top.split('px')[0]) - Number(protectionAndCare.top.split('px')[0]) + 'px'),
    left: convertSize(texto.left),
    width: convertSize(texto.width),
    height: convertSize(texto.height),
    fontSize: convertSize(texto.fontSize),
    lineHeight: texto.lineHeight && convertSize(texto.lineHeight)
  }))

  const iconStyles = icons.map(icon => ({
    ...icon,
    width: convertSize(icon.width),
    height: convertSize(icon.height),
    top: convertSize(Number(icon.top.split('px')[0]) - Number(protectionAndCare.top.split('px')[0]) + 'px'),
    left: convertSize(icon.left)
  }))

  return (
    <section className={style.ProtectionCare} style={protectionAndCareBackgroundStyles}>
      {
        images.map((image, index) => (
          <img src={image && imagesList[image.name]} style={imagesStyles[index]} className={style.ProtectionCareImages} key={image.name + index} />
        ))
      }
      {
        icons.map((icon, index) => (
          <img src={icon && iconList[icon.name]} style={iconStyles[index]} className={style.ProtectionCareIcon} key={icon.name + index} />
        ))
      }
      {
        text.map((texto, index) => {
          switch (texto.tag) {
            case 'h1': {
              return <h1 className={style.ProtectionCareText} style={textStyles[index]} key={index}>{texto.content}</h1>
            }
            case 'h2': {
              return <h2 className={style.ProtectionCareText} style={textStyles[index]} key={index}>{texto.content}</h2>
            }
            case 'p': {
              return <p dangerouslySetInnerHTML={{ __html: texto.content }} className={style.ProtectionCareText} style={textStyles[index]} key={index} />
            }
          }
          return true
        })
      }
      <NoteBook noteBook={noteBook} topSection={protectionAndCare.top} />
      {/* <BarGraph /> */}
      <SmallInfoBox />
      <News news={news} topSection={protectionAndCare.top} />
    </section>
  )
}

export default Section3
