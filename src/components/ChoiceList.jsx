import React from 'react'
import { IconButton } from './IconButton'

export const ChoiceList = (props) => {
  const {choices, onSelect} = props

  const selectHandler = (choice) => {
    onSelect(choice)
  }

  return (
    <div className='w-full flex flex-row justify-between'>
      {choices.map((choice, index) => {
        return <IconButton icon={choice.icon} key={index} value={choice.value} onClick={() => selectHandler(choice.value)}/>
      })}
    </div>
  )
}