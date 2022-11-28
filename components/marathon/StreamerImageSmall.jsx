import Image from 'next/image';
import React, { useState } from 'react'
import { useEffect } from 'react'
import skin from "../../public/images/skinPlaceholderHead.png";

const StreamerImageSmall = ( { className, ...props } ) => {
  const [blur, setBlur] = useState(true);
  const [cl, setCl] = useState(" opacity-0");
  const [tempClass, setTempClass] = useState(" opacity-1 animate-pulse");
  
  const unBlur = () => {
    setTempClass(" opacity-0")
    setCl(" opacity-1")
  }

  return (
    <div className='relative'>
      <Image alt="" className={className + tempClass + " absolute top-0 blur-md"} src={skin} height={50} />
      <Image alt="" onLoadingComplete={unBlur} className={className + cl + " mx-auto"} {...props} />
    </div> 
  )
}

export default StreamerImageSmall