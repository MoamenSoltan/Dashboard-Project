import React from 'react'

const Button = ({color,bgColor,size,text,borderRadius}) => {
  // destructuring the props 
  return (
    <button type='button' style={{backgroundColor:bgColor,color,borderRadius}} className={`text-${size} p-3 hover:drop-shadow-xl shadow-inner `}>
    {/* color,borderRadius , shorthand because obj is same name as attribute */}
        {text}
    </button>
  )
}

export default Button