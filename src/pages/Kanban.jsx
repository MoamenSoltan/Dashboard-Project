import React from 'react'
import { Header } from '../components'
import { KanbanComponent,ColumnDirective,ColumnsDirective } from '@syncfusion/ej2-react-kanban'

import { kanbanData ,kanbanGrid} from '../data/dummy'

const Kanban = () => {
  return (
    <div className='m-8 md:m-10 p-5 md:p-10 bg-white rounded-3xl mt-20 '>
      <Header title={'To-Do List'} category={'app'}/>
      <KanbanComponent id='kanaban' dataSource={kanbanData} cardSettings={{
        headerField:'Id',
        // from kanban data , means i want the title to be that specific property of the object
        contentField:'Summary',
      }} keyField='Status'>
        {/* keyfield must be status??
        no its defined in the grid of each column directive , as a prop of keyField , which takes open or testing , the same values in status */}
        <ColumnsDirective>

          {
            kanbanGrid.map((item, index) => (
              <ColumnDirective key={index} {...item} />
            ))
          }
        </ColumnsDirective>
      </KanbanComponent>

    </div>
  )
}

export default Kanban