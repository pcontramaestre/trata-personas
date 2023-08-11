import style from './Instructions.module.css'

function Instructions ({ setShowInstructions }) {
  function handleInstruction () {
    setShowInstructions(false)
  }

  return (
    <section className={style.InstructionsContainer}>
      <button onClick={handleInstruction}>INICIAR NAVEGACIÓN</button>
    </section>
  )
}

export default Instructions
