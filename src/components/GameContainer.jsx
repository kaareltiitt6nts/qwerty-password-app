import React, { useState, useEffect } from "react"
import ChoicePrompt from "./menus/ChoicePrompt"
import MainMenu from "./menus/MainMenu"
import CharacterMenu from "./menus/CharacterMenu"
import { GetFinalAct, GetRandomActs } from "../data/globaldata"
import { AnimatePresence } from "framer-motion"
import ResultScreen from "./menus/ResultScreen"

const GameContainer = () => {
  // mainMenu, characterCreation, playing, gameResult, gameOver
  const [gameState, setGameState] = useState("mainMenu")
  const [stage, setStage] = useState(0)
  const [acts, setActs] = useState([])
  const [finalAct, setFinalAct] = useState(null)
  const [playerData, setPlayerData] = useState(null)

  useEffect(() => {
    if (gameState === "playing") {
      setActs(GetRandomActs(5))
    }
  }, [gameState])

  const resetGame = () => {
    setGameState("mainMenu")
    setStage(0)
    setPlayerData(null)
    setActs([])
    setFinalAct(null)
  }

  const promptCompleteHandler = (choice) => {
    console.log("selected " + choice)
    
    setPlayerData((prev) => {
      const updatedPlayerData = { ...prev }
      updatedPlayerData.addKeyword(choice)
      return updatedPlayerData
    })

    if (stage < acts.length - 1) {
      setStage(stage + 1)
    } else {
      setGameState("finalAct")
      setFinalAct(GetFinalAct(playerData.getHighestAttributeId()))
    }
  }

  const resultCompletedHandler = () => {
    resetGame()
  }

  const gameCompletedHandler = (choice) => {
    console.log("Game Completed!")
    
    setPlayerData((prev) => ({
      ...prev,
      weapon: choice,
    }))

    setGameState("gameResult")
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

      {/* tavalised promptid */}
      {gameState === "playing" && stage < acts.length && (
        <ChoicePrompt
          key={stage} // Ensures animation works
          title={acts[stage].title}
          text={acts[stage].text}
          imagePath={acts[stage].imagePath}
          choices={acts[stage].choices}
          onCompleted={promptCompleteHandler}
        />
      )}

      {/* viimane act */}
      {gameState === "finalAct" && finalAct && (
        <ChoicePrompt
          key="final-act"
          title={finalAct.title}
          text={finalAct.text}
          imagePath={finalAct.imagePath}
          choices={finalAct.choices}
          onCompleted={gameCompletedHandler}
        />
      )}

      {/* salasõna result */}
      {gameState === "gameResult" && <ResultScreen onCompleted={resultCompletedHandler}/>}

      {/* tagasi main menusse */}
      {gameState === "gameOver" && <MainMenu onGameStarted={gameStartedHandler} />}
    </AnimatePresence>
  )
}

export default GameContainer
