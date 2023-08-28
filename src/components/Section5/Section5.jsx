import { useLayoutEffect } from 'react'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

import NoteBook from '../NoteBook/NoteBook'
// import BarGraph from '../BarGraph/BarGraph'
import Map from '../Map/Map'
// import BigInfoBox from '../BigInfoBox/BigInfoBox'

import style from './Section5.module.css'

import background from '../../assets/Section5/frontPageBackground.png'
import person1 from '../../assets/Section5/frontPagePerson1.png'
import person2 from '../../assets/Section5/frontPagePerson2.png'
import person3 from '../../assets/Section5/frontPagePerson3.png'
import person4 from '../../assets/Section5/frontPagePerson4.png'
import person5 from '../../assets/Section5/frontPagePerson5.png'
import grafico from '../../assets/Section5/grafico.png'
import hand from '../../assets/Section5/hand.svg'
import straightBlueArrow from '../../assets/Section5/straightBlueArrow.svg'
import straightYellowArrow from '../../assets/Section5/straightYellowArrow.svg'
import straightRedArrow from '../../assets/Section5/straightRedArrow.svg'
import bus from '../../assets/Section5/bus.png'
import plane from '../../assets/Section5/plane.png'

import data from '../../../troy.json'

import animationBackground from '../../assets/Section5/animationBackground.png'

gsap.registerPlugin(ScrollTrigger)

const { repatriation } = data
const { noteBook, map, animation } = data.repatriation

const images = {
  background,
  person1,
  person2,
  person3,
  person4,
  person5,
  grafico,
  hand,
  straightBlueArrow,
  straightYellowArrow,
  straightRedArrow,
  bus,
  plane
}

const mobiles = {
  plane,
  bus
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
  useLayoutEffect(() => {
    const containerSection = document.querySelector('#section5')
    const containerAnimation = document.getElementsByName('busPlaneContainer')[0]
    const plane = document.getElementsByName('plane')[0]
    const bus = document.getElementsByName('bus')[0]
    console.log('resolución de:', window.innerWidth)

    const percentageStart = window.innerWidth * (-0.0389) + 62.18
    function move (input) {
      const n = Number(input.split('px')[0])
      return window.innerWidth * (n / 1920)
    }

    const ctx = gsap.context(() => {
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: containerAnimation,
          markers: true,
          start: `16% ${percentageStart}%`,
          end: '+=6000 bottom',
          pin: containerSection,
          scrub: true
        }
      })

      tl.to(plane, { left: move('294px') })
      tl.to(bus, { left: move('75px') }, 0)
    })

    return () => ctx.revert()
  }, [])

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
    top: convertSize(61507 - Number(repatriation.top.split('px')[0]) + 'px'),
    height: convertSize('846px')
  }

  return (
    <section id='section5' className={style.RepatriationBackground} style={repatriationCotainer}>
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
      {/* <BarGraph /> */}
      <Map map={map} topSection={repatriation.top} />
      <Animation />
      <div className={style.stuffed} style={stuffedStyle} />
    </section>
  )
}

function Animation () {
  const animationContainerStyles = {
    width: convertSize(animation.width),
    height: convertSize(animation.height),
    top: convertSize(relativeMedition(animation.top)),
    backgroundImage: `url(${animationBackground})`,
    backgroundColor: animation.backgroundColor
  }

  const picturesStyles = animation.images.map(image => (
    {
      width: convertSize(image.width),
      height: convertSize(image.height),
      top: convertSize(image.top),
      left: convertSize(image.left),
      backgroundImage: `url(${mobiles[image.name]})`
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
    <div name='busPlaneContainer' style={animationContainerStyles} className={style.animationContainer}>
      {
        animation.images.map((image, index) => (
          <div name={image.name} className={style.animationPictures} style={picturesStyles[index]} key={image.name + index}>
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
