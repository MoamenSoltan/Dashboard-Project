import React from 'react'

const Header = ({title,category}) => {
  return (
    <div className='mb-10'>
      <p className='text-gray-400 capitalize '>{category}</p>
      <p className='tracking-tight font-extrabold text-3xl text-slate-900'>{title}</p>
    </div>
  )
}

export default Header