import style from './BigInfoBox.module.css'

function convertSize (input) {
  const n = Number(input.split('px')[0])
  return (n * 100 / 1920) + 'vw'
}

function BigInfoBox ({ bigInfoBox }) {
  if (!bigInfoBox) return null

  const bigInfoBoxStyle = {
    width: convertSize(bigInfoBox.width),
    height: convertSize(bigInfoBox.height),
    top: convertSize(bigInfoBox.top),
    left: convertSize(bigInfoBox.left),
    borderRadius: convertSize(bigInfoBox.borderRadius),
    border: convertSize(bigInfoBox.border),
    backgroundColor: bigInfoBox.backgroundColor
  }

  const textInfoBox = bigInfoBox.text.map((texto) => ({
    ...texto,
    width: convertSize(texto.width),
    height: convertSize(texto.height),
    top: convertSize(Number(texto.top.split('px')[0]) - Number(bigInfoBox.top.split('px')[0]) + 'px'),
    left: convertSize(Number(texto.left.split('px')[0]) - Number(bigInfoBox.left.split('px')[0]) + 'px'),
    fontSize: convertSize(texto.fontSize),
    lineHeight: convertSize(texto.lineHeight)
  }))

  const barInfoBox = {
    ...bigInfoBox.bar,
    height: convertSize(bigInfoBox.bar.height),
    top: convertSize(Number(bigInfoBox.bar.top.split('px')[0]) - Number(bigInfoBox.top.split('px')[0]) + 'px'),
    left: convertSize(Number(bigInfoBox.bar.left.split('px')[0]) - Number(bigInfoBox.left.split('px')[0]) + 'px')
  }

  return (
    <div className={style.BigInfoBox} style={bigInfoBoxStyle}>
      <div className={style.BigInfoBoxBar} style={barInfoBox} />
      {
        bigInfoBox.text.map((texto, index) => {
          if (texto.tag === 'h1') {
            return <h1 style={textInfoBox[index]} dangerouslySetInnerHTML={{ __html: texto.content }} key={index} />
          }
          return <p style={textInfoBox[index]} dangerouslySetInnerHTML={{ __html: texto.content }} key={index} />
        })
      }
    </div>
  )
}

export default BigInfoBox
