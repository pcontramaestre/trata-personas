import style from './Instructions.module.css'

import data from '../../../troy.json'
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

const { title, items, button } = data.InstructionsPage

function convertSize (input) {
  const n = Number(input.split('px')[0])
  return (n * 100 / 1920) + 'vw'
}

function Instructions ({ setShowInstructions }) {
  function handleInstruction () {
    setShowInstructions(false)
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
      <main className={style.InstructionsContainer}>
        <h1 style={titleStyles}>{title.text}</h1>
        <div className={style.InstructionsCardsContainer}>
          {
          items.map((item, index) => (
            <Card key={index} text={item.text} icon={item.icon} />
          ))
        }
        </div>
        <button onClick={handleInstruction} style={buttonStyles}>{button.content}</button>
      </main>
    </section>
  )
}

function Card ({ icon, text, n }) {
  const styleIcon = {
    width: convertSize(icon.size.width)
  }
  const styleText = {
    width: convertSize(text.size.width),
    fontSize: convertSize(text.fontSize),
    lineHeight: convertSize(text.lineHeight)
  }

  return (
    <div className={style.InstructionsCard}>
      <img src={(icon && icons[icon.name]) || ''} style={styleIcon} />
      <p style={styleText}>{(text && text.content) || ''}</p>
    </div>
  )
}

export default Instructions
