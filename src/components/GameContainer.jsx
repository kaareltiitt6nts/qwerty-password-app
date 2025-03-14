import React, {useState} from 'react'
import ChoicePrompt from './ChoicePrompt'
import MainMenu from './MainMenu'

const GameContainer = () => {
  const [gameStarted, setGameStarted] = useState(false)
  const [gameStage, setGameStage] = useState(0)

  const gameStartedHandler = () => {
    setGameStarted(true)
  }

  const choices = [
    {icon: "../assets/img/sword.png", value:"sword"},
    {icon: "../assets/img/sword.png", value:"axe"},
    {icon: "../assets/img/sword.png", value:"mallet"},
    {icon: "../assets/img/sword.png", value:"pickaxe"},
    {icon: "../assets/img/sword.png", value:"fists"},
  ]

  return (
    <>
      {!gameStarted && <MainMenu onGameStarted={gameStartedHandler} />}
      {gameStarted && <ChoicePrompt choices={choices} />}
    </>
  )
}

export default GameContainer