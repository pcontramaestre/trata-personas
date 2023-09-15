import { useEffect } from 'react'

import './Video.css'
import x from '../../assets/Video/X.png'

function Video({close, name}) {

    const videos = {
        Pablo: 'https://drive.google.com/file/d/1LUtNv4tjpXzzQHlJMsykuqBPGhEO2z6m/preview',
        ['José']: 'https://drive.google.com/file/d/14-fMEFiQ5ufGzlwkrRtvifXonIODy_-F/preview'
    }

    useEffect(() => {
        const html = document.querySelector('html')
        html.style.overflow = 'hidden'
        return () => {
            html.style.overflow = ''
        }
    })

    return (
        <article className='video_container'>
            <h1 className='title_video'>{name}</h1>
            <iframe src={videos[name]} className='video_screen' allow="autoplay"></iframe>
            <button className='button_close_video' onClick={() => close()} ><img src={x} /></button>
        </article>
    )
}

export default Video