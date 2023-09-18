import { useLayoutEffect } from 'react'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

import style from './HandSlide.module.css'

gsap.registerPlugin(ScrollTrigger)

function convertSize (input) {
  const n = Number(input.split('px')[0])
  const r = (n * 100 / 1920) + 'vw'
  return r
}

function HandSlide ({ handSlide, totalTop }) {
  function topPosition() {
    const m = (0 - 35) / (1600 - 1280)
    const b = - 1600 * m
    const x = window.innerWidth
    const y = m * x + b > 0 ? m * x + b : 0
    return y + '%'
  }
  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      const scrollTriggerFrontPageSection7 = ScrollTrigger.getById('animationFrontPageSection7')
      gsap.to('#HandSlideContainerCards' + handSlide.section, {
        right: () => {
          return document.querySelector(`#HandSlideContainerCards${handSlide.section}`).offsetWidth - document.querySelector(`#HandSlideContainer${handSlide.section}`).offsetWidth
        },
        ease: 'power2.inOut',
        scrollTrigger: {
          trigger: '#HandSlideContainer' + handSlide.section,
          // markers: true,
          start: () => {
            return scrollTriggerFrontPageSection7.end - scrollTriggerFrontPageSection7.start + ' ' + topPosition()
          },
          end: () => {
            return (scrollTriggerFrontPageSection7.end - scrollTriggerFrontPageSection7.start + 4000) + ' bottom'
          },
          pin: '#section7',
          scrub: 1,
          id: 'animationHandSlideSection7'
        }
      })
      // ScrollTrigger.create({
      //   trigger: '#HandSlideContainer' + handSlide.section,
      //   markers: true,
      //   // start: 'top center',
      //   // end: 'bottom center',
      //   start: () => {
      //     return scrollTriggerFrontPageSection7.end - scrollTriggerFrontPageSection7.start + ' 20%'
      //   },
      //   end: () => {
      //     return (scrollTriggerFrontPageSection7.end - scrollTriggerFrontPageSection7.start + 4000) + ' bottom'
      //   },
      //   pin: '#section7',
      //   // scrub: true,
      //   id: 'animationHandSlideSection7'
      // })
    })

    return () => ctx.revert()
  }, [])

  const handSlideBackgroundStyle = {
    height: convertSize(handSlide.height),
    top: convertSize(totalTop)
  }

  const handSlideContainer = {
    width: convertSize(handSlide.container.width),
    top: convertSize(handSlide.container.top)
  }

  const cardsStyles = handSlide.container.cards.map((card) => ({
    width: convertSize(Number(card.width.split('px')[0]) - 36.22 - 26.17 + 'px'),
    height: convertSize(card.height),
    top: convertSize(card.top),
    left: convertSize(card.left),
    paddingTop: convertSize('33.95px'),
    paddingLeft: convertSize('36.22px'),
    paddingRight: convertSize('26.17px'),
    borderRadius: convertSize(handSlide.container.borderRadius),
    backgroundColor: card.backgroundColor,
    rotate: `${card.angle}`
  }))

  const dateStyles = {
    ...handSlide.container.date,
    height: convertSize(handSlide.container.date.fontSize),
    fontSize: convertSize(handSlide.container.date.fontSize),
    lineHeight: convertSize(handSlide.container.date.lineHeight)
  }

  const countryStyles = {
    ...handSlide.container.country,
    height: convertSize(handSlide.container.country.fontSize),
    fontSize: convertSize(handSlide.container.country.fontSize),
    lineHeight: convertSize(handSlide.container.country.lineHeight)
  }

  const paragraphStyles = {
    ...handSlide.container.paragraph,
    fontSize: convertSize(handSlide.container.paragraph.fontSize),
    lineHeight: convertSize(handSlide.container.paragraph.lineHeight),
    paddingTop: convertSize('10px')
  }

  return (
    <div id={'HandSlideContainer' + handSlide.section} name='HandSlideContainer' className={style.HandSlideBackground} style={handSlideBackgroundStyle}>
      <div id={'HandSlideContainerCards' + handSlide.section} style={handSlideContainer} className={style.HandSlideContainer}>
        {
          handSlide.container.cards.map((card, index) => (
            <div className={style.HandSlideCard} style={cardsStyles[index]} key={index}>
              <label style={dateStyles}>{card.text.date}</label>
              <h1 style={countryStyles}>{card.text.country}</h1>
              <p style={paragraphStyles}>{card.text.paragraph}</p>
            </div>
          ))
        }
      </div>
    </div>
  )
}

export default HandSlide
