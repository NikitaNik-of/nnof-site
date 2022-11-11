import Image from 'next/image'
import React from 'react'
import SlideUp from './UI/SlideUp'
import pooound from '../public/images/fist.webp'

const Intro = () => {
  return (
    <div className='z-30 flex flex-col justify-center text-center items-center h-screen bg-gray-50/30 dark:bg-gray-900/30 backdrop-blur-sm'>
      <div className="flex justify-center text-center transition-all space-x-4 items-center mb-8 overflow-visible">
        <SlideUp className="flex overflow-visible" pauseFor={0}>
          <Image alt="" unoptimized src={pooound} height={90} width={90} placeholder="blur" className=" overflow-visible"/>
        </SlideUp>
        <SlideUp pauseFor={0} className=" text-5xl lg:text-6xl font-bold">Йоу!
        </SlideUp>
      </div>
      <div className="transition-all text-2xl lg:text-3xl my-2 flex space-x-2 flex-wrap justify-center">
        <SlideUp pauseFor={600}>{'Добро '}</SlideUp>
        <SlideUp pauseFor={700}>{'пожаловать '}</SlideUp>
        <SlideUp pauseFor={800}>{'на '}</SlideUp>
        <SlideUp pauseFor={900} className=" bg-gradient-to-br from-emerald-500 via-cyan-500 to-indigo-500 text-transparent bg-clip-text ">
          мой сайт!
        </SlideUp>
      </div>
    </div>
  )
}

export default Intro