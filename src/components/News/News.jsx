import { useLayoutEffect, useState } from 'react'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

import style from './News.module.css'

import group from '../../assets/Instructions/group.svg'
import sheetL from '/News/sheetL.png'
import sheetM from '/News/sheetM.png'
import sheetS from '/News/sheetS.png'

gsap.registerPlugin(ScrollTrigger)

const sheets = {
  sheetL,
  sheetM,
  sheetS
}

function convertSize (input) {
  const n = Number(input.split('px')[0])
  return (n * 100 / 1920) + 'vw'
}

function News ({ news, topSection }) {
  if (!news) return null

  const [statusSheet, setStatusSheet] = useState(() => {
    return news.articles.map((article, index) => ({
      position: index,
      value: false
    }))
  })

  // Efecto de entrada de las cartas
  useLayoutEffect(() => {
    const containerAnimation = document.getElementsByName('news' + news.section)[0]
    const elementToMove = document.getElementsByName('cardNews' + news.section)

    const scrollTriggerBehind1 = news.scrollTriggerBehind && news.scrollTriggerBehind[0] ? ScrollTrigger.getById(news.scrollTriggerBehind[0]) : { start: 0 }
    const scrollTriggerBehind2 = news.scrollTriggerBehind && news.scrollTriggerBehind[1] ? ScrollTrigger.getById(news.scrollTriggerBehind[1]) : { end: 0 }

    const ctx = gsap.context(() => {
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: containerAnimation,
          // markers: true,
          start: () => {
            if (news.scrollTriggerBehind) {
              return scrollTriggerBehind2.end - scrollTriggerBehind1.start + ' 80%'
            }
            return 'top 90%'
          },
          end: () => {
            return (scrollTriggerBehind2.end - scrollTriggerBehind1.start) + ' 20%'
          },
          scrub: true
        }
      })

      elementToMove.forEach((elemento) => {
        tl.from(elemento, { x: `${window.innerWidth}` })
      })
    })

    return () => ctx.revert()
  }, [])

  function activeSheet (position) {
    const newStatusSheet = [...statusSheet]
    newStatusSheet[position].value = true
    setStatusSheet(newStatusSheet)
  }

  function desactiveSheet (position) {
    const newStatusSheet = [...statusSheet]
    newStatusSheet[position].value = false
    setStatusSheet(newStatusSheet)
  }

  const totalHeight = news.articles.reduce((acc, curr) => Number(acc.split('px')[0]) < Number(curr.position.top.split('px')[0]) ? acc : curr.position.top, news.articles[0].position.top)

  const newsBackgroundContainer = {
    top: topSection ? convertSize(Number(totalHeight.split('px')[0]) - Number(topSection.split('px')[0]) + 'px') : convertSize(totalHeight)
  }

  return (
    <div name={'news' + news.section} id='NewsBackground' className={style.NewsBackground} style={newsBackgroundContainer}>
      {
        news.articles.map((article, index) => (
          <div key={index}>
            <Card activeSheet={activeSheet} index={index} section={news.section} article={article} key={index} totalHeight={totalHeight} footer={news.footerCard} title={news.titleStyles} />
            {
              statusSheet[index].value ? <SheetNews status={statusSheet[index]} desactiveSheet={desactiveSheet} hover={article.hover} title={news.titleStylesHover} text={news.textStylesHover} footer={news.footerStyleHover} icon={news.footerIconHover} /> : null
            }
          </div>
        ))
      }
    </div>
  )
}

function Card ({ article, totalHeight, footer, title, section, activeSheet, index }) {
  const width = convertSize(article.size.width)
  const height = convertSize(article.size.height)
  const top = convertSize((Number(article.position.top.split('px')[0]) - Number(totalHeight.split('px')[0]) + 'px'))
  const left = convertSize(article.position.left)

  const articleStyle = {
    width,
    height,
    top,
    left,
    transform: `rotateZ(${-Number(article.position.rotation.split('deg')[0])}deg)`
  }

  const titleStyle = {
    ...title,
    width: convertSize(article.title.width),
    height: convertSize(article.title.height),
    top: ((Number(article.title.top.split('px')[0]) - Number(article.position.top.split('px')[0])) * 100 / (Number(article.size.height.split('px')[0]) * Math.cos(-Number(article.position.rotation.split('deg')[0]) * (Math.PI / 180)))) + '%',
    fontSize: convertSize(title.fontSize),
    lineHeight: convertSize(title.lineHeight)
  }

  const footerStyle = {
    ...footer,
    fontSize: convertSize(footer.fontSize),
    lineHeight: convertSize(footer.lineHeight),
    top: convertSize('335px'),
    left: convertSize('60px')
  }

  return (
    <div onMouseEnter={() => (activeSheet(index))} name={'cardNews' + section} className={style.NewsArticle} style={articleStyle}>
      <p dangerouslySetInnerHTML={{ __html: article.title.text }} style={titleStyle} />
      <label style={footerStyle}>{article.footer.text}</label>
    </div>
  )
}

function SheetNews ({ hover, title, text, footer, icon, desactiveSheet, status }) {
  const sheetStyles = {
    width: convertSize(hover.width),
    height: convertSize(hover.height),
    top: convertSize(hover.top),
    left: convertSize(hover.left),
    backgroundImage: `url(${sheets[hover.backgroundImage]})`
  }

  const titleStyle = {
    ...title,
    width: convertSize(hover.title.width),
    height: convertSize(hover.title.height),
    top: convertSize(hover.title.top),
    left: convertSize(hover.title.left),
    fontSize: convertSize(title.fontSize),
    lineHeight: convertSize(title.lineHeight)
  }

  const textStyle = {
    ...text,
    width: convertSize(hover.text.width),
    height: convertSize(hover.text.height),
    top: convertSize(hover.text.top),
    left: convertSize(hover.text.left),
    fontSize: convertSize(text.fontSize),
    lineHeight: convertSize(text.lineHeight)
  }

  const footerStyle = {
    ...footer,
    width: convertSize(hover.footer.width),
    height: convertSize(hover.footer.height),
    top: convertSize(hover.footer.top),
    left: convertSize(hover.footer.left),
    fontSize: convertSize(footer.fontSize),
    lineHeight: convertSize(footer.lineHeight)
  }

  const linkStyles = {
    ...footer,
    fontSize: convertSize(footer.fontSize),
    lineHeight: convertSize(footer.lineHeight),
    color: footer.color2
  }

  const iconStyles = {
    ...icon,
    width: convertSize(icon.width),
    height: convertSize(icon.height)
  }

  const footerStyles = {
    top: convertSize(hover.footer.top),
    left: convertSize(hover.footer.left)
  }

  return (
    <div style={sheetStyles} className={style.NewsArticleHover} onMouseLeave={() => { desactiveSheet(status.position) }}>
      <h1 style={titleStyle} className={style.titleIntoArticle}>{hover.title.content}</h1>
      <div className={style.vector} />
      <p dangerouslySetInnerHTML={{ __html: hover.text.content }} style={textStyle} className={style.IntoArticle} />
      <footer style={footerStyles} className={style.footerContainer}>
        <label style={footerStyle} className={style.IntoArticle}>{hover.footer.content}</label>
        <a href={hover.link} target='_blank' className={style.articleFooter} style={linkStyles} rel='noreferrer'><img src={group} style={iconStyles} /> CONSULTA LA NOTICIA COMPLETA</a>
      </footer>
    </div>
  )
}

export default News
