import React from 'react'
import { ChartComponent,SeriesCollectionDirective,SeriesDirective,Inject,DateTime,Legend,Tooltip, LineSeries } from '@syncfusion/ej2-react-charts'
import { lineCustomSeries,LinePrimaryXAxis,LinePrimaryYAxis } from '../../data/dummy'

const LineChart = () => {
  return (
    <div>
      <ChartComponent width='100%' height='500' primaryXAxis={LinePrimaryXAxis} primaryYAxis={LinePrimaryYAxis} chartArea={{border:{width:0}}} tooltip={{enable:true}} legendSettings={{background:'white'}}>
        <Inject services={[LineSeries,Legend, DateTime, Tooltip]}/>
        <SeriesCollectionDirective>
          {
            lineCustomSeries.map((item, index)=>(
              <SeriesDirective key={index} {...item}/>
            ))
          }
        </SeriesCollectionDirective>
      </ChartComponent>
    </div>
  )
}

export default LineChart