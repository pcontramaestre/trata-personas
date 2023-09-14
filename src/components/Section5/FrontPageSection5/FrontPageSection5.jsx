import { useLayoutEffect } from 'react'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

import style from './FrontPageSection5.module.css'

import background from '../../../assets/Section5/frontPageBackgroundOrange.png'
import frontPageStreet from '../../../assets/Section5/frontPageStreet.png'
import frontPageHouses from '../../../assets/Section5/frontPageHouses.png'
import person1 from '../../../assets/Section5/frontPagePerson1.png'
import person2 from '../../../assets/Section5/frontPagePerson2.png'
import person3 from '../../../assets/Section5/frontPagePerson3.png'
import person4 from '../../../assets/Section5/frontPagePerson4.png'
import person5 from '../../../assets/Section5/frontPagePerson5.png'

gsap.registerPlugin(ScrollTrigger)

const listImages = {
  background,
  frontPageStreet,
  frontPageHouses,
  person1,
  person2,
  person3,
  person4,
  person5
}

function convertSize (input) {
  const n = Number(input.split('px')[0])
  const r = (n * 100 / 1920) + 'vw'
  return r
}

function FrontPageSection5 ({ frontPageImages }) {
  useLayoutEffect(() => {
    function topPosition() {
      const m = (0 - 10) / (1600 - 1200)
      const b = - 1600 * m
      const x = window.innerWidth
      const y = m * x + b > 0 ? m * x + b : 0
      return y + '%'
    }
    const ctx = gsap.context(() => {
      // // Animation FrontPage
      const tl1 = gsap.timeline({
        scrollTrigger: {
          trigger: '#backgroundsection5',
          // markers: true,
          start: '30% ' + topPosition(),
          end: '+=5000 bottom',
          pin: '#section5',
          scrub: 1,
          id: 'frontPageSection5'
        }
      })
      tl1.from('#frontPageStreetsection5', { top: '50%' })
      tl1.fromTo('#frontPageHousessection5', { top: '100%' }, { top: '2.5%' })
      tl1.from('#person1section5', { left: '100%' })
      tl1.from('#person2section5', { left: () => -document.querySelector('#person2section5').clientWidth })
      tl1.from('#person3section5', { left: () => -document.querySelector('#person3section5').clientWidth })
      tl1.from('#person4section5', { left: () => -document.querySelector('#person4section5').clientWidth })
      tl1.from('#person5section5', { left: () => -document.querySelector('#person5section5').clientWidth })
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
    <div style={containerStyles} className={style.FrontPageSection5Container}>
      {
        frontPageImages.listImages.map((image, index) => (
          <img id={image.name + 'section5'} src={listImages[image.name]} className={style.FrontPageImages} style={iconStyles[index]} key={image.name + 'section5' + index} />
        ))
      }
    </div>
  )
}

export default FrontPageSection5
