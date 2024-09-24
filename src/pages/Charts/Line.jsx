import React from 'react'
import { Header,LineChart } from '../../components'

const Line = () => {
  return (
    <div className='m-8 md:m-10 p-5 md:p-10 bg-white rounded-3xl mt-20 '>
      <Header title={'Inflation Rate'} category={'Charts'}/>
      <div className='w-full'>
        <LineChart />

      </div>
    </div>
  )
}

export default Line