import React from 'react'
import {BsCurrencyDollar} from 'react-icons/bs'
import {GoPrimitiveDot} from 'react-icons/go'
import {Stacked,Pie,Button,SparkLine} from '../components'
//in one line because of index.jsx in components
import {earningData,SparkLineAreaData,eComPieChartData} from '../data/dummy'

import { useStateContext } from '../contexts/ContextProvider'

const ECommerce = () => {
  return (
    <div className='mt-12 '>
      <div className='flex flex-wrap lg:flex-nowrap justify-center'>
        {/* wrap and no wrap for divs that will contain cards  */}
        {/* nowrap:flex items laid out on a single line */}
        {/**flex items laid out on multiple lines */}
        <div className='bg-white w-full dark:text-gray-200 dark:bg-secondary-dark-bg h-44 rounded-xl lg:w-80 p-8 pt-9 m-3 bg-hero-pattern  bg-no-repeat bg-cover bg-center'>
          {/* bg-gradient-to-tr from-cyan-500 to-blue-500 */}
          {/* bg no repeat,cover,center */}
          {/* tailwind config file for bg img */}

          <div className='flex justify-between items-center'>
            <div>
              <p className='text-gray-950 font-bold'>Earnings</p>
              <p className='text-2xl'>$1,000,000</p>

            </div>
          </div>
          <div className='mt-5'>
            {/* nver add classname to a component , add it in a div then style the div for desired layout */}
            <Button  color="white" bgColor="gray" text="Download" borderRadius="10px" size="md" />
          </div>
        </div>
        <div className='flex mt-4 gap-1 flex-wrap justify-center items-center' >
          {
            earningData.map((item)=>(
              <div key={item.title} className='p-4 mr-3 bg-white rounded-2xl md:w-56 pt-9'>
                <button type='button' style={{color:item.iconColor,backgroundColor:item.iconBg}} className={`rounded-full p-4 text-2xl hover:drop-shadow-xl`}>
                  {item.icon}
                </button>
                <p className='mt-3'>
                  <span className='font-semibold'>{item.amount}</span>
                  <span className={`text-${item.pcColor} ml-2`}>{item.percentage}</span>
                </p>
                <p className='text-gray-400 text-sm'>{item.title}</p>
              </div>
            ))
          }
        </div>

      </div>
      {/* revenue section */}

      <div>
        
      </div>
    </div>
  )
}

export default ECommerce