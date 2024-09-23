import logo from './logo.svg';
//notes : extra imports in app.js
import React from 'react';
import { useEffect } from 'react';
import { BrowserRouter,Routes,Route } from 'react-router-dom';
import {FiImage, FiSettings} from 'react-icons/fi'
import {TooltipComponent} from '@syncfusion/ej2-react-popups'

import {Navbar,Footer,Sidebar,ThemeSettings, NotFoundPage} from './components'
import {ECommerce,Orders,Calendar,Employees,Stacked,Pyramid,Customers,Kanban,Area,Bar,Pie,Financial,ColorPicker,ColorMapping,Editor,Line} from './pages'

import { useStateContext } from './contexts/ContextProvider';

import './App.css';

//what to learn 
//1- theming functionality
//2- index.jsx in components and pages for easier 
// 3- imports above import app.js
// 4-handle file/Folder structure first
// 5- routing imports in each component
// 6- links in dummy
//7- routes in app.js
// 8-routes explanation below
//9- patterns used in context api
//10-explanation for method invoking at the end of Sidebar page
//11-instant return for a component inside another (navButton on navBar)
// 12- nested components concept in navbar is crucial
//13-search for dummy data for any project
//14- uniform styling (bg-main-bg for nav , and bg-white for sideBar)
// 15- implementing a custom component that implements  premade components promotes reusability and consistency - read end of ECommerce file or sparkline
// 16- also Button component that returns a button
// 17- any data that would be too big for the current file , do like point 15 - 16 and also take notes from dummy.js , where all data needed for different component is located there , for cleaner code 
// 18- any thing that would be repeatedly used , make a component of it , like the header component , very simple but used multiple times
// 19- use spread operator for iterables (obj,arr) even as props , if the array holds props of a div for a component , you can iterate on each element using spread operator , it will transform each key value pair into a property of the component (read orders.jsx)
// 20- paging is the load more concept (see orders.jsx) // called pagination
// 21- all the array of objects stuff is to be fetched from an API 
//22-the cutomers page doesnt include the CRUD functinalities , we need to apply them , 
//23-learn CRUD , axios , async await ,login stuff
//24- missing the saving to DB , learn MERN app creation
//25-event handling and the event object technical names , more explanation in color picker page
//26- styling using js on colorPicker page
//27- notes on custom events and event driven programming below
function App() {
  // const activeMenu=true
  const {activeMenu}=useStateContext()//destructure from context

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
              

              <div>
                  <Routes>
                    {/* note : '/' means home , element property takes a component, we made the the first 1 twice to make it the main as well */}
                    {/* dashboard */}
                      <Route path='/' element={<ECommerce/>}/>
                      <Route path='/ecommerce' element={<ECommerce/>}/>

                    {/* pages */}

                    <Route path='/orders' element={<Orders/>}/>
                    <Route path='/employees' element={<Employees/>}/>
                    <Route path='/customers' element={<Customers/>}/>

                    {/* Apps */}
                    <Route path='/calendar' element={<Calendar/>}/>
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

                    {/* in case of a Not found Page */}

                    {/* <Route path='/*' element={<NotFoundPage/>}/> */}



                  </Routes>
                </div>
                </div>
            </div>

        </BrowserRouter>
    </div>
  );
}

export default App;
/**
 * The key distinction between the `Routes` in `App.js` and the `NavLink` in the `Sidebar` lies in their purposes within React Router:

1. **Routes in `App.js`:**
   - The `Routes` component defines **where** each component should be rendered based on the current URL. Each `Route` inside `Routes` specifies the path (URL) and the component that should be shown when the user navigates to that path.
   - In short, it tells React what content to display when a specific URL is visited.
   - For example, the route `path='/orders' element={<Orders/>}` means that when a user visits the `/orders` URL, the `Orders` component will be displayed in the main view.

2. **NavLink in `Sidebar`:**
   - The `NavLink` is used to **navigate** between the different routes. It’s a clickable link that changes the URL and, as a result, triggers the corresponding `Route` to display the correct component.
   - In the `Sidebar`, each `NavLink` is associated with a route (like `/orders`) and allows the user to click on it to change the URL. When the URL changes, React Router will look at the `Routes` defined in `App.js` and render the matching component.
   - For example, clicking on the `NavLink` for `/orders` will change the URL to `/orders`, which will trigger the route in `App.js` that displays the `Orders` component.

### In summary:
- **Routes in `App.js`**: Define the logic for what should be displayed when a specific path is visited.
- **NavLink in `Sidebar`**: Provides the navigation functionality, allowing users to change the URL and, as a result, render the associated route defined in `App.js`.

They work together: `NavLink` changes the URL, and the `Routes` define what should be rendered for that URL.
 */

