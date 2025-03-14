import React from 'react'
import ChoicePrompt from './ChoicePrompt'

const GameContainer = () => {
  const choices = [
    {icon: "../assets/img/sword.png", value:"sword"},
    {icon: "../assets/img/sword.png", value:"axe"},
    {icon: "../assets/img/sword.png", value:"mallet"},
    {icon: "../assets/img/sword.png", value:"pickaxe"},
    {icon: "../assets/img/sword.png", value:"fists"},
  ]

  return (
    <ChoicePrompt choices={choices} />
  )
}

export default GameContainer