import React from 'react'

export const Button = (props) => {
    const {text, value, onClick} = props

  return (
    <button onClick={onClick} value={value} className="w-fit px-3 py-1 bg-amber-600 rounded-md shadow-md text-white hover:cursor-pointer hover:brightness-105 active:brightness-95">
        {text}
    </button>
  )
}
