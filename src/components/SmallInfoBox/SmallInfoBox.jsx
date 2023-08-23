import style from './SmallInfoBox.module.css'

function convertSize (input) {
  const n = Number(input.split('px')[0])
  const r = (n * 100 / 1920) + 'vw'
  return r
}

function SmallInfoBox ({ info, topSection }) {
  if (!info) return null
  const containerStyles = {
    ...info,
    width: convertSize(info.width),
    top: convertSize(Number(info.top.split('px')[0]) - Number(topSection.split('px')[0]) + 'px'),
    left: convertSize(info.left),
    borderRadius: convertSize('30px')
  }

  const textStyle = {
    ...info.text,
    width: convertSize(info.text.width),
    fontSize: convertSize(info.text.fontSize),
    lineHeight: convertSize(info.text.lineHeight),
    margin: `${convertSize((Number(info.width.split('px')[0]) - Number(info.text.width.split('px')[0])) / 2 + 'px')} 0px`
  }
  return (
    <div name={`SmallInfoBox${info.name}`} style={containerStyles} className={style.SmallInfoBoxContainer}>
      <p dangerouslySetInnerHTML={{ __html: info.text.content }} style={textStyle} className={style.SmallInfoBoxText} />
    </div>
  )
}

export default SmallInfoBox
