import React from 'react'
import cl from './Layout.module.css'

const Layout = ({children}) => {
  return (
      <div className='mt-12 transition-colors'>
        <div className=' w-4/5 mx-auto'>
          {children}  
        </div>
      </div>
    )
}

export default Layout