import React from 'react'
import SlideUp from './UI/SlideUp'
import Image from 'next/image'
import link from '../public/images/linkicon.webp'

const TitleHead = ({ ...props}) => {
  return (
    <div className='flex flex-col w-full text-2xl lg:text-4xl justify-center text-center space-x-4 lg:py-20 py-12'>
        <div><Image src={link} width={80} height={80} placeholder='blur'/></div>
        <SlideUp className='m'>
            Мои ссылки
        </SlideUp>
    </div>
  )
}

export default TitleHead