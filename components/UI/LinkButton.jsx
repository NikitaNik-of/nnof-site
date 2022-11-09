import React from 'react'

const LinkButton = ({className, children, href, ...props}) => {
  return (
    <a {...props} href={href} className={className + ' hover:shadow-lg -skew-x-6 z-10 transition-all justify-self-stretch text-center border-2 grow rounded-lg py-2 px-4 my-1 mx-2'}>
        <div className='skew-x-6'>{children}</div>
    </a>
  )
}

export default LinkButton