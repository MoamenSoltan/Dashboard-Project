import React,{useEffect} from 'react'
import { AiOutlineMenu } from 'react-icons/ai'
import { FiShoppingCart } from 'react-icons/fi'
import { BsChatLeft } from 'react-icons/bs'
import { RiNotification3Line } from 'react-icons/ri'
import { MdKeyboardArrowDown } from 'react-icons/md'
import { TooltipComponent } from '@syncfusion/ej2-react-popups'
import avatar from '../data/avatar.jpg'//any name
import {Cart,Chat,Notification,UserProfile} from '.'//in the same file we're in
import { useStateContext } from '../contexts/ContextProvider'

//a component but wont be exported , only used below
//with instant return , NavButton=()=>() not {}
//if we dont want instant return , {return ()}
//very crucial
//notes : /*customFunc={()=>handleClick('cart')} otherwise will be executed on render not onclick  */
const NavButton = ({title,customFunc,icon,color,dotColor})=>(
  <TooltipComponent content={title} position='BottomCenter'>

    <button type='button' onClick={customFunc} style={{color:color}} className="relative text-xl p-3 rounded-full hover:bg-light-gray">
      {/* custom func on click */}

      <span style={{background:dotColor}} className="absolute inline-flex rounded-full h-2 w-2 right-2 top-2"/>
       {/* span is the little dot on chat and notifications */}
       {/* use inline style because props cant be added to tw styling */}
        {icon}
      
    </button>
  </TooltipComponent>
)

const NavBar = () => {
  const {activeMenu,setActiveMenu,isClicked,setIsClicked,handleClick,screenSize,setScreenSize,currentColor}=useStateContext()

  useEffect(()=>{
    //make a function to set width
    const handleResize=()=>{
      setScreenSize(window.innerWidth)
      //when am i going to need the width?
      //1- initial render (thats why we call handleResize)
      //2- on any resize 
    }
    window.addEventListener('resize',handleResize)
    handleResize()//on render
    
    return ()=>{
      window.removeEventListener('resize',handleResize)
    }

  },[])

  useEffect(()=>{
    if(screenSize<=900)
      setActiveMenu(false)
    else
      setActiveMenu(true)
  },[screenSize])


  return (
    <div className="flex justify-between p-2 md:mx-6 relative">
      <NavButton title='Menu' customFunc={()=>{setActiveMenu((prev)=>!prev)}} icon={<AiOutlineMenu/>} color={currentColor}/>

      <div className='flex'>
      <NavButton title='Cart' customFunc={()=>handleClick('cart')} icon={<FiShoppingCart/>} color={currentColor}/>
      {/*customFunc={()=>handleClick('cart')} otherwise will be executed on render not onclick  */}

      <NavButton title='Chat' customFunc={()=>handleClick('chat')} dotColor={currentColor} icon={<BsChatLeft/>} color={currentColor}/>
      

      <NavButton title='Notification' customFunc={()=>handleClick('notification')}  icon={<RiNotification3Line/>} dotColor={currentColor} color={currentColor}/>

      <TooltipComponent content="Profile" position='BottomCenter'>
        <div className='flex items-center gap-2 cursor-pointer p-1 hover:bg-light-gray rounded-lg' onClick={()=>handleClick('userProfile')}>
          <img src={avatar} className='rounded-full w-8 h-8' alt="" />
          <p>
            <span className='text-gray-400 text-14'>Hi, </span>
            <span className='font-bold text-gray-400 ml-1 text-14'>Mo'men</span>
          </p>
          <MdKeyboardArrowDown className='text-gray-400 text-14 '/>
        </div>
      </TooltipComponent>
{/* conditionally render these components , inside the same div///// */}
{/* handle click is in contextProvider */}
      {isClicked.cart && <Cart/>}
      {isClicked.chat && <Chat/>}
      {isClicked.notification && <Notification/>}
      {isClicked.userProfile && <UserProfile/>}

      </div>
    </div>
  )
}

export default NavBar