import NoteBook from '../NoteBook/NoteBook'
import News from '../News/News'
import Map from '../Map/Map'
import BigInfoBox from '../BigInfoBox/BigInfoBox'

import style from './Section0.module.css'

import logo from '../../assets/Instructions/logo.svg'
import scroll from '../../assets/Instructions/scroll1.svg'
import group from '../../assets/Instructions/group.svg'
import audio1 from '../../assets/Instructions/audio1.svg'
import background from '../../assets/Section0/frontPageBackground.png'
import people from '../../assets/Section0/frontPagePeopleBehind.png'
import person from '../../assets/Section0/frontPagePersonAhead.png'
import puppet from '../../assets/Section0/frontPagePuppet.png'

import data from '../../../troy.json'

const icons = {
  logo,
  scroll,
  group,
  audio1,
  background,
  people,
  person,
  puppet
}

const { homeHeader } = data
const { noteBook, news, map, bigInfoBox } = data.homeHeader

function convertSize (input) {
  const n = Number(input.split('px')[0])
  return (n * 100 / 1920) + 'vw'
}

function Section0 () {
  const homeHeaderContainer = {
    height: convertSize(homeHeader.size.height)
  }

  const textStyles = homeHeader.text.map((texto, index) => ({
    ...texto,
    top: convertSize(texto.top),
    left: convertSize(texto.left),
    width: convertSize(texto.width),
    height: convertSize(texto.height),
    fontSize: convertSize(texto.fontSize),
    lineHeight: texto.lineHeight && convertSize(texto.lineHeight)
  }))

  const iconStyles = homeHeader.images.map(icon => ({
    ...icon,
    top: convertSize(icon.top),
    left: convertSize(icon.left),
    width: convertSize(icon.width),
    height: convertSize(icon.height)
  }))

  const blockFooterStyle = {
    height: convertSize('634px'),
    top: convertSize('5503px')
  }

  return (
    <section id='section0' className={style.HomeHeaderBackground} style={homeHeaderContainer}>
      {
        homeHeader.images.map((image, index) => (
          <img src={image && icons[image.name]} className={image.name === 'scroll' ? style.scroll : style.HomeHeaderImages} style={iconStyles[index]} key={image.name + index} />
        ))
      }
      {
        homeHeader.text.map((texto, index) => {
          switch (texto.tag) {
            case 'h1': {
              return <h1 className={style.HomeHeaderText} style={textStyles[index]} key={index}>{texto.content}</h1>
            }
            case 'h2': {
              return <h2 className={style.HomeHeaderText} style={textStyles[index]} key={index}>{texto.content}</h2>
            }
            case 'p': {
              return <p dangerouslySetInnerHTML={{ __html: texto.content }} className={style.HomeHeaderText} style={textStyles[index]} key={index} />
            }
          }
          return true
        })
      }
      <NoteBook noteBook={noteBook} />
      <News news={news} />
      <Map map={map} />
      <BigInfoBox bigInfoBox={bigInfoBox} />
      <div className={style.HomeHeaderBlockFooter} style={blockFooterStyle} />
    </section>
  )
}

export default Section0
