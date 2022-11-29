import Image from 'next/image';
import React, { useState } from 'react'
import { useEffect } from 'react'
import skin from "../../public/images/skinPlaceholder.png";

const StreamerImage = ( { className, ...props } ) => {
  const [blur, setBlur] = useState(true);
  const [cl, setCl] = useState(" opacity-0");
  const [tempClass, setTempClass] = useState(" opacity-1 animate-pulse");
  
  const unBlur = () => {
    setTempClass(" opacity-0")
    setCl(" opacity-1")
  }

  return (
    <div className='relative'>
      <Image alt="" className={className + tempClass + " blur-md"} src={skin} width={393} height={849} />
      <Image alt="" onLoadingComplete={unBlur} className={className + cl + " absolute top-0"} {...props} />
    </div> 
  )
}

export default StreamerImage