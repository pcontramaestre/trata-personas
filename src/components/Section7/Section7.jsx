import { useLayoutEffect } from 'react'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

import style from './Section7.module.css'

import background from '../../assets/Section7/frontPageBackground.png'
import persons from '../../assets/Section7/frontPagePersons.png'
import scroll2 from '../../assets/Section7/scroll2.svg'

import data from '../../../troy.json'
import HandSlide from '../Slides/HandSlide/HandSlide'

gsap.registerPlugin(ScrollTrigger)

const icons = {
  background,
  persons,
  scroll2
}

function convertSize (input) {
  const n = Number(input.split('px')[0])
  const r = (n * 100 / 1920) + 'vw'
  return r
}

function relativeMedition (input) {
  const n = Number(input.split('px')[0]) - Number(interestingEvents.top.split('px')[0])
  return n + 'px'
}

const { interestingEvents } = data
const { handSlide } = data.interestingEvents

function Section7 () {
  useLayoutEffect(() => {
    const containerSection = document.querySelector('#section7')
    const containerAnimation = document.getElementsByName('HandSlideContainer')[0]
    const elementToMove = document.getElementsByName('HandSlideContainerCards')[0]

    const widthAnimationContainer = containerAnimation.offsetWidth
    const widthElementToMove = elementToMove.offsetWidth

    const ctx = gsap.context(() => {
      gsap.to(elementToMove, {
        right: widthElementToMove - widthAnimationContainer,
        scrollTrigger: {
          trigger: containerAnimation,
          // markers: true,
          start: 'top 38%',
          end: '+=6000 bottom',
          pin: containerSection,
          scrub: true
        }
      })
    })

    return () => ctx.revert()
  }, [])

  const interestingEventsContainer = {
    height: convertSize(relativeMedition(interestingEvents.height))
  }

  const interestingEventsTextContainerStyle = {
    top: convertSize(relativeMedition(interestingEvents.textContainer.top)),
    height: convertSize(interestingEvents.textContainer.height),
    backgroundColor: interestingEvents.textContainer.color
  }

  const textStyles = interestingEvents.text.map((texto, index) => ({
    ...texto,
    flag: '',
    content: '',
    top: convertSize(relativeMedition(texto.top)),
    left: convertSize(texto.left),
    width: convertSize(texto.width),
    height: convertSize(texto.height),
    fontSize: convertSize(texto.fontSize),
    lineHeight: texto.lineHeight && convertSize(texto.lineHeight)
  }))

  const iconStyles = interestingEvents.images.map(icon => ({
    ...icon,
    top: convertSize(Number(icon.top.split('px')[0]) - Number(interestingEvents.top.split('px')[0]) + 'px'),
    left: convertSize(icon.left),
    width: convertSize(icon.width),
    height: convertSize(icon.height)
  }))

  return (
    <section id='section7' className={style.InterestingEventsBackground} style={interestingEventsContainer}>
      <div style={interestingEventsTextContainerStyle} className={style.interestingEventsTextContainer} />
      {
        interestingEvents.images.map((image, index) => (
          <img src={image && icons[image.name]} className={image.name === 'scroll2' ? style.scroll2 : null} style={iconStyles[index]} key={image.name + index} />
        ))
      }
      {
        interestingEvents.text.map((texto, index) => {
          switch (texto.tag) {
            case 'h1': {
              return <h1 className={style.InterestingEventsText} style={textStyles[index]} key={index}>{texto.content}</h1>
            }
            case 'h2': {
              return <h2 className={style.InterestingEventsText} style={textStyles[index]} key={index}>{texto.content}</h2>
            }
            case 'p': {
              return <p dangerouslySetInnerHTML={{ __html: texto.content }} className={style.InterestingEventsText} style={textStyles[index]} key={index} />
            }
          }
          return true
        })
      }
      <HandSlide handSlide={handSlide} totalTop={relativeMedition(handSlide.top)} />
    </section>
  )
}

export default Section7
