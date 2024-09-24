import React from 'react'
import { AccumulationChartComponent, AccumulationSeriesCollectionDirective, AccumulationSeriesDirective, PieSeries, Inject ,AccumulationTooltip,AccumulationLegend,AccumulationDataLabel } from '@syncfusion/ej2-react-charts'
import { pieChartData } from '../../data/dummy'
import { Header } from '../../components'

const Pie = () => {
  return (
    <div className='m-8 md:m-10 p-5 md:p-10 bg-white rounded-3xl mt-20'>
      <Header title={'Inflation Rate in Percentage'} category={'charts'}/>
      <AccumulationChartComponent id='charts'>
      <Inject services={[AccumulationLegend, PieSeries, AccumulationTooltip, AccumulationDataLabel]}/>
      <AccumulationSeriesCollectionDirective>
        <AccumulationSeriesDirective dataSource={pieChartData} xName='x' yName='y' type='Pie'>
        </AccumulationSeriesDirective>
      </AccumulationSeriesCollectionDirective>
    </AccumulationChartComponent>
    </div>
  )
}

export default Pie