import logo from './logo.svg';
//notes : extra imports in app.js
import React from 'react';
import { useEffect } from 'react';
import { BrowserRouter,Routes,Route } from 'react-router-dom';
import {FiImage, FiSettings} from 'react-icons/fi'
import {TooltipComponent} from '@syncfusion/ej2-react-popups'

import {Navbar,Footer,Sidebar,ThemeSettings} from './components'
import {ECommerce,Orders,Calendar,Employees,Stacked,Pyramid,Customers,Kanban,Area,Bar,Pie,Financial,ColorPicker,ColorMapping,Editor,Line} from './pages'


import './App.css';

//what to learn 
//1- theming functionality
//2- index.jsx in components and pages for easier 
// 3- imports above import app.js
// 4-handle file/Folder structure first
// 5- routing imports in each component
// 6- links in dummy
function App() {
  const activeMenu=true
  return (
    <div className="App ">
        <BrowserRouter>
            <div className='flex relative dark:bg-main-dark-bg'>
              <div className='fixed right-4 bottom-4 ' style={{zIndex:'1000'}}>
                <TooltipComponent content="Settings" position="Center">
                  <button type="button" className='text-3xl p-4 hover:drop-shadow-xl
                   hover:bg-light-gray text-white '
                   style={{background:'gray',borderRadius:'50%'}}>
                    {/**background here is in inline style becuase when we apply theming , we are going to change it dynamically */}
                    <FiSettings/>
                  </button>
                </TooltipComponent>
              </div>
              {
                (activeMenu)?
                (
                  <div className='w-72 fixed sidebar dark:bg-secondary-dark-bg bg-white'>
                    <Sidebar/>
                  </div>
                ): (
                  <div className='w-0 dark:bg-secondary-dark-bg'>
                    <Sidebar/> {/**w-0 in tw means its invisible */}
                  </div>
                )
              }{/**conditional rendering to show the side bar according to a value (a state) */}
              <div className={`dark:bg-main-bg bg-main-bg  min-h-screen w-full ${activeMenu ? 'md:ml-72':'flex-2'}`}>
                {/**to avoid redundant code use template literal  */}
                <div className='fixed md:static bg-main-bg dark:bg-main-dark-bg navbar w-full'>
                  <Navbar/>
                </div>
              </div>

              <div>
                  <Routes>
                    {/* note : '/' means home , element property takes a component, we made the the first 1 twice to make it the main as well */}
                    {/* dashboard */}
                      <Route path='/' element={<ECommerce/>}/>

                    {/* pages */}

                    <Route path='/orders' element={<Orders/>}/>
                    <Route path='/employees' element={<Employees/>}/>
                    <Route path='/customers' element={<Customers/>}/>

                    {/* Apps */}
                    <Route path='/calnedar' element={<Calendar/>}/>
                    <Route path='/kanban' element={<Kanban/>}/>
                    <Route path='/editor' element={<Editor/>}/>
                    <Route path='/color-picker' element={<ColorPicker/>}/>

                    {/* Charts */}

                    <Route path='/line' element={<Line/>}/>
                    <Route path='/area' element={<Area/>}/>
                    <Route path='/bar' element={<Bar/>}/>
                    <Route path='/pie' element={<Pie/>}/>
                    <Route path='/financial' element={<Financial/>}/>
                    <Route path='/color-mapping' element={<ColorMapping/>}/>
                    <Route path='/pyramid' element={<Pyramid/>}/>
                    <Route path='/stacked' element={<Stacked/>}/>




                  </Routes>
                </div>
            </div>

        </BrowserRouter>
    </div>
  );
}

export default App;
