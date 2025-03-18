import React, {useState, useEffect} from 'react'
import { Button } from './Button'
import { GetAttributes, getRandomAttributeValue } from "../../data/globaldata"
import { PlayerData } from '../../classes/PlayerData'

const AttributeList = (props) => {
  const {onAttributesCompleted} = props
  const [points, setPoints] = useState(10)
  const [attributes, setAttributes] = useState({})
  const [name, setName] = useState("")

  const attributeList = GetAttributes()

  useEffect(() => {
    setAttributes(prevAttributes => ({
      str: prevAttributes.str ?? 1,
      dex: prevAttributes.dex ?? 1,
      mag: prevAttributes.mag ?? 1,
      int: prevAttributes.int ?? 1
    }))
  }, [points])

  // ?????????????????? jama asi..
  const addPointHandler = (attributeId, amount) => {
    const newPoints = points - amount
    const newAttributePoints = attributes[attributeId] + amount
    if (newPoints < 0 || newPoints > 10) return
    if (newAttributePoints < 1 || newAttributePoints > 5) return

    setAttributes(prev => ({
      ...prev,
      [attributeId]: prev[attributeId] + amount
    }))

    setPoints(newPoints)
  }

  const handleComplete = () => {
    if (name.trim().length > 0) {
      onAttributesCompleted(new PlayerData(name, attributes));
    }
  };

  return (
    <div>
      <div className='w-full flex flex-col'>
          <label htmlFor="nameinput">Nimi:</label>
          <input type="text" id="nameinput" className='bg-slate-100 text-black rounded-md p-1' value={name}  onChange={(e) => setName(e.target.value)} placeholder="nt. Peeter Suur"/>
      </div>
      <span>Punktid: {points}</span>
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
      <div className='mt-3'>
      <Button text="Loo karakter!" onClick={handleComplete}/>
      </div>
    </div>
  )
}

export default AttributeList