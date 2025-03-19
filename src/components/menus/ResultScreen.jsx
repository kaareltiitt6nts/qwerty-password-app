import React from 'react'
import { Card } from '../Card'
import { Button } from '../controls/Button'

const ResultScreen = (props) => {
  const {onCompleted, playerData} = props

  const copyPassword = () => {
    var copyText = document.getElementById("passwordResult")
    copyText.select()
    copyText.setSelectionRange(0, 99999)
    navigator.clipboard.writeText(copyText.value)
  }

  return (
    <Card>
      <div className="w-fit flex flex-col text-center">
        <h1>Salasõna tulemus</h1>
        <div className="flex flex-col items-center gap-3">
          <div className="w-full">
            <p className="text-2xl mb-3 break-words" id="passwordResult">{playerData.generatePassword()}</p>
            <p className="text-neutral-600">Salasõna saate kasutada ükskõik millal, ükskõik kus ning seda teist ja kolmandat.</p>
          </div>
          <Button text={"Lõpeta mäng"} onClick={onCompleted}/>
        </div>
      </div>
    </Card>
  )
}

export default ResultScreen