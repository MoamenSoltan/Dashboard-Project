import React from 'react'
import { ScheduleComponent,ViewsDirective,ViewDirective,Day,Week,WorkWeek,Month,Agenda,Inject,Resize,DragAndDrop } from '@syncfusion/ej2-react-schedule'
import { DatePickerComponent } from '@syncfusion/ej2-react-calendars'
import { scheduleData } from '../data/dummy'
import { Header } from '../components'
//notes: adding events then reloading wont save , because we arent connected to a database , we need a  full MERN application
const Calendar = () => {
  return (
    <div className='m-8 md:m-10 p-5 md:p-10 bg-white rounded-3xl mt-20 '>
      <Header category={'App'} title={"Calendar"}/>
      <ScheduleComponent eventSettings={{dataSource:scheduleData}} selectedDate={new Date(2021,0,10)} height='600px' width='100%'>
        <Inject services={[Day,Week,WorkWeek,Month,Agenda,Resize,DragAndDrop]}/>
      </ScheduleComponent>
    </div>
  )
}

export default Calendar
 //notes on Saving data 
 /**
  * Here are the summarized steps to save Syncfusion **ScheduleComponent** data to a database in a React project:

1. **Initialize the ScheduleComponent in React**:
   - Set up and configure the Syncfusion **ScheduleComponent** in your React application.
   - Ensure the component displays and manages schedule data correctly (e.g., appointments, tasks).

2. **Capture Event Data with Event Handlers**:
   - Use the `actionComplete` event to capture when users create, update, or delete schedule events.
   - The event argument (`args`) provides information about the action, including the event data (e.g., newly created or updated events).

3. **Set up an API in the Backend**:
   - Create a backend server (Node.js with Express or another backend framework) to handle incoming requests from the frontend.
   - Define an endpoint (e.g., `/api/schedule`) to receive the schedule event data.

4. **Send Event Data from Frontend to Backend**:
   - Use an HTTP client (like Axios) in React to send the schedule event data to the backend when events are created, updated, or deleted.

5. **Configure a Database**:
   - Set up a database (e.g., MongoDB, MySQL, or PostgreSQL) in the backend to store the schedule events.
   - Define a schema or table to hold event data (e.g., fields like event title, start time, end time, etc.).

6. **Save the Event Data in the Database**:
   - On the backend, write logic to insert or update the schedule event data in the database.
   - Use database-specific tools (like Mongoose for MongoDB or Sequelize for SQL databases) to handle data operations.

7. **Handle Errors and Data Validations**:
   - Ensure error handling both in the frontend (e.g., for failed API requests) and backend (e.g., for database errors).
   - Validate the schedule event data before saving it to the database.

8. **Fetch Saved Data to Populate the Schedule**:
   - When the ScheduleComponent is loaded, retrieve the saved events from the database and display them by setting the component’s `dataSource`.

By following these steps, you can ensure that the schedule data from the Syncfusion component is properly captured and saved in a database, allowing for persistent storage and retrieval.
  */
