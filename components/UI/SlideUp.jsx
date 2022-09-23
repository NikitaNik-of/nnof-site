import React, { useEffect, useState } from 'react'

const SlideUp = ({pauseFor, className, children, ...props}) => {

  const [animCl, setAnimCl] = useState('opacity-0 ')

  useEffect(() => {
    setTimeout(setAnimCl, pauseFor, 'slide-top relative ')
  }, [])
  

  return (
    <div {...props} className={animCl + className}>
        {children}
    </div>
  )
}

export default SlideUp