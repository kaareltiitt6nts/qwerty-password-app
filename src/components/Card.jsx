import React from 'react'
import { motion } from 'framer-motion'

export const Card = (props) => {
  return (
    <motion.div
      key={Math.random()}
      initial={{ opacity: 0, y: -100 }}
      animate={{ opacity: 1, y: 0, transition:{ duration: 0.2, ease: "easeOut" }}}
      exit={{ opacity: 0, y: 100, transition:{ duration: 0.2, ease: "easeOut" }}}
    >
      <div id='card' className='p-4 rounded-md bg-neutral-900 shadow-md'>
        {props.children}
      </div>
    </motion.div>
  )
}