/**------------------------------------
 * custom event and evet driven programming
 * Whether or not you need to master creating **custom events** depends on your specific development goals and the complexity of the projects you're working on. Here’s a breakdown to help you decide whether it’s necessary to master custom events:

### When Mastering Custom Events is Not Necessary:
1. **Using Established UI Libraries**:
   - If you're primarily working with frameworks and libraries like **Syncfusion**, **Material-UI**, **React**, or **Bootstrap**, these provide predefined components and events, making custom event creation less necessary. Most modern UI libraries handle the majority of event-driven interactions for you.
   - As long as you can attach and handle these library-specific events, such as `onClick`, `onSubmit`, or Syncfusion’s `actionComplete`, you won’t need to create custom events from scratch.
  
2. **Frontend-Only Development**:
   - For simpler frontend projects or when working on basic UI features, handling standard events (like click, change, submit) or using event handlers from libraries is often sufficient.

3. **Working on Established Systems**:
   - In large projects or existing codebases, you may rarely need to create new custom events. You would mostly work within the boundaries of the provided event handlers and modify behavior using built-in events and data passed through components.

### When Mastering Custom Events is Useful:
1. **Building Complex, Interactive Applications**:
   - If you're developing **custom components**, building your own **UI library**, or creating **reusable React components**, mastering custom events becomes important. This allows you to handle complex interactions between different components.
   - For example, in **React**, you might want to emit custom events between sibling components or to parent components to control more complex behavior, which goes beyond basic state and props management.

2. **Developing Custom Features or Widgets**:
   - When building highly interactive features (such as drag-and-drop interfaces, custom toolbars, or dashboards) where the default events are too limiting, custom events allow you to create fine-tuned interactions.
   - For example, if you’re creating a custom slider component or a complex form with multiple validations and states, using custom events can give you more control over the user interactions.

3. **Mastering JavaScript and Event-Driven Programming**:
   - Mastering custom events will deepen your understanding of **event-driven programming**, a fundamental concept in JavaScript. If you’re aiming to be a senior or lead developer, knowledge of how to emit and listen for custom events gives you more flexibility when building scalable, maintainable systems.

4. **Event-Driven Architectures**:
   - In systems where **microservices** or **backend event systems** (like **Node.js**, **WebSockets**, or **message queues**) play a role, you may need to trigger and listen to custom events to handle real-time data streams or complex workflows.

### How Custom Events Work (Conceptual Overview):
- In standard JavaScript, you can create a custom event using the `CustomEvent` constructor and dispatch it using the `.dispatchEvent()` method.
- In **React**, custom events can be handled using props, state, and context. However, there are advanced patterns (like **event emitters** or **Pub/Sub** systems) that allow components to communicate using custom events.
  
Example of a simple **JavaScript Custom Event**:
```javascript
const myEvent = new CustomEvent('myCustomEvent', { detail: { message: 'Hello World' } });
document.addEventListener('myCustomEvent', (e) => console.log(e.detail.message)); 
document.dispatchEvent(myEvent); // Outputs: Hello World
```

### Summary:
- **Not Necessary**: If your work revolves around **using existing libraries** and working on typical front-end web applications, mastering custom events may not be essential. Handling the events provided by libraries like Syncfusion, React, or Material-UI is typically sufficient.
- **Useful to Master**: If you plan to work on **advanced front-end architectures**, build your own libraries or components, or contribute to large, scalable applications with complex interactions, mastering custom events can provide more flexibility and power in how you handle interactivity.
 */
