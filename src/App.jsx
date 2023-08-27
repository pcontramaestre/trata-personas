import { useState, useEffect, useRef } from 'react'
import Header from './components/Header/Header'
import Instructions from './components/Instructions/Instructions'
import Section0 from './components/Section0/Section0'
import Section1 from './components/Section1/Section1'
import Section2 from './components/Section2/Section2'
import Section3 from './components/Section3/Section3'
import Section4 from './components/Section4/Section4'
import Section5 from './components/Section5/Section5'
import Section6 from './components/Section6/Section6'
import Section7 from './components/Section7/Section7'
import Section8 from './components/Section8/Section8'
import Section9 from './components/Section9/Section9'
// import Index from './components/Index/Index'
import menuBlancoImg from './assets/Header/menu-blanco.png'
import ToHome from './components/ToHome/ToHome'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { ScrollToPlugin } from 'gsap/ScrollToPlugin'

import './App.css'

function App () {
  const [show, setShow] = useState('instructions')

  const currentScroll = useRef(0)

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger, ScrollToPlugin)
    const containerSection = document.querySelector('#section7')
    function getScrollPosition (id) {
      const st = ScrollTrigger.create({ trigger: id, pinnedContainer: containerSection, start: 'top 38%' })
      const stStart = st.start
      st.kill()
      return stStart
    }
    if (show === '') {
      window.scrollTo(0, currentScroll.current)
    } else if (show.includes('#')) {
      const section = document.querySelector(show)
      const rect = section.getBoundingClientRect()
      const position = window.scrollY + rect.top
      // console.log('section:', section)
      // console.log(`me voy a la ${show} que esta a ${section.offsetTop}`)
      // console.log(`me voy a la ${show} que esta a ${rect.top}`)
      console.log(`me voy a la ${show} que esta a ${position}`)
      console.log(`me voy a la ${show} que esta a ${getScrollPosition(show)}`)
      // window.scrollTo(0, position)
      // window.scrollTo(0, getScrollPosition(show))
      // window.scrollTo(0, section.offsetTop)
      gsap.to(window, { scrollTo: position })
    }
  }, [show])

  function handleHeader () {
    if (show !== 'header') {
      currentScroll.current = window.scrollY
      setShow('header')
    } else {
      setShow('')
    }
  }

  function goTo () {
    const input = document.querySelector('.inputGoTo')
    const { value } = input
    console.log(value)
    window.scrollTo(0, Number(value))
  }

  function where () {
    const input = document.querySelector('.inputGoTo')
    const { value } = input
    if (!value) console.log('estoy en:', window.scrollY)
    else {
      const section = document.getElementById(value)
      const rect = section.getBoundingClientRect()
      console.log(`la ${value} esta en: ${section.offsetTop} (offsetTop)`)
      console.log(`la ${value} esta en: ${rect.top} (top)`)
    }
  }

  if (show === 'instructions') return <Instructions setShow={setShow} />
  if (show === 'header') return <Header setShow={setShow} handleHeader={handleHeader} />
  return (
    <main>
      <div className='hamburger-icon' onClick={handleHeader}>
        <img src={menuBlancoImg} alt='Menu Icon' className='hamburger-icon' />
      </div>
      <div className='buttonGo'>
        <button onClick={goTo}>Go</button>
        <input className='inputGoTo' />
        <button onClick={where}>¿Where?</button>
      </div>
      <ToHome />
      <Section0 />
      <Section1 />
      <Section2 />
      <Section3 />
      <Section4 />
      <Section5 />
      <Section6 />
      <Section7 />
      <Section8 />
      <Section9 />
      {/* <Index /> */}
    </main>
  )
}

export default App
