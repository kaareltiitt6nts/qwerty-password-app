import React, {useEffect, useState} from 'react'
import ChoicePrompt from './menus/ChoicePrompt'
import MainMenu from './menus/MainMenu'
import CharacterMenu from './menus/CharacterMenu'
import { GetFinalAct, GetRandomActs } from '../data/globaldata'


const GameContainer = () => {
  const [inMainMenu, setInMainMenu] = useState(true)
  const [gameStarted, setGameStarted] = useState(false)
  const [gameCompleted, setGameCompleted] = useState(false)
  const [stage, setStage] = useState(0)
  const [finalAct, setFinalAct] = useState(null)
  const [playerData, setPlayerData] = useState(null)
  const [highestAttribute, setHighestAttribute] = useState(null)

  const acts = GetRandomActs(5)

  const resetGame = () => {
    setInMainMenu(true)
    setGameStarted(false)
    setGameCompleted(false)
    setStage(0)
    setPlayerData(null)
    setHighestAttribute(null)
  }

  const promptCompleteHandler = (choice) => {
    console.log("selected " + choice)
    playerData.addKeyword(choice)
    setStage(stage + 1)
    console.log(finalAct)
  }

  const gameCompletedHandler = (choice) => {
    console.log("tehtud!")

    playerData.weapon = choice

    // hetkel ei tee see midagi
    setGameCompleted(true)
    
    // reseti asi 2ra
    resetGame()
  }

  const gameStartedHandler = () => {
    setInMainMenu(false)
  }

  const characterCompletedHandler = (data) => {
    setPlayerData(data)
    setGameStarted(true)
    setFinalAct(GetFinalAct(data.getHighestAttributeId()))
  }

  return (
    <>
      {/* main menu */}
      {inMainMenu && <MainMenu onGameStarted={gameStartedHandler} />}
      
      {/* karakteri loomine*/}
      {!inMainMenu && !gameStarted && <CharacterMenu onCharacterCompleted={characterCompletedHandler} />}

      {/* peamine gameplay */}
      {gameStarted && stage < acts.length - 1 &&
        <ChoicePrompt
          title={acts[stage]["title"]} 
          text={acts[stage]["text"]} 
          imagePath={acts[stage]["imagePath"]} 
          choices={acts[stage]["choices"]} 
          onCompleted={(choice) => promptCompleteHandler(choice)}
        />
      }

      {/* viimane prompt */}
      {gameStarted && stage == acts.length - 1 && !gameCompleted &&
        <ChoicePrompt
          title={finalAct["title"]} 
          text={finalAct["text"]} 
          imagePath={finalAct["imagePath"]} 
          choices={finalAct["choices"]} 
          onCompleted={(choice) => gameCompletedHandler(choice)}
        />
      }

      {/* ??? */}
      {gameCompleted &&
        <MainMenu onGameStarted={gameStartedHandler}/>
      }
    </>
  )
}

export default GameContainer