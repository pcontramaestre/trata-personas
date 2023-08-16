import style from './News.module.css'

function convertSize (input) {
  const n = Number(input.split('px')[0])
  return (n * 100 / 1920) + 'vw'
}

function News ({ news }) {
  if (!news) return null
  const totalHeight = news.reduce((acc, curr) => Number(acc.split('px')[0]) < Number(curr.position.top.split('px')[0]) ? acc : curr.position.top, news[0].position.top)
  const newsBackgroundContainer = {
    top: convertSize(totalHeight)
  }
  return (
    <div id='NewsBackground' className={style.NewsBackground} style={newsBackgroundContainer}>
      {
        news.map((article, index) => (
          <Card article={article} key={index} totalHeight={totalHeight} />
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

export default News
