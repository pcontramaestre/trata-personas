import style from './HandSlide.module.css'

function convertSize (input) {
  const n = Number(input.split('px')[0])
  const r = (n * 100 / 1920) + 'vw'
  return r
}

function HandSlide ({ handSlide, totalTop }) {
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
    <div name='HandSlideContainer' className={style.HandSlideBackground} style={handSlideBackgroundStyle}>
      <div name='HandSlideContainerCards' style={handSlideContainer} className={style.HandSlideContainer}>
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
