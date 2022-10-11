import React from 'react'
import SlideUp from './UI/SlideUp'
import Image from 'next/image'
import link from '../public/images/linkicon.webp'
import traficLight from '../public/images/traficLights.png'

const TitleHead = ({text, imgName, ...props}) => {
  function src(imgName) {
    switch (imgName) {
      case 'link':
        return(link)
    
      case 'trafic':
        return(traficLight)
    
      default:
        return(link)
    }
  }
  return (
    <div className='flex flex-col w-full text-2xl lg:text-4xl justify-center text-center lg:py-20 py-12'>
        <div><Image src={src(imgName)} width={80} height={80} placeholder='blur' unoptimized/></div>
        <SlideUp className='my-2'>
            {text}
        </SlideUp>
    </div>
  )
}

export default TitleHead