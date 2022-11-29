import React from 'react'
import settings from '../../api/settings.json'

const LinkButton = ({className, children, href, ...props}) => {

  const isSnow = (b) => {
    if (b) return <div style={{backgroundImage:'url(/snowlayer.png)'}} className=" skew-x-6 absolute bg-repeat-x h-full w-full inset-0 left-[2px]" />
    else return null
  }

  return (
    <a {...props} href={href} className={className + ' overflow-x-hidden hover:shadow-lg -skew-x-6 z-10 transition-all justify-self-stretch text-center border-2 grow rounded-lg py-2 px-4 my-1 mx-2'}>
        {isSnow(settings.isSnow)}
        <div className='skew-x-6'>{children}</div>
    </a>
  )
}

export default LinkButton