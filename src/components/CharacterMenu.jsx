import React from 'react'
import { Card } from './Card'
import { Button } from './Button'

const CharacterMenu = (props) => {
  const {onCharacterCompleted} = props

  return (
    <Card>
      <div>
        <Button text={"Loo karakter!"} onClick={onCharacterCompleted} />
      </div>
    </Card>
  )
}

export default CharacterMenu