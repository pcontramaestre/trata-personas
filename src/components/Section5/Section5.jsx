import { useLayoutEffect } from 'react'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

import NoteBook from '../NoteBook/NoteBook'
// import BarGraph from '../BarGraph/BarGraph'
import MapSection05 from '../Map/MapSection05/MapSection05'
// import BigInfoBox from '../BigInfoBox/BigInfoBox'
import FrontPageSection5 from './FrontPageSection5/FrontPageSection5'

import style from './Section5.module.css'

import background from '../../assets/Section5/frontPageBackgroundOrange.png'
import frontPageStreet from '../../assets/Section5/frontPageStreet.png'
import frontPageHouses from '../../assets/Section5/frontPageHouses.png'
import person1 from '../../assets/Section5/frontPagePerson1.png'
import person2 from '../../assets/Section5/frontPagePerson2.png'
import person3 from '../../assets/Section5/frontPagePerson3.png'
import person4 from '../../assets/Section5/frontPagePerson4.png'
import person5 from '../../assets/Section5/frontPagePerson5.png'
import grafico from '../../assets/Section5/grafico.png'
import hand from '../../assets/Section5/hand.svg'
import straightBlueArrow from '../../assets/Section5/straightBlueArrow.png'
import straightYellowArrow from '../../assets/Section5/straightYellowArrow.png'
import straightRedArrow from '../../assets/Section5/straightRedArrow.png'
import bus from '../../assets/Section5/bus.png'
import plane from '../../assets/Section5/plane.png'

import data from '../../../troy.json'

import animationBackground from '../../assets/Section5/animationBackground.png'
import News from '../News/News'

gsap.registerPlugin(ScrollTrigger)

const { repatriation } = data
const { noteBook, animation, news, frontPageImages } = data.repatriation

const images = {
  background,
  frontPageStreet,
  frontPageHouses,
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
    // const percentageStart = window.innerWidth * (-0.0389) + 62.18

    const ctx = gsap.context(() => {
      // Animation Titles
      gsap.to('#title1Section5', {
        y: '80%',
        scrollTrigger: {
          trigger: '#title1Section5',
          // markers: true,
          start: 'top center',
          end: 'bottom center',
          scrub: 10
        }
      })

      const scrollTriggerFrontPageSection5 = ScrollTrigger.getById('frontPageSection5')

      // Animación del texto en gráficas
      const textGraphic1 = document.getElementsByName('textGraphic1section5')
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: textGraphic1[0],
          // markers: true,
          start: () => {
            return scrollTriggerFrontPageSection5.end - scrollTriggerFrontPageSection5.start + ' 90%'
          },
          end: () => {
            return (scrollTriggerFrontPageSection5.end - scrollTriggerFrontPageSection5.start + 200) + ' 70%'
          },
          scrub: 1,
          id: 'textGraphicAnimationSection5'
        }
      })
      Array.from(textGraphic1).forEach((text) => {
        tl.from(text, {
          left: '100%'
        }, 0)
      })
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
      <FrontPageSection5 frontPageImages={frontPageImages} />
      {
        repatriation.image.map((photo, index) => (
          <img id={photo.name + 'section5'} src={images[photo.name]} style={imagesStyles[index]} className={style.RepatriationImages} key={photo.name + index} />
        ))
      }

      <div id='title1Section5' className={style.title1Section5}>
        <h1 className={style.repatriationText} style={textStyles[0]}>{repatriation.text[0].content}</h1>
        <h1 className={style.repatriationText} style={textStyles[1]}>{repatriation.text[1].content}</h1>
      </div>

      {
        repatriation.text.map((texto, index) => {
          if (index < 2) return null
          switch (texto.tag) {
            case 'h1': {
              return <h1 name={texto.name ? texto.name + 'section5' : null} className={style.repatriationText} style={textStyles[index]} key={index}>{texto.content}</h1>
            }
            case 'h2': {
              return <h2 name={texto.name ? texto.name + 'section5' : null} className={style.repatriationText} style={textStyles[index]} key={index}>{texto.content}</h2>
            }
            case 'p': {
              return <p name={texto.name ? texto.name + 'section5' : null} dangerouslySetInnerHTML={{ __html: texto.content }} className={style.repatriationText} style={textStyles[index]} key={index} />
            }
          }
          return true
        })
      }
      <NoteBook noteBook={noteBook} topSection={repatriation.top} />
      {/* <BarGraph /> */}
      {/* <Map map={map} topSection={repatriation.top} /> */}
      <MapSection05 topSection={repatriation.top} />
      <Animation />
      <div className={style.stuffed} style={stuffedStyle} />
      <News news={news} topSection={repatriation.top} />
    </section>
  )
}

function Animation () {
  useLayoutEffect(() => {
    function move (input) {
      const n = Number(input.split('px')[0])
      const r = window.innerWidth * (n / 1920)
      return r
    }

    function topPosition() {
      const m = (0 - 10) / (1600 - 1200)
      const b = - 1600 * m
      const x = window.innerWidth
      const y = m * x + b > 0 ? m * x + b : 0
      return y + '%'
    }
    const ctx = gsap.context(() => {
      const scrollTriggerFrontPageSection5 = ScrollTrigger.getById('frontPageSection5')
      // Animation Plane & Bus
      const tl2 = gsap.timeline({
        scrollTrigger: {
          trigger: '#busPlaneContainerSection5',
          // markers: true,
          // start: () => {
          //   return scrollTriggerFrontPageSection5.end - scrollTriggerFrontPageSection5.start + 200 + ' ' + topPosition()
          // },
          // end: () => {
          //   return (scrollTriggerFrontPageSection5.end - scrollTriggerFrontPageSection5.start + 4000) + ' bottom'
          // },
          start: 'top+=200 ' + topPosition(),
          end: 'bottom+=4000 bottom',
          pin: '#section5',
          scrub: 1,
          id: 'plane&bus',
          pinnedContainer: '#section5'
        }
      })

      tl2.to('#planesection5', { left: move('294px') })
      tl2.to('#bussection5', { left: move('75px') }, 0)
    })

    return () => ctx.revert()
  }, [])

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
    <div id='busPlaneContainerSection5' style={animationContainerStyles} className={style.animationContainer}>
      {
        animation.images.map((image, index) => (
          <div id={image.name + 'section5'} className={style.animationPictures} style={picturesStyles[index]} key={image.name + index}>
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
