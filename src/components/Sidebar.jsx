import React from "react";
import { Link, NavLink } from "react-router-dom";
// for routing
//both take : to='',onClick, styling , while nav link has a state that determines whether its active or not
//A <NavLink> is a special kind of <Link> that knows whether or not it is “active”. Now, let’s understand this with the help of an example. 
//it returns an isActive state and can apply logic or styling based on link state //isActive is destructured in a callback , ({isActive})=>{}
//nav link takes styling 
import { SiShopware } from "react-icons/si";
import { MdOutlineCancel } from "react-icons/md";
import { TooltipComponent } from "@syncfusion/ej2-react-popups";

import { links } from "../data/dummy";
import { useStateContext } from "../contexts/ContextProvider";
const Sidebar = () => {
  // const activeMenu = true;
  const {activeMenu,setActiveMenu,screenSize}=useStateContext()

  const activeLink='flex items-center gap-5 pl-4 pt-3 pb-2.5 rounded-lg text-white text-md m-2 bg-main-dark-bg'
  const normalLink='flex items-center gap-5 pl-4 pt-3 pb-2.5 rounded-lg text-gray-700 dark:text-gray-200 dark:hover:text-black hover:bg-light-gray text-md m-2 '

  const handleCloseSideBar=()=>{
    if(activeMenu&&screenSize<=900)
      setActiveMenu(false)
  }
  //use this function onCLick of any link so that if sideBar is opened on a small device , then when refering to another link , automatically close it
  //we set the active menu to false automatically if width is less than 900 , but in case the user opened sideBar explicitly then referred to another route on mobile , the this function comes in handy , small feature but useful
  return (
    <div className="overflow-auto md:overflow-hidden ml-3 h-screen md:hover:overflow-auto pb-10  ">
      {/* overflow is hidden on medium devices or larger , only on hover sow the scroll bar , also h-screen to make the scroll bar */}
      {/* overflow:auto only activates because of h-screen , we need to specify height */}
      {/* also here we define h-screen and overflow in the same classname , not in div containing sidebar in app.js, that only contains width because it wont change according to its content (width is stable) */}
      {activeMenu && (
        <>
          <div className="flex justify-between items-center ">
            <Link to='/' onClick={()=>handleCloseSideBar()} className="flex items-center gap-3 ml-3 mt-4 text-xl font-extrabold tracking-tight dark:text-white text-slate-900" >
                  <SiShopware/> <span>Shopify</span>
            </Link>
            {/* onClick , syntax is important,or just handleCloseSideBar without arrow or () */}
            <TooltipComponent content="Menu" position="BottomCenter">
              <button type="button" onClick={()=>{setActiveMenu((prevActiveMenu)=>(!prevActiveMenu))}} className="text-xl mt-4 p-3 rounded-full hover:bg-light-gray block md:hidden "><MdOutlineCancel/></button>
            </TooltipComponent>
          </div>

          <div className="mt-10">
            {
              links.map((item,index)=>(
                <div key={index}>
                  {/* item.name is unique */}
                  <p className="text-gray-400 m-3 mt-4 uppercase">{item.title}</p>
                  {
                    item.links.map((link)=>(
                      <NavLink to={`/${link.name}` } key={link.name} onClick={()=>handleCloseSideBar()}className={({isActive})=>isActive?activeLink:normalLink }>
{/* isActive here is destructured in a call back function parameter */}
{/* handleCloseSideBar() , it must be invoked , hence () */}
                            {link.icon}
                            <span className="capitalize">{link.name}</span>
                      </NavLink>
                    ))
                  }
                </div>
              ))
            }
          </div>

        </>
      )}
    </div>
  );
};

export default Sidebar;

/**method invoking explanation 
 * 
 * Exactly! Here's a clearer breakdown:

### 1. **If the function does not take any parameters:**
You can pass the function directly by its name, and React will invoke it when the `onClick` event occurs.

For example:
```js
<button onClick={handleCloseSideBar}>Close Sidebar</button>
```
In this case, React will automatically call `handleCloseSideBar` when the button is clicked. Since the function takes no parameters, you can pass it directly without parentheses.

### 2. **If the function takes parameters:**
If your function requires parameters, passing it directly like `handleClick('cart')` would **immediately invoke** the function when the component renders, which is not what you want for an event handler. To avoid this, you wrap it in a callback function like this:

```js
<button onClick={() => handleClick('cart')}>Open Cart</button>
```
Here:
- The arrow function `() => handleClick('cart')` creates a **callback** that is only executed when the button is clicked.
- This prevents `handleClick('cart')` from being called immediately when the component renders.

### Key points:
- **Without parameters:** You can directly pass the function reference, like `onClick={handleCloseSideBar}`.
- **With parameters:** You must wrap the function call in a callback, like `onClick={() => handleClick('cart')}`, to prevent it from executing during the render process.
 */