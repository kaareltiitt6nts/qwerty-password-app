import React from 'react'

export const Card = (props) => {
  return (
    <div id='card' className='fixed mx-auto p-4 rounded-md bg-neutral-900 shadow-md'>
      {props.children}
    </div>
  )
}