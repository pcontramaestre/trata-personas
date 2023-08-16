import style from './NoteBook.module.css'

function convertSize (input) {
  const n = Number(input.split('px')[0])
  return (n * 100 / 1920) + 'vw'
}

function NoteBook ({ noteBook }) {
  if (!noteBook) return null

  const whiteSheetStyle = {
    top: convertSize(noteBook.position.top),
    left: convertSize(noteBook.position.left),
    width: convertSize(noteBook.size.width),
    height: convertSize(noteBook.size.height),
    transform: `rotateZ(${-Number(noteBook.position.rotation.split('deg')[0])}deg)`
  }

  const contentStyle = {
    ...noteBook.text.paragraph,
    content: '',
    width: convertSize(noteBook.text.paragraph.width),
    height: convertSize(noteBook.text.paragraph.height),
    fontSize: convertSize(noteBook.text.paragraph.fontSize),
    lineHeight: convertSize(noteBook.text.paragraph.lineHeight)
  }

  const titleStyle = {
    ...noteBook.text.title,
    width: convertSize(noteBook.text.title.width),
    height: convertSize(noteBook.text.title.height),
    fontSize: convertSize(noteBook.text.title.fontSize),
    lineHeight: convertSize(noteBook.text.title.lineHeight)
  }

  const footerStyle = {
    width: convertSize(noteBook.text.footer.width),
    height: convertSize(noteBook.text.footer.height),
    fontSize: convertSize(noteBook.text.footer.fontSize)
  }

  return (
    <article className={style.NoteBook} style={whiteSheetStyle}>
      <div className={style.NoteBookContainer}>
        <p style={contentStyle} dangerouslySetInnerHTML={{ __html: noteBook.text.paragraph.content }} />
        <h1 style={titleStyle}>{noteBook.text.title.content}</h1>
        <footer style={footerStyle}>{noteBook.text.footer.content}</footer>
      </div>
    </article>
  )
}

export default NoteBook
