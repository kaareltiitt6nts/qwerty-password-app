import React from 'react'
import { Card } from '../Card'
import { Button } from '../controls/Button'

const MainMenu = (props) => {
  const {onGameStarted} = props

  return (
    <Card>
      <div>
        <Button text={"Alusta!"} onClick={onGameStarted} />
      </div>
    </Card>
  )
}

export default MainMenu