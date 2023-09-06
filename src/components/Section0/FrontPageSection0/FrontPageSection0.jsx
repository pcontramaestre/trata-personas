import { useLayoutEffect } from 'react'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

import style from './FrontPageSection0.module.css'

import background from '../../../assets/Section0/frontPageBackground.jpg'
import people from '../../../assets/Section0/frontPagePeopleBehind.png'
import person from '../../../assets/Section0/frontPagePersonAhead.png'
import puppet from '../../../assets/Section0/frontPagePuppet.png'

gsap.registerPlugin(ScrollTrigger)

const listImages = {
  background,
  person,
  people,
  puppet
}

function convertSize (input) {
  const n = Number(input.split('px')[0])
  const r = (n * 100 / 1920) + 'vw'
  return r
}

function FrontPageSection0 ({ frontPageImages }) {
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
          id: 'puppetSection0ScrollTrigger',
          onEnter: () => {
            const scrollTriggerNoteBook = ScrollTrigger.getById('noteBookSection0')
            scrollTriggerNoteBook.refresh()
          }
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

  const iconStyles = frontPageImages.listImages.map(icon => ({
    ...icon,
    top: convertSize(icon.top),
    left: convertSize(icon.left),
    width: convertSize(icon.width),
    height: convertSize(icon.height)
  }))

  const puppetContainerStyles = {
    ...frontPageImages.containerPuppet,
    top: convertSize(frontPageImages.containerPuppet.top),
    left: convertSize(frontPageImages.containerPuppet.left),
    width: convertSize(frontPageImages.containerPuppet.width),
    height: convertSize(frontPageImages.containerPuppet.height)
  }

  return (
    <div className={style.FrontPageSection0Container}>
      {
        frontPageImages.listImages.map((image, index) => (
          image.name !== 'puppet'
            ? <img id={image.name + 'section0'} src={listImages[image.name]} className={style.FrontPageImages} style={iconStyles[index]} key={image.name + 'section0' + index} />
            : null
        ))
      }
      <div id='puppetContainerSection0' style={puppetContainerStyles} className={style.containerPuppet}>
        <img src={puppet} style={iconStyles[2]} />
      </div>
    </div>
  )
}

export default FrontPageSection0
