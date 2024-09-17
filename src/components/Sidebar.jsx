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
const Sidebar = () => {
  const activeMenu = true;

  const activeLink='flex items-center gap-5 pl-4 pt-3 pb-2.5 rounded-lg text-white text-md m-2'
  const normalLink='flex items-center gap-5 pl-4 pt-3 pb-2.5 rounded-lg text-gray-700 dark:text-gray-200 dark:hover:text-black hover:bg-light-gray text-md m-2'

  return (
    <div className="overflow-auto md:overflow-hidden ml-3 h-screen md:hover:overflow-auto pb-10 ">
      {/* overflow is hidden on medium devices or larger , only on hover sow the scroll bar , also h-screen to make the scroll bar */}
      {/* overflow:auto only activates because of h-screen , we need to specify height */}
      {/* also here we define h-screen and overflow in the same classname , not in div containing sidebar in app.js, that only contains width because it wont change according to its content (width is stable) */}
      {activeMenu && (
        <>
          <div className="flex justify-between items-center ">
            <Link to='/' onClick={()=>{}} className="flex items-center gap-3 ml-3 mt-4 text-xl font-extrabold tracking-tight dark:text-white text-slate-900" >
                  <SiShopware/> <span>Shopify</span>
            </Link>
            <TooltipComponent content="Menu" position="BottomCenter">
              <button type="button" onClick={()=>{}} className="text-xl mt-4 p-3 rounded-full hover:bg-light-gray block md:hidden "><MdOutlineCancel/></button>
            </TooltipComponent>
          </div>

          <div className="mt-10">
            {
              links.map((item)=>(
                <div key={item.name}>
                  {/* item.name is unique */}
                  <p className="text-gray-400 m-3 mt-4 uppercase">{item.title}</p>
                  {
                    item.links.map((link)=>(
                      <NavLink to={`/${link.name}` } key={link.name} onClick={()=>{}} className={({isActive})=>isActive?activeLink:normalLink }>
{/* isActive here is destructured in a call back function parameter */}
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
