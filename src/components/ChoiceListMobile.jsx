import React from 'react'
import { IconButtonMobile } from './IconButtonMobile'

export const ChoiceListMobile = (props) => {
  const {choices, onSelect} = props

  const selectHandler = (choice) => {
    onSelect(choice)
  }

  return (
    <div className='w-full flex flex-col justify-around'>
      {choices.map((choice, index) => {
        return <IconButtonMobile icon={choice.icon} title={choice.title} key={index} value={choice.value} onClick={() => selectHandler(choice.value)}/>
      })}
    </div>
  )
}