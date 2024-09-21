import React, { useRef } from 'react'
import { GridComponent,ColumnDirective,ColumnsDirective,Resize,Sort,ContextMenu,Filter,Page,ExcelExport,PdfExport,Edit,Inject ,Search,Toolbar} from '@syncfusion/ej2-react-grids'

import { employeesData,employeesGrid } from '../data/dummy'

import { Button, Header } from '../components'
const Employees = () => {
  const gridRef=useRef(null)//we need a reference to the grid component for the export pdf and excel
  console.log(gridRef);
  
  const handlePDFExport = () =>{//on button click , chick if ref exists (optional) then access ref.current to make the grid component export pdf or excel 
    if(gridRef && gridRef.current){
      console.log('stated pdf export');
      
      gridRef.current.pdfExport()
    }
  }

    
  const handleExcelExport = () =>{
    if(gridRef && gridRef.current){
      console.log('started excel export');
      
      gridRef.current.excelExport()
    }
  }
  return (
    <div className='m-8 md:m-10 p-5 md:p-10 bg-white rounded-3xl mt-20'>
      <Header title={'Employees'} category={'page'}/>
      <GridComponent ref={gridRef} allowPdfExport={true} allowExcelExport={true} dataSource={employeesData} allowPaging allowFiltering  allowSorting toolbar={['Search']} width='auto'>

        <ColumnsDirective>
        {
          employeesGrid.map((item, index) => (
            <ColumnDirective key={index}  {...item}/>
          ))
        }
        </ColumnsDirective>
        <Inject services={[Resize, Sort, ContextMenu, Filter, Page, ExcelExport, PdfExport, Edit,Search,Toolbar]}/>
      </GridComponent>
      <div className=' mt-10 m-auto w-4/6 flex justify-between items-center'>
      <Button color={'white'} text={'export to PDF'} bgColor={'red'} borderRadius={10} customFunc={()=>handlePDFExport}/>
      <Button color={'white'} text={'export to excel'} bgColor={'green'} borderRadius={10} customFunc={()=>handleExcelExport} />

      </div>
    </div>
  )
}

export default Employees