import React from 'react'

const LoadingVideoBlock = () => {
  return (
    <div className='w-auto h-auto rounded-lg bg-gray-100 dark:bg-gray-700/50 transition-all'>     
        <div className="animate-pulse">
          <div className=' bg-gray-700/50 rounded-lg aspect-video'/>
          <div className='m-3 px-2 text-[14px] lg:text-sm mb-4 pb-2 flex flex-col justify-between '>
            <div className='mt-2 bg-gray-600 rounded-lg h-5'></div>
            <div className='mt-2 bg-gray-600 rounded-lg h-5'></div>
            <div className='mt-8 bg-gray-700 rounded-lg h-4'></div>
          </div>
        </div>
    </div>
  )
}

export default LoadingVideoBlock