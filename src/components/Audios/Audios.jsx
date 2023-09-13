import { useRef, useEffect, useLayoutEffect, useState } from 'react'
import gsap from 'gsap'
import ScrollTrigger from 'gsap/ScrollTrigger'

import style from './Audios.module.css'

import audio1Section0 from '/audio/Section0/section0.mp3'
import audio1Section3 from '/audio/Section3/Naciones-Unidas-Plano-voz-2.mp3'

import audio from '../../assets/Instructions/audio1.png'
import audioMute from '../../assets/Section0/audioMute.png'

gsap.registerPlugin(ScrollTrigger)

function convertSize (input) {
    const n = Number(input.split('px')[0])
    return (n * 100 / 1920) + 'vw'
  }

function Audios () {

    const [audioPlaying, setAudioPlaying] = useState({
        audio1_0: false,
        audio1_3: false
    })
    const audio1_0 = useRef()
    const audio1_3 = useRef()
    const firstTimeuseEffect = useRef(true)
    const autoPlay = useRef(true)

    const audios = {
        audio1_0,
        audio1_3
    }

    useLayoutEffect(() => {
        const ctx = gsap.context(() => {
            gsap.to(`.${style.audio1_0}`, {
                y: -window.innerHeight,
                opacity: 0,
                scrollTrigger: {
                    trigger: '#section3',
                    markers: true,
                    start: 'top bottom',
                    end: 'top top',
                    scrub: 1,
                    onEnter: () => stopAudio('audio1_0', true)
                }
            })
            gsap.from(`.${style.audio1_3}`, {
                y: window.innerHeight,
                opacity: 0,
                scrollTrigger: {
                    trigger: '#section3',
                    markers: true,
                    start: 'top bottom',
                    end: 'top top',
                    scrub: 1,
                    onLeave: () => {
                        if (autoPlay) {
                            playAudio('audio1_3')
                            autoPlay.current = false
                        }
                    }
                }
            })
        })
        return () => ctx.revert()
    }, [])
    
      useEffect(() => {
        if (firstTimeuseEffect.current) {
            firstTimeuseEffect.current = false
            playAudio('audio1_0')
        }
      },[])
    
      function setAudio(event) {
        const name = event ? event.target.name : null
        if (audios[name].current.paused) {
          playAudio(name)
        } else {
          stopAudio(name)
        }
      }
    
      function playAudio(name) {
        audios[name].current.play()
        setAudioPlaying(audioPlaying => ({
            ...audioPlaying,
            [name]: true
        }))
      }
    
      function stopAudio(name, stop) {
        audios[name].current.pause()
        setAudioPlaying(audioPlaying => ({
            ...audioPlaying,
            [name]: false
        }))
        if (stop) audios[name].current.currentTime = 0
      }

    return (
        <article>
            <img onClick={setAudio} name='audio1_0' src={audioPlaying.audio1_0 ? audio : audioMute} className={`${style.audio} ${style.audio1_0}`}></img>
            <img onClick={setAudio} name='audio1_3' src={audioPlaying.audio1_3 ? audio : audioMute} className={`${style.audio} ${style.audio1_3}`}></img>
            <audio id='audio1section0' src={audio1Section0} ref={audio1_0}></audio>
            <audio id='audio1section3' src={audio1Section3} ref={audio1_3}></audio>
        </article>
    )
}

export default Audios