import React from 'react'
import { Card } from '../Card'
import { Button } from '../controls/Button'

const ResultScreen = (props) => {
  const {onCompleted, passwordResult} = props

  return (
    <Card>
      <div className="w-96 flex flex-col items-center text-center">
        <h1>Salasõna</h1>
        <div className="flex flex-col gap-3">
          <div>
            <span className="text-2xl">{passwordResult}</span>
            <p className="text-neutral-600">Salasõna saate kasutada ükskõik millal, ükskõik kus ning seda teist ja kolmandat.</p>
          </div>
          <Button text="Lõpeta mäng" onClick={onCompleted}/>
        </div>
      </div>
    </Card>
  )
}

export default ResultScreen