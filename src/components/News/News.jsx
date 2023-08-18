import style from './News.module.css'

import group from '../../assets/Instructions/group.svg'

function convertSize (input) {
  const n = Number(input.split('px')[0])
  return (n * 100 / 1920) + 'vw'
}

function News ({ news }) {
  if (!news) return null

  const totalHeight = news.articles.reduce((acc, curr) => Number(acc.split('px')[0]) < Number(curr.position.top.split('px')[0]) ? acc : curr.position.top, news.articles[0].position.top)

  const newsBackgroundContainer = {
    top: convertSize(totalHeight)
  }

  return (
    <div id='NewsBackground' className={style.NewsBackground} style={newsBackgroundContainer}>
      {
        news.articles.map((article, index) => (
          <div key={index}>
            <Card article={article} key={index} totalHeight={totalHeight} />
            <SheetNews hover={article.hover} footer={news.footer} icon={news.footerIcon} />
          </div>
        ))
      }
    </div>
  )
}

function Card ({ article, totalHeight }) {
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
    width: convertSize(article.title.width),
    height: convertSize(article.title.height),
    top: ((Number(article.title.top.split('px')[0]) - Number(article.position.top.split('px')[0])) * 100 / (Number(article.size.height.split('px')[0]) * Math.cos(-Number(article.position.rotation.split('deg')[0]) * (Math.PI / 180)))) + '%',
    fontSize: convertSize(article.title.fontSize)
  }

  const footerStyle = {
    fontSize: convertSize(article.footer.fontSize)
  }

  return (
    <div className={style.NewsArticle} style={articleStyle}>
      <p style={titleStyle}>{article.title.text}</p>
      <footer style={footerStyle}>{article.footer.text}</footer>
    </div>
  )
}

function SheetNews ({ hover, footer, icon }) {
  const sheetStyles = {
    width: convertSize(hover.width),
    height: convertSize(hover.height),
    top: convertSize(hover.top),
    left: convertSize(hover.left),
    backgroundImage: `url("./src/assets/News/${hover.backgroundImage}.png")`
  }

  const titleStyle = {
    ...hover.title,
    width: convertSize(hover.title.width),
    height: convertSize(hover.title.height),
    top: convertSize(hover.title.top),
    left: convertSize(hover.title.left),
    fontSize: convertSize(hover.title.fontSize),
    lineHeight: convertSize(hover.title.lineHeight)
  }

  const textStyle = {
    ...hover.text,
    width: convertSize(hover.text.width),
    height: convertSize(hover.text.height),
    top: convertSize(hover.text.top),
    left: convertSize(hover.text.left),
    fontSize: convertSize(hover.text.fontSize),
    lineHeight: convertSize(hover.text.lineHeight)
  }

  const footerStyle = {
    ...hover.footer,
    width: convertSize(hover.footer.width),
    height: convertSize(hover.footer.height),
    top: convertSize(hover.footer.top),
    left: convertSize(hover.footer.left),
    fontSize: convertSize(hover.footer.fontSize),
    lineHeight: convertSize(hover.footer.lineHeight)
  }

  const linkStyles = {
    ...footer,
    fontSize: convertSize(footer.fontSize),
    lineHeight: convertSize(footer.lineHeight)
  }

  const iconStyles = {
    ...icon,
    width: convertSize(icon.width),
    height: convertSize(icon.height)
  }

  return (
    <div style={sheetStyles} className={hover.especial ? style.especial : style.NewsArticleHover}>
      <h1 style={titleStyle} className={style.titleIntoArticle}>{hover.title.content}</h1>
      <div className={style.vector} />
      <p dangerouslySetInnerHTML={{ __html: hover.text.content }} style={textStyle} className={style.IntoArticle} />
      <label style={footerStyle} className={style.IntoArticle}>{hover.footer.content}</label>
      <footer><a href={hover.link} className={style.articleFooter} style={linkStyles}><img src={group} style={iconStyles} /> CONSULTA LA NOTICIA COMPLETA</a></footer>
    </div>
  )
}

export default News
