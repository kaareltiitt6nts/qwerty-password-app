import React from 'react'
import { Card } from './Card'
import { ChoiceList } from './ChoiceList'
import ChoiceText from './ChoiceText'

const ChoicePrompt = (props) => {
  const {choices} = props

  return (
    <Card>
      <div className='flex flex-col justify-center gap-10 w-72 sm:w-96'>
        <ChoiceText />
        <ChoiceList choices={choices} />
      </div>
    </Card>
  )
}

export default ChoicePrompt