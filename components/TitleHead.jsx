import React from 'react'
import SlideUp from './UI/SlideUp'
import Image from 'next/image'
import link from '../public/images/linkicon.webp'
import traficLight from '../public/images/traficLights.png'
import camera from '../public/images/camera.png'
import settings from "../api/settings.json";

const TitleHead = ({title, subtitle, hidtitle, imgName, ...props}) => {
  function src(imgName) {
    switch (imgName) {
      case 'link':
        return(link)
    
      case 'trafic':
        return(traficLight)
        
      case 'camera':
        return(camera)
    
      default:
        return(link)
    }
  }

  const issnow = (b) => {
    if (b) return " bg-gradient-to-b dark:from-white dark:via-cyan-100 dark:to-cyan-400 from-cyan-300 via-cyan-400 to-cyan-700 text-transparent bg-clip-text"
  }

  return (
    <div className={'flex flex-col w-full justify-center text-center lg:pt-20 lg:pb-8 pt-12 pb-4 overflow-visible' + issnow(settings.isSnow)}>
        <div className='flex justify-center'>
          <Image alt="" src={src(imgName)} width={80} height={80} placeholder='blur' unoptimized/>
        </div>
        <SlideUp className='lg:mt-4 lg:mb-12 mt-2 mb-6 text-3xl lg:text-5xl'>
            {title}
        </SlideUp>
        <SlideUp pauseFor={200} className=' mt-5 text-base lg:text-lg'>{subtitle}</SlideUp>
        <SlideUp pauseFor={300} className={' my-1 text-xs lg:text-base' + ( settings.isSnow ? "" :'dark:text-gray-700 text-gray-300')}>{hidtitle}</SlideUp>
    </div>
  )
}

export default TitleHead