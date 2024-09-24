import React, { useContext, useState } from "react";
/**key points 
 * 1- make a context and export a function that returns the provider (which will have the states and values and also take children)
 * 2- export and make a function that accesess the useContext hook storing our context
 * 3- wrap app with the provider in index.js 
 * 4- any where in the project where we need a state , we import the useStateContext
 * 5- destructure the needed state from the useStateContext , const {activeMenu}=useStateContext()//very important
*/

const StateContext=React.createContext()

const initialState={
    chat:false,
    cart:false,
    userProfile:false,
    notification:false
}//?

export const ContextProvider = ({children})=>{//ContextProvider not contextProvider
    //defined as a function to allow us to initialize a state as well as pass everything related to the state in the provider value property
//destructuring the children prop so we dont use props.children'

    const [activeMenu, setActiveMenu] = useState(true)
    const [isClicked, setisClicked] = useState(initialState)
    const [screenSize,setScreenSize]=useState(undefined)
    //because we dont know the width at first

    const [themes,setThemes]=useState(false)

    const [currentColor, setCurrentColor] = useState('#03c9d7')

    const [currentMode, setCurrentMode] = useState('Light')


    // setter functions , better practice
    //we made the setter here , for cleaner code and also we need to save the value to local storage , if we want to do the same in ThemeSettings.jsx it wouldnt look clean
    const setMode=(mode)=>{
        // setCurrentMode(e.target.value)
        // no need for e.target.value because we are passing a string
        setCurrentMode(mode)

        // to save the value even on refresh , we save it on localStorage
        // localStorage.setItem('themeMode',e.target.value)
        localStorage.setItem('themeMode',mode)
        setThemes(false)

    }

    const setColor=(color)=>{
        setCurrentColor(color)
        // very important , color here is the first parameter (of only 1 parameters) passed to setColor in ThemeSettings , as buttons (in themesettings) don't have onCHange , we cant use e.target.value here , we can access the first parameter by using any name as a parameter for this function , this is reqular programming , dont make it complex 

        // to save the value even on refresh , we save it on localStorage
        localStorage.setItem('colorMode',color)

        // also i want to close the theme options menu upon selecting a color
        setThemes(false)
    }


    const handleClick=(clicked)=>{
        // setActiveMenu((prev)=>({...prev,[clicked]:true}))
        setisClicked({...initialState,[clicked]:true})
    }
    //square brackets on clicked to make it dynamic .
    //like the form example
    /**[clicked]: true: The square brackets allow you to use the value of clicked as the property name.
Without the brackets, JavaScript would treat clicked as a literal string, and you wouldn't be able to dynamically set the property name based on a variable. */
    return (
        <StateContext.Provider value={{
            activeMenu:activeMenu,//or just activeMenu, (because key and value have the same name)
            setActiveMenu,
            isClicked,
            setisClicked,
            handleClick,
            screenSize,
            setScreenSize,
            setThemes,
            themes,
            currentColor,
            setCurrentColor,
            currentMode,
            setCurrentMode,
            setMode,
            setColor


        }}>
            {children}
        </StateContext.Provider>
    )
}

export const useStateContext=()=>useContext(StateContext)
//? why is it a function ? essentially a custom hook to pass value globally , because one of the rules of hooks (in this case useContext) is that it must be called in a function component , which in this case there are none , thats why we call it in a function

//we need the useStateContext if we wish to consume a value from provider , any place in our app
//the value in a provider can be either a state or setState

//note: in short : we define the provider and consumer in this file , wrap app.js with provider function , import useStateContext (stores value in provider) in any file to consume value in a provider , also any shared state will be defined here
// then destructure the wanted value from the useStateContext in wanted file like , const {activeMenu} =useStateContext()

//next step is to wrap the app.js with the provider (in index.js) so that we can use it in all of the application 
//thats why we made the children prop , as the app is going to be considered a child of the provider


//states shared across the app are created here


/**notes
 * 1. Why Store the Provider in a Function (ContextProvider) Instead of Exporting It Right Away?
The ContextProvider is stored in a function because: (main reason is so that i can initialize state (useState) and apply logic at the same time)

State Management: In React, state is often dynamic and can change based on user actions or other events. The useState hook is used to manage state inside this provider function (e.g., activeMenu).
Component Wrapping: The function (ContextProvider) serves as a wrapper component that will encapsulate your application and pass the context values (such as state) down to its children. By placing it in a function, you can initialize state and logic (like activeMenu, setActiveMenu) and expose these values to the entire app through the value prop of the StateContext.Provider.
Reusability: Wrapping the logic in the provider allows the whole application (or any part wrapped in it) to access shared state. Without this wrapper, you wouldn't be able to manage or update the state dynamically across your app.
 
Why is useStateContext a Function Instead of Just a Variable?
The reason useStateContext is a function is because: (main reason , because useContext hook needs to be in a function or a hook to be accessed globally)

Custom Hook: useStateContext is essentially a custom hook that allows you to access the StateContext values (the shared state) wherever you need them in your app. Since useContext is itself a hook, it needs to be called inside a function component or a custom hook (like useStateContext), not in a global scope or as a variable.
Simplicity & Abstraction: Wrapping useContext inside useStateContext simplifies the process of consuming context in other components. Instead of writing useContext(StateContext) everywhere, you simply call useStateContext(). It abstracts away the details and makes your code more readable.

const state = useContext(StateContext);  // Won't work like this globally!



these are called patterns 

Summary:
ContextProvider Function: It allows you to initialize state (useState) and logic in one place and pass it to the entire app through the provider. The app components are children of this provider and can share state via the context.
useStateContext Function: This is a custom hook that wraps useContext(StateContext), making it easier and cleaner to access the shared state from anywhere in your app. It simplifies context consumption.
Using this pattern helps manage and share state across multiple components effectively in larger applications.

*/