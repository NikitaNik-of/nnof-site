import Image from 'next/image'
import React from 'react'
import pin from '../../public/images/pin.png'

const SubRules = ({bodyname, ...props}) => {
  return (
    <div className='bg-red-300/30 dark:bg-red-600/10 flex flex-col place-content-center items-center my-2 py-2'>
      <div className='m-2'><Image src={pin} width={65} height={65} placeholder='blur' unoptimized/></div>
      <div className="py-2 px-4 w-4/5 lg:w-auto text-center text-sm lg:text-base">
        <text className='text-base lg:text-lg'>Данные правила относятся ко всему контенту, который находится и распространяется в {bodyname}. </text><br className='mb-3'/>
        Вне зависимости от ситуации, <text className=' text-teal-600 dark:text-teal-300'>за модераторами последнее слово.</text><br className='mb-1'/>
        Они вправе самостоятельно выбрать соответвующее наказание без ограничений.
      </div>
    </div>
  )
}

export default SubRules