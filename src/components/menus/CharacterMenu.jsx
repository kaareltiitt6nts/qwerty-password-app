import React from 'react'
import { Card } from '../Card'
import AttributeList from '../controls/AttributeList'

const CharacterMenu = (props) => {
  const {onCharacterCompleted} = props

  const handleAttributesCompleted = (playerData) => {
    console.log(playerData)
    onCharacterCompleted(playerData);
  };

  return (
    <Card>
        <AttributeList onAttributesCompleted={handleAttributesCompleted} />
    </Card>
  )
}
export default CharacterMenu