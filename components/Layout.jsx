import React from 'react'
import cl from './Layout.module.css'

const Layout = ({children}) => {
  return (
      <div className=' mt-12 transition-colors'>
        <div className='max-w-7xl w-4/5 mx-auto flex items-center'>
          {children}  
        </div>
      </div>
    )
}

export default Layout