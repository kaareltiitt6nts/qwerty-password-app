import React from 'react'
import bgImage from "../../assets/img/button/bg.png"

export const IconButton = (props) => {
  const {icon, text, value, onClick} = props
  
  return (
    <button 
      className='relative w-16 h-16 flex flex-col items-center transition-transform duration-100 hover:scale-110 hover:cursor-pointer active:scale-95'
      onClick={onClick} style={{backgroundImage: `url(${bgImage})`, backgroundSize: "cover", backgroundRepeat: "no-repeat"}}> 
        <span className="absolute -top-6 mb-1 text-sm text-white">{value}</span>
        <img src={icon} alt={value} className='w-full h-full transition-all duration-100'/>
    </button>
  )
}
