import React, {useState, useEffect} from 'react'
import { Button } from './Button'
import { GetAttributes, getRandomAttributeValue } from "../../data/globaldata"

const AttributeList = ({ onAttributesCompleted }) => {
  const [points, setPoints] = useState(10)
  const [attributes, setAttributes] = useState({})
  const [name, setName] = useState("")
  const [highestStat, setHighestStat] = useState("");
  const [highestStatValue, setHighestStatValue] = useState(null);


  const attributeList = GetAttributes()

  useEffect(() => {
    setAttributes(prevAttributes => ({
      str: prevAttributes.str ?? 0,
      dex: prevAttributes.dex ?? 0,
      mag: prevAttributes.mag ?? 0,
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

    // Find the highest attribute
    useEffect(() => {
      if (Object.keys(attributes).length === 0) return;
    
      const maxPoints = Math.max(...Object.values(attributes));
      const highestAttributes = Object.keys(attributes).filter(
        (key) => attributes[key] === maxPoints
      );
    
      const matchingAttributes = attributeList.filter(attr =>
        highestAttributes.includes(attr.id)
      );
    
      if (matchingAttributes.length === 0) return;
    
      const chosenAttribute =
        matchingAttributes.length === 1
          ? matchingAttributes[0]
          : matchingAttributes[Math.floor(Math.random() * matchingAttributes.length)];
    
      setHighestStat(chosenAttribute.name);
    
      // Use the function to get a random value from `values`
      setHighestStatValue(getRandomAttributeValue(attributeList, chosenAttribute.name));
    }, [attributes]);

  const handleComplete = () => {
    if (name.trim().length > 0) {
      onAttributesCompleted({ name, highestStatValue });
    }
  };

  return (
    <div>
      <div className='w-full flex flex-col'>
          <label htmlFor="nameinput">Nimi:</label>
          <input type="text" id="nameinput" className='bg-slate-100 text-black rounded-md' value={name}  onChange={(e) => setName(e.target.value)} placeholder="Peeter Suur näiteks"/>
      </div>
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
      <div className='mt-3'>
      <Button text="Loo karakter!" onClick={handleComplete}/>
      </div>
    </div>
  )
}

export default AttributeList