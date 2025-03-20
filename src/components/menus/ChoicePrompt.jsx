import React from 'react'
import { Card } from '../Card'
import { ChoiceList } from '../ChoiceList'
import ChoiceText from '../ChoiceText'
import useWindowDimensions from '../../util/WindowDimensions'
import { ChoiceListMobile } from '../ChoiceListMobile'

const ChoicePrompt = (props) => {
  const {title, text, imagePath, choices, isFinal, onCompleted} = props
  const {width, height} = useWindowDimensions()

  const promptCompleteHandler = (choice) => {
    onCompleted(choice, isFinal)
  }

  return (
    <Card>
      <div className='flex flex-col justify-center gap-3 sm:gap-10 w-72 sm:w-96'>
        <ChoiceText text={text} title={title} imagePath={imagePath} />
        {width > 640 ?
          <ChoiceList choices={choices} onSelect={(choice) => promptCompleteHandler(choice)}/>
          :
          <ChoiceListMobile choices={choices} onSelect={(choice) => promptCompleteHandler(choice)}/>
        }
      </div>
    </Card>
  )
}

export default ChoicePrompt