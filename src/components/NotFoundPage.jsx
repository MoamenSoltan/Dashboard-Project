import React from 'react'
import Header from './Header'

const NotFoundPage = () => {
  return (
    <div className='p-10 m-4 mt-52 rounded-xl bg-white text-center h-'>
        <Header title={'Error 404'} category={'Page not Found'}/>
    </div>
  )
}

export default NotFoundPage