import React from 'react'

const Layout = ({children, className}) => {
  return (
      <div className={className +' transition-all'}>
        <div className='max-w-7xl px-2 w-11/12 lg:w-4/5 mx-auto '>
          {children}  
        </div>
      </div>
    )
}

export default Layout