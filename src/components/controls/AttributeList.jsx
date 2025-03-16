import React, {useState} from 'react'
import { Button } from './Button'

const attributes = [
  {name: "Strength", id: "str", points: 0},
  {name: "Vitality", id: "vit", points: 0},
  {name: "Dexterity", id: "dex", points: 0},
  {name: "Intelligence", id: "int", points: 0},
]

const AttributeList = (props) => {
  const [points, setPoints] = useState(10)

  // ?????????????????? jama asi..
  const addPointHandler = (attributeId, increment) => {
    if (increment === "add" && points <= 0) return

    const attribute = attributes.find(attribute => attribute.id === attributeId)    
    if (!attribute || attribute === undefined) return

    if (increment === "remove" && attribute.points === 0) return

    if (increment === "add") {
      setPoints(points - 1)
      attribute.points += 1
    }
    else {
      setPoints(points + 1)
      attribute.points -= 1
    }
  }

  return (
    <div>
      <span>Points: {points}</span>
      <ul>
        {
          attributes.map((attribute, count) => {
            return (
              <li key={count}>
                <div>
                  <span>{attribute.name}</span>
                </div>
                <div className='flex flex-row justify-between align-middle w-full'>
                  <Button text="-" onClick={() => addPointHandler(attribute.id, "remove")}/>
                  <span>{attribute.points}</span>
                  <Button text="+" onClick={() => addPointHandler(attribute.id, "add")}/>
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