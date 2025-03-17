import React, {useEffect, useState} from 'react'
import ChoicePrompt from './menus/ChoicePrompt'
import MainMenu from './menus/MainMenu'
import CharacterMenu from './menus/CharacterMenu'
import { GetRandomActs } from '../data/globalData'

const GameContainer = () => {
  const [inMainMenu, setInMainMenu] = useState(true)
  const [gameStarted, setGameStarted] = useState(false)
  const [stage, setStage] = useState(0)
  const [acts, setActs] = useState(GetRandomActs(5))
  const [charData, setCharData] = useState([])

  const promptCompleteHandler = (choice) => {
    console.log("selected " + choice)
    setStage(stage + 1)
  }

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
      {gameStarted && <ChoicePrompt title={acts[stage]["title"]} text={acts[stage]["text"]} imagePath={acts[stage]["imagePath"]} choices={acts[stage]["choices"]} onCompleted={(choice) => promptCompleteHandler(choice)}/>}
    </>
  )
}

export default GameContainer