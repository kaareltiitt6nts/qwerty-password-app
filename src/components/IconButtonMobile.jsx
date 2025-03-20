import React, {useState} from 'react'
import bgImage from "../../assets/img/button/bg.png"
import { AnimatePresence, motion } from 'framer-motion'

export const IconButtonMobile = (props) => {
  const {icon, title, value, onClick} = props
  
  return (
    <button 
      className='relative text-start flex flex-row items-center transition-transform duration-100 hover:scale-105 hover:cursor-pointer active:scale-95'
      onClick={onClick}
    > 
        <img src={icon} alt={value} className='w-12 h-12 transition-all duration-100' style={{backgroundImage: `url(${bgImage})`, backgroundSize: "cover", backgroundRepeat: "no-repeat"}}/>
        <span className='ml-2'>{title}</span>
    </button>
  )
}
