import React, { useState, useEffect, act } from "react"
import ChoicePrompt from "./menus/ChoicePrompt"
import MainMenu from "./menus/MainMenu"
import CharacterMenu from "./menus/CharacterMenu"
import { GetAllActs } from "../data/globaldata"
import { AnimatePresence } from "framer-motion"
import ResultScreen from "./menus/ResultScreen"

const GameContainer = () => {
  // mainMenu, characterCreation, playing, gameResult, gameOver
  const [gameState, setGameState] = useState("mainMenu")
  const [stage, setStage] = useState(0)
  const [acts, setActs] = useState([])
  const [playerData, setPlayerData] = useState(null) // usecontext?

  useEffect(() => {
    if (gameState === "playing") {
      const newActs = GetAllActs(5, playerData.getHighestAttributeId())
      setActs(newActs)
    }
  }, [gameState])

  const resetGame = () => {
    setGameState("mainMenu")
    setStage(0)
    setPlayerData(null)
    setActs([])
  }

  const promptCompleteHandler = (choice, isFinal) => {
    console.log("selected " + choice)
    
    if (isFinal) {
      playerData.setWeapon(choice)
    }
    else {
      playerData.addChoice(choice)
    }

    setStage(stage + 1)

    if (stage === acts.length - 1) {
      setGameState("gameResult")
    }
  }

  const resultCompletedHandler = () => {
    resetGame()
  }

  const gameStartedHandler = () => {
    setGameState("characterCreation")
  }

  const characterCompletedHandler = (data) => {
    setPlayerData(data)
    setGameState("playing")
  }

  return (
    <AnimatePresence mode="wait">
      {/* main menu */}
      {gameState === "mainMenu" && <MainMenu onGameStarted={gameStartedHandler} />}

      {/* karakteri loomine */}
      {gameState === "characterCreation" && (
        <CharacterMenu onCharacterCompleted={characterCompletedHandler} />
      )}

      {/* gameloop */}
      {gameState === "playing" && stage < acts.length && (
        <ChoicePrompt
          key={stage} // Ensures animation works
          title={acts[stage].title}
          text={acts[stage].text}
          imagePath={acts[stage].imagePath}
          choices={acts[stage].choices}
          isFinal={acts[stage].isFinal}
          onCompleted={promptCompleteHandler}
        />
      )}

      {/* salasõna result */}
      {gameState === "gameResult" && <ResultScreen onCompleted={resultCompletedHandler} playerData={playerData}/>}
    </AnimatePresence>
  )
}

export default GameContainer