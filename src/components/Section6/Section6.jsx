import NoteBook from '../NoteBook/NoteBook'
// import BarGraph from '../BarGraph/BarGraph'
import News from '../News/News'
import BigInfoBox from '../BigInfoBox/BigInfoBox'

import style from './Section6.module.css'

import background from '../../assets/Section6/frontPageBackground.png'
import family from '../../assets/Section6/frontPageFamily.png'
import frame from '../../assets/Section6/frontPageFrame.png'
import hand from '../../assets/Section6/hand.png'
import contenedorRojo1 from '../../assets/Section6/contenedorRojo1.png'
import contenedorRojo2 from '../../assets/Section6/contenedorRojo2.png'
import manosAmigas from '../../assets/Section6/manosAmigas.png'
import megafono from '../../assets/Section6/megafono.png'
import dona1 from '../../assets/Section6/dona1.png'
import graphic1 from '../../assets/Section6/graphic1.png'
import rectanguloAzul from '../../assets/Section6/rectanguloAzul.png'

import data from '../../../troy.json'

const imagesList = {
  background,
  family,
  frame,
  hand,
  contenedorRojo1,
  contenedorRojo2,
  manosAmigas,
  megafono,
  dona1,
  graphic1,
  rectanguloAzul
}

function convertSize (input) {
  const n = Number(input.split('px')[0])
  const r = (n * 100 / 1920) + 'vw'
  return r
}

const { prevention } = data
const { images, text, noteBook, bigInfoBox, news } = data.prevention

function Section6 () {
  const preventionBackground = {
    width: convertSize(prevention.width),
    height: convertSize(prevention.height),
    backgroundColor: prevention.backgroundColor
  }

  const imageStyles = images.map(image => ({
    ...image,
    width: convertSize(image.width),
    height: convertSize(image.height),
    top: convertSize(Number(image.top.split('px')[0]) - Number(prevention.top.split('px')[0]) + 'px'),
    left: convertSize(image.left)
  }))

  const textStyles = text.map(texto => ({
    ...texto,
    width: convertSize(texto.width),
    height: convertSize(texto.height),
    top: convertSize(Number(texto.top.split('px')[0]) - Number(prevention.top.split('px')[0]) + 'px'),
    left: convertSize(texto.left),
    fontSize: convertSize(texto.fontSize),
    lineHeight: convertSize(texto.lineHeight)
  }))

  return (
    <section className={style.PreventionBackground} style={preventionBackground}>
      {
        images.map((image, index) => (
          <img src={imagesList[image.name]} className={style.images} style={imageStyles[index]} key={image.name + index} />
        ))
      }
      {
        text.map((texto, index) => {
          switch (texto.tag) {
            case 'h1': {
              return <h1 className={style.preventionText} style={textStyles[index]} key={index}>{texto.content}</h1>
            }
            case 'h2': {
              return <h2 className={style.preventionText} style={textStyles[index]} key={index}>{texto.content}</h2>
            }
            case 'p': {
              return <p dangerouslySetInnerHTML={{ __html: texto.content }} className={style.preventionText} style={textStyles[index]} key={index} />
            }
          }
          return true
        })
      }
      <NoteBook noteBook={noteBook} topSection={prevention.top} />
      {/* <BarGraph /> */}
      <BigInfoBox bigInfoBox={bigInfoBox} topSection={prevention.top} />
      <News news={news} topSection={prevention.top} />
    </section>
  )
}

export default Section6
