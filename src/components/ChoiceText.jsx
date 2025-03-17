import React from 'react'

const ChoiceText = (props) => {
  const {title, text, imagePath} = props
  
  return (
    <div className='w-full flex flex-col'>
      <img src={imagePath} alt="" className='w-full h-48 object-cover mb-5'/>
      <div>
        <h1 className='text-center'>{title}</h1>
        <p>{text}</p>
      </div>
    </div>
  )
}

export default ChoiceText