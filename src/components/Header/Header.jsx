// import React, { useState, useEffect } from 'react'
import './Header.css'
import data from '../../../trataHeader.json'
import header1 from '../../assets/Header/header-1.jpg'
import header2 from '../../assets/Header/header-2.jpg'
import header3 from '../../assets/Header/header-3.jpg'
import header4 from '../../assets/Header/header-4.jpg'
import header5 from '../../assets/Header/header-5.jpg'
import header6 from '../../assets/Header/header-6.jpg'
import header7 from '../../assets/Header/header-7.jpg'
import header8 from '../../assets/Header/header-8.jpg'
import header9 from '../../assets/Header/header-9.jpg'
import menuBlancoImg from '../../assets/Header/menu-blanco.png'

function Header ({ setShow, handleHeader }) {
  // const [menuOpen, setMenuOpen] = useState(false)
  // const [fixedPosition, setFixedPosition] = useState(true);

  // const toggleMenu = () => {
  //   setMenuOpen(!menuOpen)
  // }

  const page1 = data[0].header.page1
  return (
    <>
      <div className='hamburger-icon' onClick={handleHeader}>
        <img src={menuBlancoImg} alt='Menu Icon' className='hamburger-icon' />
      </div>
      <div className='menu-expanded'>
        <section className='header-container'>
          <div className='header-container_img'>
            <div className='header-text'>
              <a onClick={() => { setShow('#section1') }}>
                <img src={header1} alt='' />
                <div className='text'>{page1.text1}</div>
              </a>
            </div>
            <div className='header-text'>
              <a onClick={() => { setShow('#section2') }}>
                <img src={header2} alt='' />
                <div className='text'>{page1.text2}</div>
              </a>
            </div>
            <div className='header-text'>
              <a onClick={() => { setShow('#section3') }}>
                <img src={header3} alt='' />
                <div className='text'>{page1.text3}</div>
              </a>
            </div>
          </div>
          <div className='header-container_img'>
            <div className='header-text'>
              <a onClick={() => { setShow('#section4') }}>
                <img src={header4} alt='' />
                <div className='text'>{page1.text4}</div>
              </a>
            </div>
            <div className='header-text'>
              <a onClick={() => { setShow('#section5') }}>
                <img src={header5} alt='' />
                <div className='text'>{page1.text5}</div>
              </a>
            </div>
            <div className='header-text'>
              <a onClick={() => { setShow('#section6') }}>
                <img src={header6} alt='' />
                <div className='text'>{page1.text6}</div>
              </a>
            </div>
          </div>
          <div className='header-container_img'>
            <div className='header-text'>
              <a onClick={() => { setShow('#section7') }}>
                <img src={header7} alt='' />
                <div className='text'>{page1.text7}</div>
              </a>
            </div>
            <div className='header-text'>
              <a onClick={() => { setShow('#section8') }}>
                <img src={header8} alt='' />
                <div className='text'>{page1.text8}</div>
              </a>
            </div>
            <div className='header-text'>
              <a onClick={() => { setShow('#section9') }}>
                <img src={header9} alt='' />
                <div className='text'>{page1.text9}</div>
              </a>
            </div>
          </div>
        </section>
      </div>
    </>
  )
}

export default Header
