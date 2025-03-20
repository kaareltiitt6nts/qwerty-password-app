import React from 'react'
import { Button } from './Button'

export const GameCard = (props) => {
  const {title, text, decorationImage, choices} = props

  const onSelectHandler = (event) => {
  }

  return (
    <div id='gamecard' className='w-96 h-96 mx-auto bg-red-900'>
      <img src={decorationImage} alt="" className='absolute w-96 -z-10'/>
      <h1>{title}</h1>
      <p>{text}</p>
      {choices.map(choice => {
        <Button text={choice.text} value={choice.value} onClick={(event) => onSelectHandler(event)}/>
      })}
    </div>
  )
}