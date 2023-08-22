import { useEffect } from 'react'
// import BarGraph from '../BarGraph/BarGraph'
import News from '../News/News'
import SmallInfoBox from '../SmallInfoBox/SmallInfoBox'

import style from './Section4.module.css'

import data from '../../../troy.json'

import frontPage from '../../assets/Section4/frontPage.png'
import grafico1 from '../../assets/Section4/grafico1.png'
import grafico2 from '../../assets/Section4/grafico2.png'
import grafico3 from '../../assets/Section4/grafico3.png'
import grafico4 from '../../assets/Section4/grafico4.png'
import grafico5 from '../../assets/Section4/grafico5.png'
import infoGif from '../../assets/Instructions/infoGifBlanco1.svg'

const imagesList = {
  frontPage,
  grafico1,
  grafico2,
  grafico3,
  grafico4,
  grafico5,
  infoGif
}

const { lawEnforcement } = data
const { images, text, news1, news2, smallInfoBox } = lawEnforcement

function convertSize (input) {
  const n = Number(input.split('px')[0])
  const r = (n * 100 / 1920) + 'vw'
  return r
}

function Section4 () {
  useEffect(() => {
    if (smallInfoBox && smallInfoBox.infoGraphic) {
      const icon = document.getElementById('infoGif')
      const div = document.getElementById('SmallInfoBoxinfoGif')

      function activeDisplay () {
        div.style.display = 'flex'
      }

      function desactiveDisplay () {
        div.style.display = ''
      }

      icon.addEventListener('mouseenter', activeDisplay)
      div.addEventListener('mouseleave', desactiveDisplay)
      return () => {
        icon.removeEventListener('mouseenter', activeDisplay)
        div.removeEventListener('mouseleave', desactiveDisplay)
      }
    }
  }, [])

  const lawEnforcementeBackground = {
    width: convertSize(lawEnforcement.width),
    height: convertSize(lawEnforcement.height),
    backgroundColor: lawEnforcement.backgroundColor
  }

  const imagesStyles = images.map(image => ({
    ...image,
    width: convertSize(image.width),
    height: convertSize(image.height),
    top: convertSize(Number(image.top.split('px')[0]) - Number(lawEnforcement.top.split('px')[0]) + 'px'),
    left: convertSize(image.left)
  }))

  const textStyles = text.map(texto => ({
    ...texto,
    top: convertSize(Number(texto.top.split('px')[0]) - Number(lawEnforcement.top.split('px')[0]) + 'px'),
    left: convertSize(texto.left),
    width: convertSize(texto.width),
    height: convertSize(texto.height),
    fontSize: convertSize(texto.fontSize),
    lineHeight: texto.lineHeight && convertSize(texto.lineHeight)
  }))

  return (
    <section className={style.LawEnforcementBackground} style={lawEnforcementeBackground}>
      {
        images.map((image, index) => (
          <img id={image.id ? image.id : null} src={image && imagesList[image.name]} style={imagesStyles[index]} className={image.name === 'infoGif' ? style.infoGif : style.LawEnforcementImages} key={image.name + index} />
        ))
      }
      {
        text.map((texto, index) => {
          switch (texto.tag) {
            case 'h1': {
              return <h1 className={style.LawEnforcementText} style={textStyles[index]} key={index}>{texto.content}</h1>
            }
            case 'h2': {
              return <h2 className={style.LawEnforcementText} style={textStyles[index]} key={index}>{texto.content}</h2>
            }
            case 'p': {
              return <p dangerouslySetInnerHTML={{ __html: texto.content }} className={style.LawEnforcementText} style={textStyles[index]} key={index} />
            }
          }
          return true
        })
      }
      {/* <BarGraph /> */}
      <SmallInfoBox info={smallInfoBox.infoGraphic} topSection={lawEnforcement.top} />
      <News news={news1} topSection={lawEnforcement.top} />
      <News news={news2} topSection={lawEnforcement.top} />
    </section>
  )
}

export default Section4
