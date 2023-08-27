import style from './ToHome.module.css'

import home from '../../assets/Instructions/home.svg'

function ToHome () {
  return (
    <button className={style.ToHome}>
      <a href='#section0'><img src={home} /></a>
    </button>
  )
}

export default ToHome
