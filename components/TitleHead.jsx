import React from 'react'
import SlideUp from './UI/SlideUp'
import Image from 'next/image'
import link from '../public/images/linkicon.webp'
import traficLight from '../public/images/traficLights.png'

const TitleHead = ({title, subtitle, hidtitle, imgName, ...props}) => {
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
    <div className='flex flex-col w-full justify-center text-center lg:pt-20 lg:pb-8 pt-12 pb-4'>
        <div><Image src={src(imgName)} width={80} height={80} placeholder='blur' unoptimized/></div>
        <SlideUp className='lg:mt-4 lg:mb-12 mt-2 mb-6 text-3xl lg:text-5xl'>
            {title}
        </SlideUp>
        <SlideUp pauseFor={150} className=' mt-5 text-base lg:text-lg'>{subtitle}</SlideUp>
        <SlideUp pauseFor={300} className=' my-1 text-xs lg:text-base dark:text-gray-700 text-gray-200'>{hidtitle}</SlideUp>
    </div>
  )
}

export default TitleHead