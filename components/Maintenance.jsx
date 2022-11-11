import Image from 'next/image'
import React from 'react'
import SlideUp from './UI/SlideUp'
import Construction from '../public/images/Construction.png'

const Maintenance = () => {
  return (
    <div className='justify-center flex'>
      <div className='z-30 flex flex-col justify-center text-center items-center h-screen bg-gray-50/30 dark:bg-gray-900/30 backdrop-blur w-11/12 lg:w-4/5'>
        <SlideUp className="flex overflow-visible" pauseFor={0}>
          <Image alt="" unoptimized src={Construction} height={100} width={100} placeholder="blur" className=" overflow-visible"/>
        </SlideUp>
        <div className="flex justify-center text-center transition-all space-x-4 items-center mb-4 overflow-visible">
          <SlideUp pauseFor={0} className=" text-2xl md:text-6xl font-bold">Идут строительные работы
          </SlideUp>
        </div>
        <div className="transition-all text-xl md:text-3xl md:my-2 flex space-x-2 flex-wrap justify-center">
          <SlideUp pauseFor={600}>{'Сайт '}</SlideUp>
          <SlideUp pauseFor={700}>{'становится '}</SlideUp>
          <SlideUp pauseFor={800} className=" bg-gradient-to-br from-yellow-500 via-amber-500 to-orange-500 text-transparent bg-clip-text ">
            лучше
          </SlideUp>
        </div>
        <SlideUp pauseFor={1000} className="mt-12 md:mt-24 text-[14px] md:text-xl">{'Прямо сейчас сайт меняется и поэтому требует уединения.'}</SlideUp>
        <SlideUp pauseFor={1000} className="text-[14px] md:text-xl">{'Вернитесь через некоторое время.'}</SlideUp>
      </div>
    </div>
  )
}

export default Maintenance