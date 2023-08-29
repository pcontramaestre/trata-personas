import { useState, useLayoutEffect, useEffect, useRef } from 'react'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

import style from './NoteBook.module.css'

import whiteSheet from "../../assets/NoteBook/whiteSheet.png";
import whiteSheetShort from "../../assets/NoteBook/whiteSheetShort.png";

gsap.registerPlugin(ScrollTrigger)

const whiteSheets = {
  whiteSheet,
  whiteSheetShort,
};

function convertSize(input) {
  const n = Number(input.split("px")[0]);
  return (n * 100) / 1920 + "vw";
}

function convertAngle(input) {
  const n = Number(input.split("deg")[0]);
  return n * (Math.PI / 180);
}

function NoteBook ({ noteBook, topSection }) {
  if (!noteBook) return

  const [texts, setTexts] = useState({
    paragraph: noteBook.text.paragraph.map(() => ''),
    title: noteBook.text.title.map(() => ''),
    footer: ['']
  })
  const [currentText, setCurrentText] = useState({
    paragraph: '',
    title: '',
    footer: ''
  })
  const [currentIndex, setCurrentIndex] = useState({
    paragraph: 0,
    title: 0,
    footer: 0
  })
  const [activeAnimation, setActiveAnimation] = useState({
    paragraph: false,
    title: false,
    footer: false
  })

  const listOrderOfText = useRef(listTextToWrite())
  const indexOrder = useRef({
    paragraph: 0,
    title: 0
  })

  // Animation paragraph
  useEffect(() => {
    if (activeAnimation.paragraph && (currentIndex.paragraph < listOrderOfText.current.paragraph[indexOrder.current.paragraph].content.length)) {
      const timeout = setTimeout(() => {
        setCurrentText(prevText => ({
          ...prevText,
          paragraph: prevText.paragraph + listOrderOfText.current.paragraph[indexOrder.current.paragraph].content[currentIndex.paragraph]
        }))
        setCurrentIndex(prevIndex => ({
          ...prevIndex,
          paragraph: prevIndex.paragraph + 1
        }))
        const newTexts = {
          ...texts
        }
        newTexts.paragraph[indexOrder.current.paragraph] = currentText.paragraph + listOrderOfText.current.paragraph[indexOrder.current.paragraph].content[currentIndex.paragraph]
        setTexts(newTexts)
      }, 10)
      return () => { clearTimeout(timeout) }
    } else if (activeAnimation.paragraph && (currentIndex.paragraph === listOrderOfText.current.paragraph[indexOrder.current.paragraph].content.length)) {
      setCurrentText(prevText => ({
        ...prevText,
        paragraph: ''
      }))
      setCurrentIndex(prevText => ({
        ...prevText,
        paragraph: 0
      }))
      indexOrder.current.paragraph = indexOrder.current.paragraph + 1
      if (indexOrder.current.paragraph < listOrderOfText.current.paragraph.length) {
        for (let i = 0; i < texts.paragraph.length; i++) {
          if (!texts.paragraph[i].length) {
            indexOrder.current.paragraph = i
            break
          }
        }
      } else {
        setActiveAnimation(prevActivated => ({
          ...prevActivated,
          paragraph: !prevActivated.paragraph
        }))
      }
    }
  }, [currentText.paragraph, activeAnimation.paragraph])

  // Animation title
  useEffect(() => {
    if (activeAnimation.title && (currentIndex.title < listOrderOfText.current.title[indexOrder.current.title].content.length)) {
      const timeout = setTimeout(() => {
        setCurrentText(prevText => ({
          ...prevText,
          title: prevText.title + listOrderOfText.current.title[indexOrder.current.title].content[currentIndex.title]
        }))
        setCurrentIndex(prevIndex => ({
          ...prevIndex,
          title: prevIndex.title + 1
        }))
        const newTexts = {
          ...texts
        }
        newTexts.title[indexOrder.current.title] = currentText.title + listOrderOfText.current.title[indexOrder.current.title].content[currentIndex.title]
        setTexts(newTexts)
      }, 10)
      return () => { clearTimeout(timeout) }
    } else if (activeAnimation.title && (currentIndex.title === listOrderOfText.current.title[indexOrder.current.title].content.length)) {
      setCurrentText(prevText => ({
        ...prevText,
        title: ''
      }))
      setCurrentIndex(prevText => ({
        ...prevText,
        title: 0
      }))
      indexOrder.current.title = indexOrder.current.title + 1
      if (indexOrder.current.title < listOrderOfText.current.title.length) {
        for (let i = 0; i < texts.title.length; i++) {
          if (!texts.title[i].length) {
            indexOrder.current.title = i
            break
          }
        }
      } else {
        setActiveAnimation(prevActivated => ({
          ...prevActivated,
          title: !prevActivated.title
        }))
      }
    }
  }, [currentText.title, activeAnimation.title])

  // Animation footer
  useEffect(() => {
    if (activeAnimation.footer && (currentIndex.footer < noteBook.text.footer.content.length)) {
      const timeout = setTimeout(() => {
        setCurrentText(prevText => ({
          ...prevText,
          footer: prevText.footer + noteBook.text.footer.content[currentIndex.footer]
        }))
        setCurrentIndex(prevIndex => ({
          ...prevIndex,
          footer: prevIndex.footer + 1
        }))
        const newTexts = {
          ...texts
        }
        newTexts.footer[0] = currentText.footer + noteBook.text.footer.content[currentIndex.footer]
        setTexts(newTexts)
      }, 10)
      return () => { clearTimeout(timeout) }
    }
  }, [currentText.footer, activeAnimation.footer])

  useLayoutEffect(() => {
    const containerAnimation = document.getElementsByName('noteBook' + noteBook.section)[0]

    const ctx = gsap.context(() => {
      ScrollTrigger.create({
        trigger: containerAnimation,
        // markers: true,
        start: 'top 90%',
        onEnter: () => {
          setActiveAnimation({
            paragraph: true,
            title: true,
            footer: true
          })
        }
      })
    })

    return () => ctx.revert()
  }, [])

  const whiteSheetStyle = {
    top: convertSize(
      topSection
        ? Number(noteBook.top.split("px")[0]) -
            Number(topSection.split("px")[0]) +
            "px"
        : noteBook.top
    ),
    left: convertSize(noteBook.left),
    width: convertSize(noteBook.width),
    height: convertSize(noteBook.height),
    backgroundImage: `url(${
      noteBook.backgroundImage
        ? whiteSheets[noteBook.backgroundImage]
        : whiteSheets.whiteSheet
    })`,
    transform: `rotateZ(${-Number(noteBook.rotation.split("deg")[0])}deg)`,
  };

  const contentStyle = noteBook.text.paragraph.sort((a, b) => a.positionContent - b.positionContent).map(paragraph => ({
    ...noteBook.text.paragraphStyles,
    content: "",
    width: convertSize(paragraph.width),
    height: convertSize(paragraph.height),
    top: convertSize(
      (Number(paragraph.top.split("px")[0]) -
        Number(noteBook.top.split("px")[0])) /
        Math.cos(convertAngle(noteBook.rotation)) +
        "px"
    ),
    left: convertSize("160px"),
    fontSize: convertSize(noteBook.text.paragraphStyles.fontSize),
    lineHeight: convertSize(noteBook.text.paragraphStyles.lineHeight),
  }));

  const titleStyle = noteBook.text.title.sort((a, b) => a.positionContent - b.positionContent).map(title => ({
    ...noteBook.text.titleStyles,
    width: convertSize(title.width),
    height: convertSize(title.height),
    top: convertSize(
      (Number(title.top.split("px")[0]) - Number(noteBook.top.split("px")[0])) /
        Math.cos(convertAngle(noteBook.rotation)) +
        "px"
    ),
    left: convertSize("160px"),
    fontSize: convertSize(noteBook.text.titleStyles.fontSize),
    lineHeight: convertSize(noteBook.text.titleStyles.lineHeight),
  }));

  const footerStyle = {
    ...noteBook.text.footer,
    width: convertSize(noteBook.text.footer.width),
    height: convertSize(noteBook.text.footer.height),
    top: convertSize(
      (Number(noteBook.text.footer.top.split("px")[0]) -
        Number(noteBook.top.split("px")[0])) /
        Math.cos(convertAngle(noteBook.rotation)) +
        "px"
    ),
    left: convertSize("160px"),
    fontSize: convertSize(noteBook.text.footer.fontSize),
  };

  function listTextToWrite () {
    const objectTexts = {
      paragraph: noteBook.text.paragraph.map(content => content),
      title: noteBook.text.title.map(title => title)
    }
    objectTexts.paragraph.sort((a, b) => a.positionContent - b.positionContent)
    objectTexts.title.sort((a, b) => a.positionContent - b.positionContent)

    return objectTexts
  }

  return (
    <article name={'noteBook' + noteBook.section} className={style.NoteBook} style={whiteSheetStyle}>
      {
          texts.paragraph.map((paragraph, index) => (
            <p name={'noteBookText' + noteBook.section} className={style.NoteBookText} style={contentStyle[index]} dangerouslySetInnerHTML={{ __html: paragraph }} key={index} />
          ))
        }
      {
          noteBook.text.title.map((title, index) => (
            <h1 name={'noteBookText' + noteBook.section} className={style.NoteBookText} style={titleStyle[index]} key={index}>{texts && texts.title ? texts.title[index] : ''}</h1>
          ))
        }
      <footer name={'noteBookText' + noteBook.section} className={style.NoteBookText} style={footerStyle}>{texts && texts.footer ? texts.footer : ''}</footer>
    </article>
  );
}

export default NoteBook;
