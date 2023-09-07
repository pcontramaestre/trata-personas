import { useLayoutEffect } from 'react'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

import NoteBook from '../NoteBook/NoteBook'
// import BarGraph from '../BarGraph/BarGraph'
// import News from '../News/News'
import BigInfoBox from '../BigInfoBox/BigInfoBox'
import FrontPageSection6 from './FrontPageSection6/FrontPageSection6'

import style from './Section6.module.css'

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
// const { images, text, noteBook, bigInfoBox1, bigInfoBox2, news } = data.prevention
const { images, text, noteBook, bigInfoBox1, bigInfoBox2, frontPageImages } = data.prevention

function Section6 () {
  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      const scrollTriggerFrontPageSection6 = ScrollTrigger.getById('frontPageSection6')

      // Animación de mano
      gsap.fromTo('#handsection6', {
        scale: 0.6
      }, {
        scale: 1,
        scrollTrigger: {
          trigger: '#handsection6',
          // markers: true,
          start: () => {
            return scrollTriggerFrontPageSection6.end - scrollTriggerFrontPageSection6.start + ' 80%'
          },
          end: () => {
            return (scrollTriggerFrontPageSection6.end - scrollTriggerFrontPageSection6.start + 100) + ' center'
          },
          scrub: 1,
          id: 'handSection6'
        }
      })

      // Animación de barras

      const textAnimationSection6 = document.getElementsByName('animationBarssection6')
      // console.log('textAnimationSection6:', textAnimationSection6)

      const tl2 = gsap.timeline({
        scrollTrigger: {
          trigger: '#animationBarssection6',
          // markers: true,
          start: () => {
            return scrollTriggerFrontPageSection6.end - scrollTriggerFrontPageSection6.start + ' top'
          },
          end: () => {
            return (scrollTriggerFrontPageSection6.end - scrollTriggerFrontPageSection6.start + 3000) + ' bottom'
          },
          pin: '#section6',
          scrub: 1
        }
      })

      tl2.fromTo('#contenedorRojo1section6', {
        scaleX: 0.6,
        transformOrigin: 'left'
      }, {
        scale: 1
      })

      tl2.fromTo('#contenedorRojo2section6', {
        scaleX: 0.6,
        transformOrigin: 'left'
      }, {
        scale: 1
      }, 0)

      Array.from(textAnimationSection6).forEach(text => {
        tl2.from(text, {
          opacity: 0
        }, 1)
      })

      tl2.from('#manosAmigassection6', {
        scale: 0
      }, 2)
      tl2.from('#megafonosection6', {
        scale: 0
      }, 2)
    })
    return () => ctx.revert()
  }, [])

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
    <section id='section6' className={style.PreventionBackground} style={preventionBackground}>
      <FrontPageSection6 frontPageImages={frontPageImages} />
      {
        images.map((image, index) => (
          <img id={image.name + 'section6'} src={imagesList[image.name]} className={style.images} style={imageStyles[index]} key={image.name + index} />
        ))
      }
      {
        text.map((texto, index) => {
          switch (texto.tag) {
            case 'h1': {
              return <h1 className={style.preventionText} style={textStyles[index]} key={index}>{texto.content}</h1>
            }
            case 'h2': {
              return <h2 name={texto.name + 'section6'} id={texto.id + 'section6'} className={style.preventionText} style={textStyles[index]} key={index}>{texto.content}</h2>
            }
            case 'p': {
              return <p name={texto.name + 'section6'} dangerouslySetInnerHTML={{ __html: texto.content }} className={style.preventionText} style={textStyles[index]} key={index} />
            }
          }
          return true
        })
      }
      <BigInfoBox bigInfoBox={bigInfoBox1} topSection={prevention.top} />
      <NoteBook noteBook={noteBook} topSection={prevention.top} />
      {/* <BarGraph /> */}
      <BigInfoBox bigInfoBox={bigInfoBox2} topSection={prevention.top} />
      {/* <News news={news} topSection={prevention.top} /> */}
    </section>
  )
}

export default Section6
