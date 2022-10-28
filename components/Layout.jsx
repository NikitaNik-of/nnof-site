import React from 'react'

const Layout = ({children, className}) => {
  return (
      <div className={className +' transition-colors'}>
        <div className='max-w-7xl px-2 w-full lg:w-4/5 lg:mx-auto'>
          {children}  
        </div>
      </div>
    )
}

export default Layout