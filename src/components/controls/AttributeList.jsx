import React, {useState, useEffect} from 'react'
import { Button } from './Button'
import { GetAttributes } from "../../data/globaldata"
import { PlayerData } from '../../classes/PlayerData'
import { AnimatePresence, motion } from 'framer-motion'

const AttributeList = (props) => {
  const {onAttributesCompleted} = props
  const [points, setPoints] = useState(10)
  const [attributes, setAttributes] = useState({})
  const [name, setName] = useState("")
  const attributeList = GetAttributes()

  // peaks uus komponent olema.. ja värki
  const [formValid, setFormValid] = useState(true)
  const [showWarning, setShowWarning] = useState(false)
  const [error, setError] = useState("")
  
  useEffect(() => {
      if (showWarning === true) {
        setTimeout(() => {
          setShowWarning(false)
        }, 2500);
      }
  }, [error, showWarning])

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

  const handleComplete = () => {
    // usereducer?
    if (name.trim().length > 0) {
      const playerData = new PlayerData(name)
      playerData.setAttributes(attributes)

      onAttributesCompleted(playerData);
    }
    else {
      setError("Palun sisesta karakteri nimi! :(")
      setShowWarning(true)
    }
  };

  return (
    <div>
      <AnimatePresence>
        {showWarning && 
          <motion.div
            initial={{ opacity: 0, y: 0 }}
            animate={{ opacity: 1, y: -85, transition:{ duration: 0.2, ease: "easeOut" }}}
            exit={{ opacity: 0, y: 0, transition:{ duration: 0.2, ease: "easeIn" }}}
            className="absolute w-36 bg-neutral-900 text-white p-2 rounded-sm transform left-1/2 -translate-x-1/2 -z-10"
          >
            <span>{error}</span>
          </motion.div>
        }
      </AnimatePresence>
      
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