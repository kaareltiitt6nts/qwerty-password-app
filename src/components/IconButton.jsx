import React from 'react'

export const IconButton = (props) => {
  const {icon, value, onClick} = props
  
  return (
    <button className='w-16 h-16 flex justify-center items-center transition-transform duration-100 hover:scale-110 hover:cursor-pointer active:scale-95'>
      <img src={icon} alt="" value={value} onClick={onClick} className='transition-all duration-100 drop-shadow-sm hover:drop-shadow-lg'/>
    </button>
  )
}
