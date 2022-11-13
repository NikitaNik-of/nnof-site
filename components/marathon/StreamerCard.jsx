import Image from 'next/image'
import React from 'react'

const StreamerCard = ({ streamerInfo, times }) => {

  const skinLoader = ({ src }) => {
    return `https://render.skinmc.net/3d.php?user=${src}&hr=30&vr=-20&hrh=0&vrll=20&vrrl=-20&vrla=-20&vrra=20&aa=true&ratio=25`
  }

  return (
    <a href={"https://twitch.tv" + streamerInfo.name} className={'flex flex-row min-w-full sm:min-w-0 sm:flex-col my-4 justify-center items-center bg-gray-200/50 dark:bg-gray-800/50 p-6 rounded-lg m-2 mx-4 hover:-translate-y-1 hover:scale-[1.01] transition-all hover:bg-gray-300 hover:dark:bg-gray-700/50 hover:shadow-2xl ' + streamerInfo.hover}>
      <div className={'w-20 md:w-32 lg:w-40 p-px bg-gradient-to-bl rounded-lg ' + streamerInfo.color}>
        <div className='bg-gray-200 dark:bg-gray-900 rounded-lg'>
          <div className={'rounded-lg p-2 md:p-4 lg:p-6 ' + streamerInfo.mainColor}>
            <Image className='object-cover object-top aspect-square' alt="" loader={skinLoader} src={streamerInfo.MCName} width={393} height={849}/>
          </div>
        </div>
      </div>
      <div className='ml-4 sm:ml-0 text-left sm:text-center sm:mt-4 '>
        <div className='text-xl lg:text-2xl'>
          {streamerInfo.name}
        </div>
        <div className='sm:mt-1 text-base lg:text-lg text-gray-500'>
          {times[0] + " - " + times[1]}
        </div>
      </div>
    </a>
  )
}

export default StreamerCard