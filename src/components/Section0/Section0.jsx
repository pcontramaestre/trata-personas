import { useEffect, useLayoutEffect, useState, useRef } from 'react'
import { gsap } from 'gsap'
import { ScrollTrigger, CustomEase } from 'gsap/all'
import { Howl } from 'howler'

import NoteBook from '../NoteBook/NoteBook'
import News from '../News/News'
import Map from '../Map/Map'
import BigInfoBox from '../BigInfoBox/BigInfoBox'
import FrontPageSection0 from './FrontPageSection0/FrontPageSection0'

import style from './Section0.module.css'

import logo from '../../assets/Instructions/logo.svg'
import scroll from '../../assets/Instructions/scroll1.svg'
import group from '../../assets/Instructions/group.svg'
import audio1 from '../../assets/Instructions/audio1.png'
import background from '/Section0/frontPageBackground.jpg'
import people from '/Section0/frontPagePeopleBehind.png'
import person from '/Section0/frontPagePersonAhead.png'
import puppet from '/Section0/frontPagePuppet.png'

import audio from '/audio/Section0/section0.mp3'

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
const { noteBook, news, map, bigInfoBox, frontPageImages } = data.homeHeader

function convertSize (input) {
  const n = Number(input.split('px')[0])
  return (n * 100 / 1920) + 'vw'
}

function Section0 () {

  const audioTag = useRef()
  const firstTimeuseEffect = useRef(true)

  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      ScrollTrigger.create({
        trigger: '#section2',
        // markers: true,
        start: 'top top',
        end: 'top top',
        onLeave: () => stopAudio()
      })
    })
    return () => ctx.revert()
  }, [])

  useEffect(() => {
    if (firstTimeuseEffect.current) {
      const audioButtom = document.querySelector(`#${style['audio1section0']}`)
      audioButtom.addEventListener('click', () => setAudio())
      firstTimeuseEffect.current = false
      playAudio()
      return () => audioButtom.removeEventListener('click', () => {})
    }
  },[])

  function setAudio() {
    if (audioTag.current.paused) {
      playAudio()
    } else {
      stopAudio()
    }
  }

  function playAudio() {
    audioTag.current.play()
  }

  function stopAudio() {
    audioTag.current.pause()
    // audioTag.current.currentTime = 0
  }

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
    height: convertSize('150px'),
    top: convertSize('5503px')
  }

  return (
    <section id='section0' className={style.HomeHeaderBackground} style={homeHeaderContainer}>
      <FrontPageSection0 frontPageImages={frontPageImages} />
      {
        homeHeader.images.map((image, index) => (
          image.name !== 'puppet'
            ? <img id={style[image.name + 'section0']} src={image && icons[image.name]} className={image.name === 'scroll' ? style.scroll : style.HomeHeaderImages} style={iconStyles[index]} key={image.name + index} />
            : null
        ))
      }
      
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
      <audio id='audio1section0' src={audio} ref={audioTag}></audio>
    </section>
  )
}

export default Section0
