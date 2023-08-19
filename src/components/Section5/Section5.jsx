import NoteBook from '../NoteBook/NoteBook'
import BarGraph from '../BarGraph/BarGraph'
import Map from '../Map/Map'
import BigInfoBox from '../BigInfoBox/BigInfoBox'

import style from './Section5.module.css'

import frontPage from '../../assets/Section5/repatriation.png'
import grafico from '../../assets/Section5/grafico.png'
import hand from '../../assets/Section5/hand.svg'
import straightBlueArrow from '../../assets/Section5/straightBlueArrow.svg'
import straightYellowArrow from '../../assets/Section5/straightYellowArrow.svg'
import straightRedArrow from '../../assets/Section5/straightRedArrow.svg'
import bus from '../../assets/Section5/bus.png'
import plane from '../../assets/Section5/plane.png'

import data from '../../../troy.json'

const { repatriation } = data
const { noteBook, bigInfoBox, map, animation } = data.repatriation

const images = {
  frontPage,
  grafico,
  hand,
  straightBlueArrow,
  straightYellowArrow,
  straightRedArrow,
  bus,
  plane
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

  const stuffedStyle = {
    top: convertSize('6601px'),
    height: convertSize('846px')
  }

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
      <Animation />
      <BigInfoBox bigInfoBox={bigInfoBox} topSection={repatriation.top} />
      <div className={style.stuffed} style={stuffedStyle} />
    </section>
  )
}

function Animation () {
  const animationContainerStyles = {
    width: convertSize(animation.width),
    height: convertSize(animation.height),
    top: convertSize(relativeMedition(animation.top)),
    backgroundImage: `url("./src/assets/Section5/${animation.backgroundImage}")`,
    backgroundColor: animation.backgroundColor
  }

  const picturesStyles = animation.images.map(image => (
    {
      width: convertSize(image.width),
      height: convertSize(image.height),
      top: convertSize(image.top),
      left: convertSize(image.left),
      backgroundImage: `url("./src/assets/Section5/${image.name}.png")`
    }
  ))

  const stylesText = {}

  animation.images.forEach(image => {
    stylesText[image.name] = image.text.listText.map((text) => ({
      ...image.text[text.typeText],
      top: convertSize(text.top),
      left: convertSize(text.left),
      fontSize: convertSize(image.text[text.typeText].fontSize),
      lineHeight: convertSize(image.text[text.typeText].lineHeight),
      transform: `rotateZ(${-Number(text.angle.split('deg')[0])}deg)`
    }))
  })

  return (
    <div style={animationContainerStyles} className={style.animationContainer}>
      {
        animation.images.map((image, index) => (
          <div  className={style.animationPictures} style={picturesStyles[index]} key={image.name + index}>
            {
              image.text.listText.map((content, index) => (
                <label style={stylesText[image.name][index]} key={content.content + index}>{content.content}</label>
              ))
            }
          </div>
        ))
      }
    </div>
  )
}

export default Section5
