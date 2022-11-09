import React, { useEffect, useState } from 'react'

const FadeIn = ({pauseFor, className, children, ...props}) => {

  const [animCl, setAnimCl] = useState('opacity-0 ')
  useEffect(() => {
    setTimeout(setAnimCl, pauseFor, 'fadeIn ')
  }, [])
  
  return (
    <div {...props} className={animCl + className}>
        {children}
    </div>
  )
}

export default FadeIn