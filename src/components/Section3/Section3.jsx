import { useEffect, useState } from 'react'

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
import rows from '../../assets/Section3/rows.png'
import psicosocial from '../../assets/Section3/psicosocial.svg'
import medico from '../../assets/Section3/medico.svg'
import legal from '../../assets/Section3/legal.svg'
import manutencion from '../../assets/Section3/manutencion.svg'
import educacion from '../../assets/Section3/educacion.svg'
import alojamiento from '../../assets/Section3/alojamiento.svg'
import reintegracion from '../../assets/Section3/reintegracion.svg'

const imagesList = {
  frontPage,
  grafico1,
  grafico2,
  frecuencia,
  atenciones,
  group,
  audio,
  rows,
  psicosocial,
  medico,
  legal,
  manutencion,
  educacion,
  alojamiento,
  reintegracion
}

const iconList = {
  infoGif
}

const { protectionAndCare } = data
const { images, text, icons, noteBook, news, bigCard } = protectionAndCare

function convertSize (input) {
  const n = Number(input.split('px')[0])
  const r = (n * 100 / 1920) + 'vw'
  return r
}

function Section3 () {
  const [nameBigCard, setNameBigCard] = useState('')

  useEffect(() => {
    // if (bigCard) {
    //   const icon = document.getElementById('infoGif')
    //   const div = document.getElementById('SmallInfoBoxinfoGif')

    //   function activeDisplay () {
    //     div.style.display = 'flex'
    //   }

    //   function desactiveDisplay () {
    //     div.style.display = ''
    //   }

    //   icon.addEventListener('mouseenter', activeDisplay)
    //   div.addEventListener('mouseleave', desactiveDisplay)
    //   return () => {
    //     icon.removeEventListener('mouseenter', activeDisplay)
    //     div.removeEventListener('mouseleave', desactiveDisplay)
    //   }
    // }
  }, [])

  useEffect(() => {
    if (bigCard) {
      const images = document.getElementsByName('proteccion')
      const div = document.getElementById('BigCardProtection')

      function activeDisplay (event) {
        setNameBigCard(event.target.id)
        div.style.display = 'block'
      }

      function desactiveDisplay () {
        div.style.display = ''
        setNameBigCard('')
      }

      images.forEach(image => {
        image.addEventListener('mouseenter', activeDisplay)
      })
      div.addEventListener('mouseleave', desactiveDisplay)
      return () => {
        images.forEach(image => {
          image.removeEventListener('mouseenter', activeDisplay)
        })
        div.removeEventListener('mouseleave', desactiveDisplay)
      }
    }
  }, [])

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

  const listImageHover = ['psicosocial', 'medico', 'legal', 'manutencion', 'educacion', 'alojamiento', 'reintegracion']

  return (
    <section className={style.ProtectionCare} style={protectionAndCareBackgroundStyles}>
      {
        images.map((image, index) => (
          <img id={listImageHover.includes(image.name) ? image.name : null} name={image.grupo ? image.grupo : null} src={image && imagesList[image.name]} style={imagesStyles[index]} className={style.ProtectionCareImages} key={image.name + index} />
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
      <BigCard bigCard={bigCard} topSection={protectionAndCare.top} name={nameBigCard} />
      <News news={news} topSection={protectionAndCare.top} />
    </section>
  )
}

function BigCard ({ bigCard, topSection, name }) {
  console.log('name:', name)
  console.log('bigCard:', bigCard)
  if (bigCard[name]) console.log('bigCard[name]:', bigCard[name])
  const cardStyles = name
    ? {
        ...bigCard,
        width: convertSize(bigCard.width),
        height: convertSize(bigCard.height),
        top: convertSize(Number(bigCard[name].top.split('px')[0]) - Number(topSection.split('px')[0]) + 'px'),
        left: convertSize(bigCard[name].left),
        backgroundImage: `url("./src/assets/Section3/${bigCard.backgroundImage}.png")`
      }
    : {}

  const titleStyles = name
    ? {
        ...bigCard.titleStile,
        fontSize: convertSize(bigCard.titleStile.fontSize),
        lineHeight: convertSize(bigCard.titleStile.lineHeight),
        width: convertSize(bigCard[name].title.width),
        height: convertSize(bigCard[name].title.height),
        top: convertSize(bigCard[name].title.top),
        left: convertSize(bigCard[name].title.left)
      }
    : {}

  const subtitleStyles = name
    ? {
        ...bigCard.subtitleStile,
        fontSize: convertSize(bigCard.subtitleStile.fontSize),
        lineHeight: convertSize(bigCard.subtitleStile.lineHeight),
        width: convertSize(bigCard[name].subtitle.width),
        height: convertSize(bigCard[name].subtitle.height),
        top: convertSize(bigCard[name].subtitle.top),
        left: convertSize(bigCard[name].subtitle.left)
      }
    : {}

  const textStyle = name
    ? {
        ...bigCard.textStile,
        fontSize: convertSize(bigCard.textStile.fontSize),
        lineHeight: convertSize(bigCard.textStile.lineHeight),
        width: convertSize(bigCard[name].text.width),
        height: convertSize(bigCard[name].text.height),
        top: convertSize(bigCard[name].text.top),
        left: convertSize(bigCard[name].text.left)
      }
    : {}

  return (
    <div style={cardStyles} className={style.BigCardStyles} id='BigCardProtection'>
      {
        name
          ? (
            <>
              <h1 style={titleStyles} className={style.textStyles}>{bigCard[name].title.content}</h1>
              <h2 style={subtitleStyles} className={style.textStyles}>{bigCard[name].subtitle.content}</h2>
              <p style={textStyle} className={style.textStyles}>{bigCard[name].text.content}</p>
            </>
            )
          : null
      }
    </div>
  )
}

export default Section3
