import React, {useState} from 'react'
import bgImage from "../../assets/img/button/bg.png"
import { AnimatePresence, motion } from 'framer-motion'

export const IconButton = (props) => {
  const [hovering, setHovering] = useState(false)
  const {icon, title, value, onClick} = props
  
  return (
    <button 
      className='relative w-16 h-16 flex flex-col items-center transition-transform duration-100 hover:scale-110 hover:cursor-pointer active:scale-95'
      onClick={onClick} style={{backgroundImage: `url(${bgImage})`, backgroundSize: "cover", backgroundRepeat: "no-repeat"}}
      onMouseEnter={() => setHovering(true)}
      onMouseLeave={() => setHovering(false)}> 
        <img src={icon} alt={value} className='w-full h-full transition-all duration-100'/>
        {hovering && 
          <AnimatePresence>
            <motion.div
              key={Math.random()}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0, transition:{ duration: 0.2, ease: "easeOut" }}}
              exit={{ opacity: 0, y: -20, transition:{ duration: 0.2, ease: "easeOut" }}}
              className='absolute min-w-42 p-2 rounded-md top-20 bg-neutral-900'
            >
              <span>{title}</span>
            </motion.div>
          </AnimatePresence>
        }
    </button>
  )
}
