import React from 'react'
import { Card } from '../Card'
import { Button } from '../controls/Button'

const ResultScreen = (props) => {
  const {onCompleted} = props

  return (
    <Card>
      <h1>Result screen</h1>
      <Button text="Lõpeta mäng" onClick={onCompleted}></Button>
    </Card>
  )
}

export default ResultScreen