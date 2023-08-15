import style from './NoteBook.module.css'

function convertSize (input) {
  const n = Number(input.split('px')[0])
  return (n * 100 / 1920) + 'vw'
}

function NoteBook ({ noteBook }) {
  if (!noteBook) return null

  const whiteSheetStyle = {
    width: convertSize(noteBook.size.width),
    height: convertSize(noteBook.size.height),
    transform: `rotateZ(${-Number(noteBook.position.rotation.split('deg')[0])}deg)`
  }

  const contentStyle = {
    width: convertSize(noteBook.text.paragraph.size.width),
    height: convertSize(noteBook.text.paragraph.size.height),
    top: convertSize(Number(noteBook.text.paragraph.position.top.split('px')[0]) - Number(noteBook.position.top.split('px')[0]) + 'px'),
    left: convertSize(Number(noteBook.text.paragraph.position.left.split('px')[0]) - Number(noteBook.position.left.split('px')[0]) + 'px'),
    fontSize: convertSize(noteBook.text.paragraph.fontSize)
  }

  const titleStyle = {
    width: convertSize(noteBook.text.title.size.width),
    height: convertSize(noteBook.text.title.size.height),
    top: convertSize(Number(noteBook.text.title.position.top.split('px')[0]) - Number(noteBook.position.top.split('px')[0]) + 'px'),
    left: convertSize(Number(noteBook.text.title.position.left.split('px')[0]) - Number(noteBook.position.left.split('px')[0]) + 'px'),
    fontSize: convertSize(noteBook.text.title.fontSize)
  }

  const footerStyle = {
    width: convertSize(noteBook.text.footer.size.width),
    height: convertSize(noteBook.text.footer.size.height),
    top: convertSize(Number(noteBook.text.footer.position.top.split('px')[0]) - Number(noteBook.position.top.split('px')[0]) + 'px'),
    left: convertSize(Number(noteBook.text.footer.position.left.split('px')[0]) - Number(noteBook.position.left.split('px')[0]) + 'px'),
    fontSize: convertSize(noteBook.text.footer.fontSize)
  }

  return (
    <article className={style.NoteBook} style={whiteSheetStyle}>
      <p style={contentStyle}>{noteBook.text.paragraph.content}</p>
      <h1 style={titleStyle}>{noteBook.text.title.content}</h1>
      <footer style={footerStyle}>{noteBook.text.footer.content}</footer>
    </article>
  )
}

export default NoteBook
