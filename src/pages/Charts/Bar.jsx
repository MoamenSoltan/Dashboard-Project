import React from 'react'
import { ChartComponent,SeriesCollectionDirective,SeriesDirective,Inject,DateTime,Legend,Tooltip, LineSeries,SplineAreaSeries,BarSeries,Category,DataLabel } from '@syncfusion/ej2-react-charts'
import { barCustomSeries,barPrimaryXAxis,barPrimaryYAxis } from '../../data/dummy'
import { Header } from '../../components'

const Bar = () => {
  return (
    <div className='m-8 md:m-10 p-5 md:p-10 bg-white rounded-3xl mt-20'>
      <Header title={'Inflation Rate in Percentage'} category={'charts'}/>
      <ChartComponent width='100%' height='500' primaryXAxis={barPrimaryXAxis} primaryYAxis={barPrimaryYAxis} chartArea={{border:{width:0}}} tooltip={{enable:true}} legendSettings={{background:'white'}}>
        <Inject services={[BarSeries, Legend, Tooltip, DataLabel, Category]}/>
        <SeriesCollectionDirective>
          {
            barCustomSeries.map((item, index)=>(
              <SeriesDirective key={index} {...item}/>
            ))
          }
        </SeriesCollectionDirective>
      </ChartComponent>
    </div>
  )
}

export default Bar