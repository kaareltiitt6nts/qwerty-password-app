import React from 'react'
import { Card } from '../Card'
import AttributeList from '../controls/AttributeList'

const CharacterMenu = (props) => {
  const {onCharacterCompleted} = props

  const handleAttributesCompleted = (charData) => {
    onCharacterCompleted(charData);
  };

  return (
    <Card>
      <div className='flex flex-col gap-5'>
        <AttributeList onAttributesCompleted={handleAttributesCompleted} />
      </div>
    </Card>
  )
}
export default CharacterMenu