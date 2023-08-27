import style from './Instructions.module.css'

import data from '../../../troy.json'
import logo from '../../assets/Instructions/logo.svg'
import scroll1 from '../../assets/Instructions/scroll1.svg'
import menuBlanco from '../../assets/Instructions/menuBlanco.svg'
import audio1 from '../../assets/Instructions/audio1.svg'
import infoGifBlanco1 from '../../assets/Instructions/infoGifBlanco1.svg'
import group from '../../assets/Instructions/group.svg'
import home from '../../assets/Instructions/home.svg'

const icons = {
  scroll1,
  menuBlanco,
  audio1,
  infoGifBlanco1,
  group,
  home
}

const { title, items, button, text } = data.InstructionsPage

function convertSize (input) {
  const n = Number(input.split('px')[0])
  return (n * 100 / 1920) + 'vw'
}

function Instructions ({ setShow }) {
  function handleInstruction () {
    setShow('')
  }

  const logoStyles = {
    ...data.InstructionsPage.logo,
    width: convertSize(data.InstructionsPage.logo.width),
    height: convertSize(data.InstructionsPage.logo.height),
    top: convertSize(data.InstructionsPage.logo.top),
    left: convertSize(data.InstructionsPage.logo.left)
  }

  const titleStyles = {
    ...title,
    text: '',
    width: convertSize(title.width),
    height: convertSize(title.height),
    top: convertSize(title.top),
    lineHeight: convertSize(title.lineHeight),
    fontSize: convertSize(title.fontSize)
  }

  const textStyle = {
    ...text,
    fontSize: convertSize(text.fontSize),
    lineHeight: convertSize(text.lineHeight),
    marginTop: convertSize('24px')
  }

  const buttonStyles = {
    ...button,
    content: '',
    width: convertSize(button.width),
    height: convertSize(button.height),
    lineHeight: convertSize(button.lineHeight),
    fontSize: convertSize(button.fontSize)
  }

  return (
    <section id='InstructionsBackground' className={style.InstructionsBackground}>
      <img src={logo} style={logoStyles} />
      <main className={style.InstructionsContainer}>
        <h1 style={titleStyles}>{title.text}</h1>
        <div className={style.InstructionsCardsContainer}>
          {
          items.map((item, index) => (
            <Card key={index} text={item.text} icon={item.icon} textStyle={textStyle} />
          ))
        }
        </div>
        <button onClick={handleInstruction} style={buttonStyles}><label>{button.content}</label></button>
      </main>
    </section>
  )
}

function Card ({ icon, text, textStyle }) {
  const styleIcon = {
    width: convertSize(icon.size.width)
  }
  const styleText = {
    ...textStyle,
    width: convertSize(text.size.width)
  }

  return (
    <div className={style.InstructionsCard}>
      <img src={(icon && icons[icon.name]) || ''} style={styleIcon} className={icon.name === 'scroll1' ? style.scroll : icon.name === 'infoGifBlanco1' ? style.infoGifBlanco : null} />
      <p style={styleText}>{(text && text.content) || ''}</p>
    </div>
  )
}

export default Instructions
