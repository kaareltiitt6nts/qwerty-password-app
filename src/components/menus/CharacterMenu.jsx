import React from 'react'
import { Card } from '../Card'
import { Button } from '../controls/Button'
import AttributeList from '../controls/AttributeList'

const CharacterMenu = (props) => {
  const {onCharacterCompleted} = props

  return (
    <Card>
      <div className='flex flex-col gap-5'>
        <AttributeList/>
        <Button text={"Loo karakter!"} onClick={onCharacterCompleted} />
      </div>
    </Card>
  )
}

export default CharacterMenu