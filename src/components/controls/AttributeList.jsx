import React, {useState, useEffect} from 'react'
import { Button } from './Button'
import { GetAttributes } from '../../data/globalData'

const AttributeList = (props) => {
  const [points, setPoints] = useState(10)
  const [attributes, setAttributes] = useState({})
  const attributeList = GetAttributes()

  useEffect(() => {
    setAttributes(prevAttributes => ({
      str: prevAttributes.str ?? 0,
      dex: prevAttributes.dex ?? 0,
      vit: prevAttributes.vit ?? 0,
      int: prevAttributes.int ?? 0
    }))
  }, [points])

  // ?????????????????? jama asi..
  const addPointHandler = (attributeId, amount) => {
    const newPoints = points - amount
    const newAttributePoints = attributes[attributeId] + amount
    if (newPoints < 0 || newPoints > 10) return
    if (newAttributePoints < 0 || newAttributePoints > 5) return

    setAttributes(prev => ({
      ...prev,
      [attributeId]: prev[attributeId] + amount
    }))

    setPoints(newPoints)
  }

  return (
    <div>
      <span>Points: {points}</span>
      <ul>
        {
          attributeList.map((attribute, count) => {
            return (
              <li key={count}>
                <div>
                  <span>{attribute.name}</span>
                </div>
                <div className='flex flex-row justify-between align-middle w-full'>
                  <Button text="-" onClick={() => addPointHandler(attribute.id, -1)}/>
                  <span>{attributes[attribute.id]}</span>
                  <Button text="+" onClick={() => addPointHandler(attribute.id, 1)}/>
                </div>
              </li>
            )
          })
        }
      </ul>
    </div>
  )
}

export default AttributeList