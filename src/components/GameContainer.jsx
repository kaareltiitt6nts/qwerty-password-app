import React, {useState} from 'react'
import ChoicePrompt from './menus/ChoicePrompt'
import MainMenu from './menus/MainMenu'
import CharacterMenu from './menus/CharacterMenu'

const GameContainer = () => {
  const [inMainMenu, setInMainMenu] = useState(true)
  const [gameStarted, setGameStarted] = useState(false)
  const [gameStage, setGameStage] = useState(0)

  const gameStartedHandler = () => {
    setInMainMenu(false)
  }

  const characterCompletedHandler = () => {
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
      {inMainMenu && <MainMenu onGameStarted={gameStartedHandler} />}
      {(!inMainMenu && !gameStarted) && <CharacterMenu onCharacterCompleted={characterCompletedHandler} />}
      {gameStarted && <ChoicePrompt title={"test"} text={"test"} imagePath={"../assets/img/dragon.jpg"} choices={choices} />}
    </>
  )
}

export default GameContainer