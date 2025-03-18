import React from 'react'
import { motion } from 'framer-motion'

export const Card = (props) => {
  return (
    <motion.div
      key={Math.random()}
      initial={{ opacity: 0, x: 50 }}
      animate={{ opacity: 1, x: 0 }}
      exit={{ opacity: 0, x: -50 }}
      transition={{ duration: 0.5, ease: "easeOut" }}
    >
      <div id='card' className='p-4 rounded-md bg-neutral-900 shadow-md'>
        {props.children}
      </div>
    </motion.div>
  )
}