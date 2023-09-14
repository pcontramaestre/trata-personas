import { useEffect, useLayoutEffect } from 'react'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

import style from './BigInfoBox.module.css'
import group from '../../assets/Instructions/group.svg'
import gratinBeish from '../../assets/BigInfoBox/gratinBeish.png'

gsap.registerPlugin(ScrollTrigger)

const backgroundStyles = {
  gratinBeish
}

function convertSize (input) {
  const n = Number(input.split('px')[0])
  return (n * 100 / 1920) + 'vw'
}

function BigInfoBox ({ bigInfoBox, topSection }) {
  if (!bigInfoBox) return null

  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from(`#${bigInfoBox.name}`, {
        y: 200,
        opacity: 0,
        scrollTrigger: {
          trigger: `#${bigInfoBox.name}`,
          // markers: true,
          start: 'top bottom',
          end: 'bottom bottom',
          scrub: 1,
          pinnedContainer: `#${bigInfoBox.name.split('_')[1]}`
        }
      })
    })
    return () => ctx.revert()
  }, [])

  useEffect(() => {
    if (bigInfoBox && bigInfoBox.icons) {
      const span = document.getElementById('specialSpan')
      const div = document.getElementById('divHover')

      function activeDisplay () {
        div.style.display = 'block'
        span.style.cursor = 'pointer'
      }

      function desactiveDisplay () {
        div.style.display = ''
      }

      span.addEventListener('mouseenter', activeDisplay)
      span.addEventListener('mouseleave', desactiveDisplay)
      return () => {
        span.removeEventListener('mouseenter', activeDisplay)
        span.removeEventListener('mouseleave', desactiveDisplay)
      }
    }
  }, [])

  const bigInfoBoxStyle = {
    top: convertSize(topSection ? Number(bigInfoBox.top.split('px')[0]) - Number(topSection.split('px')[0]) + 'px' : bigInfoBox.top),
    width: convertSize(bigInfoBox.width),
    height: convertSize(bigInfoBox.height),
    left: convertSize(bigInfoBox.left),
    borderRadius: convertSize(bigInfoBox.borderRadius),
    border: convertSize(bigInfoBox.border),
    backgroundColor: bigInfoBox.backgroundColor
  }

  const textInfoBox = bigInfoBox.text.map((texto) => ({
    ...texto,
    width: convertSize(texto.width),
    height: convertSize(texto.height),
    top: convertSize(Number(texto.top.split('px')[0]) - Number(bigInfoBox.top.split('px')[0]) + 'px'),
    left: convertSize(Number(texto.left.split('px')[0]) - Number(bigInfoBox.left.split('px')[0]) + 'px'),
    fontSize: convertSize(texto.fontSize),
    lineHeight: convertSize(texto.lineHeight)
  }))

  const barInfoBox = {
    ...bigInfoBox.bar,
    height: convertSize(bigInfoBox.bar.height),
    top: convertSize(Number(bigInfoBox.bar.top.split('px')[0]) - Number(bigInfoBox.top.split('px')[0]) + 'px'),
    left: convertSize(Number(bigInfoBox.bar.left.split('px')[0]) - Number(bigInfoBox.left.split('px')[0]) + 'px')
  }

  const iconStyles = bigInfoBox.icons
    ? {
        ...bigInfoBox.icons,
        width: convertSize(bigInfoBox.icons.width),
        height: convertSize(bigInfoBox.icons.height),
        top: convertSize(Number(bigInfoBox.icons.top.split('px')[0]) - Number(bigInfoBox.top.split('px')[0]) + 'px'),
        left: convertSize(Number(bigInfoBox.icons.left.split('px')[0]) - Number(bigInfoBox.left.split('px')[0]) + 'px')
      }
    : {}

  const iconHoverStyles = bigInfoBox.icons
    ? {
        ...bigInfoBox.icons.hover,
        width: convertSize(bigInfoBox.icons.hover.width),
        height: convertSize(bigInfoBox.icons.hover.height),
        top: convertSize(bigInfoBox.icons.hover.top),
        left: convertSize(bigInfoBox.icons.hover.left),
        backgroundImage: `url(${backgroundStyles[bigInfoBox.icons.hover.backgroundImage]})`,
        backgroundSize: `${convertSize(bigInfoBox.icons.hover.width)} ${convertSize(bigInfoBox.icons.hover.height)}`,
        borderRadius: convertSize(bigInfoBox.borderRadius)
      }
    : {}

  const textHoverStyles = bigInfoBox.icons
    ? {
        ...bigInfoBox.icons.hover.text,
        width: convertSize(bigInfoBox.icons.hover.text.width),
        height: convertSize(bigInfoBox.icons.hover.text.height),
        top: convertSize(bigInfoBox.icons.hover.text.top),
        left: convertSize(bigInfoBox.icons.hover.text.left),
        fontSize: convertSize(bigInfoBox.icons.hover.text.fontSize),
        lineHeight: convertSize(bigInfoBox.icons.hover.text.lineHeight)
      }
    : {}

  return (
    <div id={bigInfoBox.name} name={bigInfoBox.name} className={style.BigInfoBox} style={bigInfoBoxStyle}>
      <div className={style.BigInfoBoxBar} style={barInfoBox} />
      {
        bigInfoBox.icons
          ? (
            <div id='divHover' style={iconHoverStyles} className={style.BigInfoBoxContainerHover}>
              <p style={textHoverStyles}>{bigInfoBox.icons.hover.text.content}</p>
            </div>)
          : null
      }
      {
        bigInfoBox.text.map((texto, index) => {
          if (texto.tag === 'h1') {
            return <h1 className={style.BigInfoBoxTitle} style={textInfoBox[index]} dangerouslySetInnerHTML={{ __html: texto.content }} key={index} />
          }
          return <p style={textInfoBox[index]} dangerouslySetInnerHTML={{ __html: texto.content }} key={index} />
        })
      }
      {
        bigInfoBox.icons
          ? (
            <>
              <img src={group} style={iconStyles} className={style.icon} />
            </>
            )
          : null
      }
    </div>
  )
}

export default BigInfoBox
