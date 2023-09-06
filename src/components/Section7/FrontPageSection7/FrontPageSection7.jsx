import { useLayoutEffect } from 'react'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

import style from './FrontPageSection7.module.css'

import background from '../../../assets/Section7/frontPageBackground.png'
import persons from '../../../assets/Section7/frontPagePersons.png'

gsap.registerPlugin(ScrollTrigger)

const listImages = {
  background,
  persons
}

function convertSize (input) {
  const n = Number(input.split('px')[0])
  const r = (n * 100 / 1920) + 'vw'
  return r
}

function FrontPageSection7 ({ forntPageImages }) {
  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo('#personssection7', {
        y: '100%',
        opacity: 0
      }, {
        y: '0%',
        opacity: 1,
        scrollTrigger: {
          trigger: '#backgroundsection7',
          // markers: true,
          start: '20% top',
          end: '+=2000 bottom',
          pin: '#section7',
          scrub: 1,
          id: 'animationFrontPageSection7',
          onLeave: () => {
            const scrollTriggerHandSlideSection7 = ScrollTrigger.getById('animationHandSlideSection7')
            scrollTriggerHandSlideSection7.refresh()
            // ScrollTrigger.refresh()
          }
        }
      })
      // ScrollTrigger.create({
      //   trigger: '#backgroundsection7',
      //   markers: true,
      //   start: 'top top',
      //   end: '+=2000 bottom',
      //   pin: '#section7',
      //   scrub: true,
      //   id: 'animationFrontPageSection7',
      //   onLeave: () => {
      //     console.log('voy a refrescar')
      //     ScrollTrigger.refresh()
      //     console.log('ya refresqué')
      //   }
      // })
    })

    return () => ctx.revert()
  }, [])

  const imagesStyles = forntPageImages.listImages.map(image => ({
    top: convertSize(Number(image.top.split('px')[0]) - Number(forntPageImages.top.split('px')[0]) + 'px'),
    height: convertSize(image.height)
  }))

  return (
    <div className={style.FrontPageSection7Container}>
      {
            forntPageImages.listImages.map((image, index) => (
              <img id={image.name + 'section7'} src={listImages[image.name]} className={image.name === 'persons' ? `${style.persons}` : null} style={imagesStyles[index]} key={image.name + 'section7' + index} />
            ))
      }
    </div>
  )
}

export default FrontPageSection7
