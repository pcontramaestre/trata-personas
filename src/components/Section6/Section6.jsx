import { useLayoutEffect } from 'react'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

import NoteBook from '../NoteBook/NoteBook'
// import BarGraph from '../BarGraph/BarGraph'
// import News from '../News/News'
import BigInfoBox from '../BigInfoBox/BigInfoBox'

import style from './Section6.module.css'

import background from '../../assets/Section6/frontPageBackground.png'
import family from '../../assets/Section6/frontPageFamily.png'
import frame from '../../assets/Section6/frontPageFrame.png'
import handChild from '../../assets/Section6/manoNina.png'
import handShe from '../../assets/Section6/manoElla.png'
import handHe from '../../assets/Section6/manoEl.png'
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
  rectanguloAzul,
  handChild,
  handHe,
  handShe
}

function convertSize (input) {
  const n = Number(input.split('px')[0])
  const r = (n * 100 / 1920) + 'vw'
  return r
}

const { prevention } = data
// const { images, text, noteBook, bigInfoBox1, bigInfoBox2, news } = data.prevention
const { images, text, noteBook, bigInfoBox1, bigInfoBox2 } = data.prevention

function Section6 () {
  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      // Animación frontPage
      const tl1 = gsap.timeline({
        scrollTrigger: {
          trigger: '#backgroundsection6',
          // markers: true,
          start: 'top top',
          end: '+=2000 bottom',
          pin: '#section6',
          scrub: 1,
          id: 'frontPageSection6',
          onEnter: () => {
            const scrollTriggerHandSection6 = ScrollTrigger.getById('handSection6')
            scrollTriggerHandSection6.refresh()
          }
        }
      })

      tl1.from('#handChildsection6', {
        scale: 0
      }, 0)
      tl1.from('#handShesection6', {
        scale: 0
      }, 0)
      tl1.from('#handHesection6', {
        scale: 0
      }, 0)

      const scrollTriggerFrontPageSection6 = ScrollTrigger.getById('frontPageSection6')

      // Animación de mano
      gsap.from('#handsection6', {
        scale: 0,
        scrollTrigger: {
          trigger: '#handsection6',
          // markers: true,
          start: () => {
            return scrollTriggerFrontPageSection6.end - scrollTriggerFrontPageSection6.start + ' center'
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

      tl2.from('#contenedorRojo1section6', {
        scaleX: 0,
        transformOrigin: 'left'
      })

      tl2.from('#contenedorRojo2section6', {
        scaleX: 0,
        transformOrigin: 'left'
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
