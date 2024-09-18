import React from 'react'
import {BsCurrencyDollar} from 'react-icons/bs'
import {GoDotFill } from 'react-icons/go'
import {Stacked,Pie,Button,SparkLine} from '../components'
//in one line because of index.jsx in components
import {earningData,SparkLineAreaData,eComPieChartData, SparklineAreaData} from '../data/dummy'

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

      <div className='flex justify-center gap-10 flex-wrap '>
        <div className='bg-white md:w-5/6 dark:text-gray-200 dark:bg-secondary-dark-bg m-3 p-4 rounded-2xl '>
          <div className='flex justify-between'>
            
              <p className='text-xl font-semibold'>Revenue Updates</p>
              <div className='flex gap-4 items-center'>
                <p className='flex items-center gap-2 text-gray-600 hover:drop-shadow-xl cursor-pointer'>
                  <span><GoDotFill /></span>
                  <span>Expense</span>
                </p>
                <p className='flex items-center gap-2 text-green-400 hover:drop-shadow-xl cursor-pointer'>
                  <span><GoDotFill /></span>
                  <span>Budget</span>
                </p>
              </div>
    
          </div>
          <div className='mt-10 flex gap-10 flex-wrap justify-center'>
            <div className='border-r-1 border-color m-4 pr-10 '>
             <div>
             <span className='font-semibold text-xl'>$93,438</span>
              <span className='ml-2 text-white bg-green-500 p-1 rounded-full text-sm'>23%</span>
              <p className='text-gray-400 font-semibold'>Budget</p>
             </div>

             <div className='mt-10'>
             <span className='font-semibold text-xl'>$93,438</span>
              
              <p className='text-gray-400 font-semibold'>Expense</p>
             </div>

              {/* sparkLine component //visit syncfusion documentation for parameters*/}
              {/* here instead of defining the sparkLineComponent right away , we make the code more modular , by making our own component and passing data as props , implement the sparkLineComponent itself in the new component we made */}
              <div className='mt-5'>
                <SparkLine currentColor="gray" id="sparkline" type="Line" height="80px" width="250px" data={SparklineAreaData} color="gray" />
              </div>
              <div className='mt-10'>
                <Button color='white' bgColor="gray" text="Download Report" borderRadius="10px"/>
              </div>
            </div>

            {/* stacked graph */}
            <div>
              <Stacked width="320px" height="360px"/>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ECommerce
/**
 * Creating a custom component around the Syncfusion `SparkLineComponent` has several advantages compared to directly implementing the component itself:

1. **Reusability**: A custom component can be reused in different parts of your application, making it easier to maintain. If you need to use the `SparkLineComponent` with the same or slightly different props in multiple places, you can simply reuse the custom component.

2. **Abstraction**: By wrapping the `SparkLineComponent` in a custom component, you can hide unnecessary implementation details. This makes your code more modular and easier to understand. You can define default values, handle logic, or add additional functionality within your custom component.

3. **Consistency**: A custom component enforces consistency across your app. Whenever you want to modify or update how the `SparkLineComponent` behaves, you only need to update the custom component. This minimizes the chances of inconsistencies when rendering multiple sparkline components across the app.

4. **Flexibility**: You can provide a simpler API for other developers (or yourself) to use by wrapping the complex prop structure of the `SparkLineComponent` in a more intuitive interface. This also allows for easier future changes or enhancements.

5. **Separation of Concerns**: The custom component can handle state or additional logic, while the `SparkLineComponent` focuses solely on rendering. This separation leads to cleaner, more maintainable code, especially as your project grows.

Implementing a custom component fosters scalability and maintainability in larger applications.
 */