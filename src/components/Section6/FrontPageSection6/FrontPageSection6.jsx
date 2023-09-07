import { useLayoutEffect } from 'react'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

import style from './FrontPageSection6.module.css'

import background from '../../../assets/Section6/frontPageBackground.png'
import family from '../../../assets/Section6/frontPageFamily.png'
import frame from '../../../assets/Section6/frontPageFrame.png'
import handChild from '../../../assets/Section6/manoNina.png'
import handShe from '../../../assets/Section6/manoElla.png'
import handHe from '../../../assets/Section6/manoEl.png'

gsap.registerPlugin(ScrollTrigger)

const listImages = {
  background,
  family,
  frame,
  handChild,
  handShe,
  handHe
}

function convertSize (input) {
  const n = Number(input.split('px')[0])
  const r = (n * 100 / 1920) + 'vw'
  return r
}

function FrontPageSection6 ({ frontPageImages }) {
  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      // Animación frontPage
      const tl1 = gsap.timeline({
        scrollTrigger: {
          trigger: '#backgroundsection6',
          // markers: true,
          start: '7% top',
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

      tl1.fromTo('#handChildsection6', {
        scale: 0.7
      }, {
        scale: 1
      }, 0)
      tl1.fromTo('#handShesection6', {
        scale: 0.7
      }, {
        scale: 1
      }, 0)
      tl1.fromTo('#handHesection6', {
        scale: 0.7
      }, {
        scale: 1
      }, 0)
    })

    return () => ctx.revert()
  }, [])

  const containerStyles = {
    height: convertSize(frontPageImages.height)
  }

  const iconStyles = frontPageImages.listImages.map(icon => ({
    ...icon,
    top: convertSize(Number(icon.top.split('px')[0]) - Number(frontPageImages.top.split('px')[0]) + 'px'),
    left: convertSize(icon.left),
    width: convertSize(icon.width),
    height: convertSize(icon.height)
  }))

  return (
    <div style={containerStyles} className={style.FrontPageSection6Container}>
      {
        frontPageImages.listImages.map((image, index) => (
          <img id={image.name + 'section6'} src={listImages[image.name]} className={style.FrontPageImages} style={iconStyles[index]} key={image.name + 'section6' + index} />
        ))
      }
    </div>
  )
}

export default FrontPageSection6
