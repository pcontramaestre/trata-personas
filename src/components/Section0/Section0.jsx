import { useLayoutEffect } from 'react'
import { gsap } from 'gsap'
import { ScrollTrigger, CustomEase } from 'gsap/all'

import NoteBook from '../NoteBook/NoteBook'
import News from '../News/News'
import Map from '../Map/Map'
import BigInfoBox from '../BigInfoBox/BigInfoBox'

import style from './Section0.module.css'

import logo from '../../assets/Instructions/logo.svg'
import scroll from '../../assets/Instructions/scroll1.svg'
import group from '../../assets/Instructions/group.svg'
import audio1 from '../../assets/Instructions/audio1.svg'
import background from '../../assets/Section0/frontPageBackground.jpg'
import people from '../../assets/Section0/frontPagePeopleBehind.png'
import person from '../../assets/Section0/frontPagePersonAhead.png'
import puppet from '../../assets/Section0/frontPagePuppet.png'

import data from '../../../troy.json'

gsap.registerPlugin(ScrollTrigger)
gsap.registerPlugin(CustomEase)

const icons = {
  logo,
  scroll,
  group,
  audio1,
  background,
  people,
  person,
  puppet
}

const { homeHeader } = data
const { noteBook, news, map, bigInfoBox } = data.homeHeader

function convertSize (input) {
  const n = Number(input.split('px')[0])
  return (n * 100 / 1920) + 'vw'
}

function Section0 () {
  useLayoutEffect(() => {
    const windowWidth = window.innerWidth
    function calculateHeight () {
      const y = -0.035 * (windowWidth) + 55
      if (y <= 0) return 0
      else return y
    }
    const ctx = gsap.context(() => {
      // Puppet entrance animation
      const tl = gsap.timeline({ delay: 1 })
      tl.from('#puppetContainerSection0', {
        left: '100%',
        duration: 0.5
      })
      tl.fromTo('#puppetContainerSection0', {
        rotation: -30,
        duration: 2.5
      }, {
        rotation: 0,
        duration: 2.5,
        ease: 'elastic.out(1, 0.3)'
      }, 0.2)

      // Move Puppet
      const tl2 = gsap.timeline({
        scrollTrigger: {
          trigger: '#backgroundsection0',
          // markers: true,
          start: () => {
            return '20% ' + calculateHeight() + '%'
          },
          end: '2000 bottom',
          scrub: 1,
          pin: '#section0',
          id: 'puppetSection0ScrollTrigger'
        }
      })
      tl2.to('#puppetContainerSection0', {
        y: '-20%',
        ease: 'back.in(1.7)'
      })
      tl2.from('#peoplesection0', {
        x: '-5%',
        ease: 'sine.in',
        opacity: 0
      }, 0)
      tl2.from('#personsection0', {
        x: () => -document.querySelector('#personsection0').clientWidth,
        ease: 'sine.in'
      }, 0)
    })
    return () => ctx.revert()
  }, [])

  const homeHeaderContainer = {
    height: convertSize(homeHeader.size.height)
  }

  const textStyles = homeHeader.text.map((texto, index) => ({
    ...texto,
    top: convertSize(texto.top),
    left: convertSize(texto.left),
    width: convertSize(texto.width),
    height: convertSize(texto.height),
    fontSize: convertSize(texto.fontSize),
    lineHeight: texto.lineHeight && convertSize(texto.lineHeight)
  }))

  const iconStyles = homeHeader.images.map(icon => ({
    ...icon,
    top: convertSize(icon.top),
    left: convertSize(icon.left),
    width: convertSize(icon.width),
    height: convertSize(icon.height)
  }))

  const blockFooterStyle = {
    height: convertSize('634px'),
    top: convertSize('5503px')
  }

  const puppetContainerStyles = {
    ...homeHeader.containerPuppet,
    top: convertSize(homeHeader.containerPuppet.top),
    left: convertSize(homeHeader.containerPuppet.left),
    width: convertSize(homeHeader.containerPuppet.width),
    height: convertSize(homeHeader.containerPuppet.height)
  }

  return (
    <section id='section0' className={style.HomeHeaderBackground} style={homeHeaderContainer}>
      {
        homeHeader.images.map((image, index) => (
          image.name !== 'puppet'
            ? <img id={image.name + 'section0'} src={image && icons[image.name]} className={image.name === 'scroll' ? style.scroll : style.HomeHeaderImages} style={iconStyles[index]} key={image.name + index} />
            : null
        ))
      }
      <div id='puppetContainerSection0' style={puppetContainerStyles} className={style.containerPuppet}>
        <img src={puppet} className={style.HomeHeaderImages} style={iconStyles[2]} />
      </div>
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
      <div className={style.HomeHeaderBlockFooter} style={blockFooterStyle} />
    </section>
  )
}

export default Section0
