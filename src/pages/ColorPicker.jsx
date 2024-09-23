import React from 'react'
import { ColorPickerComponent } from '@syncfusion/ej2-react-inputs'
import { Header } from '../components'

const ColorPicker = () => {

  const change=(args)=>{
    // args could be any name , its the event argument , in the context of color picker component , it has multiple methods and properties , use log to view them , here wee need the current value prop
    console.log(args);
    
    document.getElementById('preview').style.backgroundColor=args.currentValue.hex
  }

  return (
    <div className='m-8 md:m-10 p-5 md:p-10 bg-white rounded-3xl mt-20'>
      <Header title={'Color Picker'} category={'App'}/>
      <div className='text-center'>
        <div id='preview'/>
        <div className='flex justify-center items-center gap-20 flex-wrap'>
          {/* wrap for smaller devices so that we wont get a horizontal scroll bar */}
        <div>
            <p className='font-semibold text-2xl mt-2 mb-4'>Inline Pallete</p>
            <ColorPickerComponent id='inline-pallete' mode='Palette' modeSwitcher={false} inline showButtons={false}
            change={change}/>
            
          </div>
          
          <div>
            <p className='font-semibold text-2xl mt-2 mb-4'>Inline Picker</p>
            <ColorPickerComponent id='inline-picker' mode='Picker' modeSwitcher={false} inline showButtons={false}
            change={change}/>
            {/* change here is an event , and the functions that will happen during this event (event handler - called change as well ), take an args parameter (or any name , the parameter is called an event object) 
            ,  The args object contains information about the specific action that has occurred in the component (e.g., creating, modifying, or deleting an event). to view all properties and methods in the args object , log in console , also look in notes below*/}
          </div>

        </div>
      </div>
    </div>
  )
}

export default ColorPicker
//notes 
//event-->eventhandler-->args parameter(event object)-->the obj contains all relative info on the event and can be used in making the logic of the handler -->log event object for the info inside and properties of the event

// summary : all event handlers (functions that occur in case of a certain event ) receive an args or event parameter called event object


/** Yes, in general, most event handlers, especially in libraries like **Syncfusion** and in JavaScript/React development, receive an `args` or `event` parameter. This parameter is technically referred to as the **event object**, and it contains relevant data about the event that was triggered. The properties of the event object can vary depending on the event type and the library used.

### Key Points:

1. **Event Object (`args` or `event`)**:
   - In Syncfusion components (and many other UI libraries), event handlers are passed an **event object** when an event is triggered. This object is typically called `args` in Syncfusion, but it is often called `event` in standard JavaScript/React.
   - The event object contains information about what occurred during the event, such as:
     - **The type of action performed** (e.g., a button click, an item being added, or an item being edited).
     - **Data related to the event**, such as the target element, any data being manipulated, or status information.
     - **Methods** that you can call, such as `preventDefault()` or `stopPropagation()` in standard JavaScript events, or similar functionalities in custom libraries.

2. **Technical Name of the Event Data**:
   - The **event object** (referred to as `args` in Syncfusion) is the technical term for the object that holds the data about the event.
   - This event object in Syncfusion contains specific information about the action that triggered the event. It holds properties like `requestType`, `data`, `cancel`, and more, which can vary based on the Syncfusion component (e.g., **ScheduleComponent**, **RichTextEditorComponent**, etc.).

3. **Custom Events in Syncfusion**:
   - **Yes, Syncfusion creates custom events**. While Syncfusion builds on the standard concept of JavaScript events, they extend it by adding their own custom events and event objects, tailored to their components.
   - These custom events (like `actionComplete`, `eventRendered`, etc.) are designed to suit specific functionality for Syncfusion’s advanced UI components. The `args` object in these events is a custom implementation by Syncfusion, containing not just standard event data but also component-specific details.
   - For example, in the **ScheduleComponent**, Syncfusion might add properties like `addedRecords`, `changedRecords`, `deletedRecords`, which are not part of native JavaScript events but are necessary for handling schedule-specific actions.

### General Structure of Events:

1. **Native JavaScript Events**:
   - In standard DOM events (like `click`, `submit`, etc.), the event object (`event`) holds properties like `target`, `type`, `currentTarget`, and methods like `preventDefault()`.
   - Example:
     ```javascript
     const handleClick = (event) => {
       console.log(event.target); // Logs the element that triggered the click
     };
     ```

2. **Custom Events in Libraries (like Syncfusion)**:
   - Syncfusion extends this concept, providing more contextual data depending on the event type. For instance, when an event is triggered in the **ScheduleComponent**, Syncfusion's `args` object provides details specific to the scheduling process, such as the event data, action type, and more.
   - Example:
     ```javascript
     const onActionComplete = (args) => {
       console.log(args.requestType); // Logs the type of action (e.g., "eventCreated")
       console.log(args.addedRecords); // Logs newly added events
     };
     ```

### Does Syncfusion Create Custom Events?
- **Yes**, Syncfusion components create and manage their own custom events. These events are designed to handle interactions specific to their UI components. Syncfusion also adds additional properties and methods to the standard event object, so their event object (often referred to as `args`) contains Syncfusion-specific data and methods.

### Summary:
- Most events, including those in Syncfusion, receive an event object (`args` or `event`) that provides data about the action that triggered the event.
- The event object is technically called the **event object**, which holds various properties depending on the type of event.
- Syncfusion builds **custom events** for their components, extending the standard event system by adding specific properties and methods in the event object (`args`), providing more detailed and contextual information about the component's behavior.
 * 
 * 
 * 
 * 
 * 
 * /////////////////////////
 * To view methods and properties that args holds in Syncfusion components, such as the ScheduleComponent or RichTextEditorComponent, you can use console.log(args) within an event handler to inspect all the properties and methods available on the args object.

Here’s a step-by-step guide to log and explore the args object:

Steps to View args Properties and Event Handlers
Add an Event Handler: Attach an event handler (like actionComplete, change, or click depending on the component you're using) to the Syncfusion component.

Use console.log(args): Inside the event handler, log the args object to the browser’s console. This will show you all the properties and event handlers that the args object holds.

Inspect in the Browser DevTools: Open the browser's developer tools (F12 or Ctrl+Shift+I in most browsers) and go to the Console tab to see the logged args object. You can expand the object to view all the available properties and methods.
 */

