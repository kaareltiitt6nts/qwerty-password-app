import React from 'react'
import { Card } from '../Card'
import { ChoiceList } from '../ChoiceList'
import ChoiceText from '../ChoiceText'

const ChoicePrompt = (props) => {
  const {title, text, imagePath, choices, onCompleted} = props

  const promptCompleteHandler = (choice) => {
    onCompleted(choice)
  }

  return (
    <Card>
      <div className='flex flex-col justify-center gap-10 w-72 sm:w-96'>
        <ChoiceText text={text} title={title} imagePath={imagePath} />
        <ChoiceList choices={choices} onSelect={(choice) => promptCompleteHandler(choice)}/>
      </div>
    </Card>
  )
}

export default ChoicePrompt