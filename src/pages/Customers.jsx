import React from 'react'
import { GridComponent,ColumnDirective,ColumnsDirective,Resize,Sort,ContextMenu,Filter,Page,ExcelExport,PdfExport,Edit,Inject ,Search,Toolbar,Selection} from '@syncfusion/ej2-react-grids'

import { customersData,customersGrid } from '../data/dummy'

import { Button, Header } from '../components'

const Customers = () => {
  return (
    <div className='m-8 md:m-10 p-5 md:p-10 bg-white rounded-3xl mt-20'>
      <Header title={'Customers'} category={"page"}/>
      <GridComponent toolbar={['Delete','Search']}  
      allowSelection
      editSettings={{allowEditing:true,allowDeleting:true}} allowPaging allowSorting dataSource={customersData}>

        <ColumnsDirective>
        {
          customersGrid.map((item,index)=>(
            <ColumnDirective key={index} {...item} />
            // first is a checkbox , from the component itself , type:'checkbox'
          ))
        }
        
        </ColumnsDirective>
        <Inject services={[Page,Sort,Toolbar,Search,Selection,Edit,Filter]} />
      </GridComponent>
      
    </div>
  )
}

export default Customers