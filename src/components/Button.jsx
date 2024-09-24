import React from 'react'
import { useStateContext } from '../contexts/ContextProvider'

const Button = ({color,bgColor,size,text,borderRadius,customFunc}) => {
  // destructuring the props 
  const {currentColor}=useStateContext()
  // we use () to when we call useStateContext to invoke useContext(StateContext)
  return (
    <button onClick={customFunc} type='button' style={{backgroundColor:currentColor,color,borderRadius}} className={`text-${size} font-semibold  p-3 hover:drop-shadow-xl hover:bg-green-900 shadow-inner focus:ring-4 focus:ring-${bgColor}-800  `}>
    {/* color,borderRadius , shorthand because obj is same name as attribute */}
        {text}
    </button>
  )
}

export default Button