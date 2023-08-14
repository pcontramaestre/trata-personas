import style from './Instructions.module.css'

import data from '../../../troy.json'
import scroll1 from '../../assets/Instructions/scroll1.svg'
import menuBlanco from '../../assets/Instructions/menuBlanco.svg'
import audio1 from '../../assets/Instructions/audio1.svg'
import infoGifBlanco1 from '../../assets/Instructions/infoGifBlanco1.svg'
import group from '../../assets/Instructions/group.svg'
import home from '../../assets/Instructions/home.svg'
import { useEffect, useState } from 'react'

const icons = {
  scroll1,
  menuBlanco,
  audio1,
  infoGifBlanco1,
  group,
  home
}

function Instructions ({ setShowInstructions }) {
  const [conversionFactor, setConversionFactor] = useState(1)

  useEffect(() => {
    const section = document.getElementById('InstructionsBackground')
    setConversionFactor(Number(section.offsetWidth / 1920))
  }, [])

  function handleInstruction () {
    setShowInstructions(false)
  }

  const buttonStyles = {
    width: (Number(data[0].InstructionsPage.button.size.width) * conversionFactor) + 'px',
    height: (Number(data[0].InstructionsPage.button.size.height) * conversionFactor) + 'px',
    fontSize: (Number(data[0].InstructionsPage.button.text['font-size']) * conversionFactor) + 'px',
    lineHeight: 2
  }

  return (
    <section id='InstructionsBackground' className={style.InstructionsBackground}>
      <main className={style.InstructionsContainer}>
        <h1 style={{ fontSize: 70 * conversionFactor }}>{data[0].InstructionsPage.title}</h1>
        <div className={style.InstructionsCardsContainer}>
          {
          data[0].InstructionsPage.items.map((item, index) => (
            <Card key={index} text={item.text} icon={item.icon} n={conversionFactor} />
          ))
        }
        </div>
        <button onClick={handleInstruction} style={buttonStyles}>{data[0].InstructionsPage.button.text.content}</button>
      </main>
    </section>
  )
}

function Card ({ icon, text, n }) {
  const styleIcon = {
    width: (icon && (Number(icon.size.width) * n) + 'px') || 'auto'

  }
  const styleText = {
    width: (text && (Number(text.size.width) * n) + 'px') || 'auto',
    fontSize: 20 * n + 'px',
    lineHeight: 24.2 * n + 'px'
  }

  return (
    <div className={style.InstructionsCard}>
      <img src={(icon && icons[icon.name]) || ''} style={styleIcon} />
      <p style={styleText}>{(text && text.content) || ''}</p>
    </div>
  )
}

export default Instructions
