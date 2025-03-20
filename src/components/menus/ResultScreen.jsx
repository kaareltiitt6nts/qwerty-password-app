import React, { useState } from 'react'
import { Card } from '../Card'
import { Button } from '../controls/Button'

const ResultScreen = (props) => {
  const {onCompleted, playerData} = props
  const [result, setResult] = useState(playerData.generatePassword())

  const copyPassword = () => {
    navigator.clipboard.writeText(result)
  }

  return (
    <Card>
      <div className="w-96 flex flex-col text-center">
        <h1>Salasõna tulemus</h1>
        <div className="flex flex-col items-center gap-3">
          <div className="w-full">
            <p className="text-2xl mb-3 break-words" id="passwordResult">{result}</p>
            <Button text="Kopeeri" onClick={copyPassword}/>
            <p className="text-neutral-600 mt-2">Salasõna saate kasutada ükskõik millal, ükskõik kus ning seda teist ja kolmandat.</p>
          </div>
          <Button text={"Lõpeta mäng"} onClick={onCompleted}/>
        </div>
      </div>
    </Card>
  )
}

export default ResultScreen