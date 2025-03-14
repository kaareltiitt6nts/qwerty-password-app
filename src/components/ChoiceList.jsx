import React from 'react'
import { IconButton } from './IconButton'

export const ChoiceList = (props) => {
  const {choices} = props

  const selectHandler = (choice) => {
    console.log(choice)
  }

  return (
    <div className='w-full flex flex-row justify-between'>
      {choices.map((choice, index) => {
        return <IconButton icon={"../assets/img/sword.png"} key={index} value={choice.value} onClick={() => selectHandler(choice.value)}/>
      })}
    </div>
  )
}
