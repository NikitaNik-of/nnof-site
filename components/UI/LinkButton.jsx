import React from 'react'

const LinkButton = ({className, children, href, ...props}) => {
  return (
    <a {...props} href={href} className={className + ' z-10 transition-colors justify-self-stretch text-center border-2 grow rounded-lg py-2 px-4 m-1'}>
        {children}
    </a>
  )
}

export default LinkButton