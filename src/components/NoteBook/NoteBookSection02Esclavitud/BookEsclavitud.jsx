import React from 'react'
import "./BookEsclavitud.css"

const BookEsclavitud = ({page10}) => {
  return (
    <div className="NoteBook08__container">
    <div className="NoteBook08">
      <div className="NoteBook08__texts">
        <p
          className="NoteBook08__text1"
          dangerouslySetInnerHTML={{ __html: page10.text1 }}
        ></p>
        <h1 className="NoteBook08__text2">{page10.text2}</h1>
        <h3 className="NoteBook08__text3">{page10.text3}</h3>
      </div>
    </div>
  </div>
  )
}

export default BookEsclavitud