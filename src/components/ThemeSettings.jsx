import React from 'react'
import { MdOutlineCancel } from 'react-icons/md'
import { BsCheck } from 'react-icons/bs'
import { TooltipComponent } from '@syncfusion/ej2-react-popups'
import { themeColors } from '../data/dummy'
import { useStateContext } from '../contexts/ContextProvider'

// note : this component is at the very top level ,  above the routes and on the same level as sidebar
// notes : float-right and top-0 right-0 are crucial
const ThemeSettings = () => {
  const {themes,setThemes,setColor,setMode,currentMode,currentColor}=useStateContext()
  if(themes)
  return (
    <div className='bg-half-transparent w-screen fixed nav-item top-0 right-0'>
      {/* hakf transparent for opacity //to emulate a pop up , it makes the background grayed out , nav-item in app.css is for a z-index*/}
      {/* top-0 and right-0 to make the div we want (the popup) in the right side */}

      <div className='w-400 bg-white h-screen float-right dark:text-gray-200 dark:bg-secondary-dark-bg p-4  '>
        
        {/* float-right is necessary for positioning  */}
        {/* dark:[] means a custom color , thats not in tw config file */}
        <div className='flex justify-between items-center border-b-gray-200 border-b-1 pb-4 ml-3 mb-3'>

          <p className=' text-lg font-semibold' >Settings</p>
         <button type='button' onClick={()=>{setThemes(false)}} className='text-2xl text-gray-400 hover:drop-shadow-xl hover:bg-gray-200  rounded-full p-3'>
         <MdOutlineCancel/>
         </button>

        </div>

        <div className='flex-col justify-between items-center border-b-gray-200 border-b-1 pb-4 ml-3 '>
          {/* flex-col is the direction */}

          <p className=' text-lg font-semibold' >Theme Options </p>
         <div className='mt-4'>

          <input type="radio" id='light' value="Light" onChange={()=>{setMode("Light")}} checked={currentMode==="Light"} name='theme' className='cursor-pointer'/>
          <label className='ml-3 ' htmlFor="light">Light</label>
          


         </div>

            <div className='mt-4'>

          <input type="radio" id='dark' value="Dark" onChange={()=>{setMode("Dark")}} checked={currentMode==="Dark"} name='theme' className='cursor-pointer'/>
          <label className='ml-3 ' htmlFor="dark">Dark</label>
          {/* checked prop , defines when the radio is checked , we need it to be checked depending on the mode state */}


         </div>

        </div>

        <div className='flex-col justify-between items-center  py-5 ml-3 mb-3'>

          <p className=' text-lg font-semibold' >Theme Colors</p>

          <div className='flex gap-3'>
          {
            themeColors.map((item,index)=>(
              <TooltipComponent key={index} content={item.name} position='TopCenter'>
                <div className='relative mt-2 cursor-pointer flex gap-5 items-center'>
                  <button type='button' className='h-10 w-10 rounded-full cursor-pointer' style={{backgroundColor:item.color}} 
                  onClick={()=>{setColor(item.color)}} >
                    <BsCheck className={`ml-2 text-white text-2xl ${item.color===currentColor?'block':'hidden'}`}
                    />
                    {/* item.color===currentColor */}
                  </button>
                </div>
              </TooltipComponent>
            ))
          }
          </div>
         
        </div>

      </div>

    </div>
  )
}

export default ThemeSettings