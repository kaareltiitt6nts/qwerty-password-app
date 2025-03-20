import React, { useState, useEffect } from 'react'
import { Card } from '../Card'
import { Button } from '../controls/Button'

const ResultScreen = (props) => {
  const {onCompleted, playerData} = props
  const [result, setResult] = useState(playerData.generatePassword())

  const [words, setWords] = useState({})

  useEffect(() => {
    setWords(playerData.getWords())
  }, [result])

  const copyPassword = () => {
    navigator.clipboard.writeText(result)
  }

  return (
    <Card>
      <div className="w-96 flex flex-col text-center">
        <h1>Salasõna tulemus</h1>
        <div className="flex flex-col items-center gap-3">
          <div className="w-full flex flex-col gap-3">
            <p>
                {`Andsid karakterile, mille lõid, kõige rohkem "${words.attributeWord}" punkte. Valisid karakteri nimeks
                "${playerData.name}". Seikluse käigus tehtud otsused iseloomustavad sind kui "${words.choicesWord}". Relv, mille abil õnnestus lõpuks draakon alistada: "${words.weaponWord}".
                Nüüd on sul visuaalne ettekujutus sinu unustamatust paroolist:`}
            </p>
            <p className="text-2xl break-words" id="passwordResult">{result}</p>
            <p className="text-neutral-600">Salasõna saate kasutada ükskõik kus ja millal. Ära seda teistega jaga!</p>
          </div>
          <div className='flex flex-row gap-2'>
            <Button text={"Lõpeta mäng"} onClick={onCompleted}/>
            <Button text={"Kopeeri"} onClick={copyPassword}/>
          </div>
        </div>
      </div>
    </Card>
  )
}

export default ResultScreen