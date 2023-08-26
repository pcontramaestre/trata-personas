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

import './App.css'

function App () {
  const [show, setShow] = useState('instructions')

  const currentScroll = useRef(0)

  useEffect(() => {
    if (show === '') {
      window.scrollTo(0, currentScroll.current)
    } else if (show.includes('#')) {
      const section = document.querySelector(show)
      const rect = section.getBoundingClientRect()
      const positon = window.scrollY + rect.top
      window.scrollTo(0, positon)
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

  if (show === 'instructions') return <Instructions setShow={setShow} />
  if (show === 'header') return <Header setShow={setShow} handleHeader={handleHeader} />
  return (
    <main>
      <div className='hamburger-icon' onClick={handleHeader}>
        <img src={menuBlancoImg} alt='Menu Icon' className='hamburger-icon' />
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
