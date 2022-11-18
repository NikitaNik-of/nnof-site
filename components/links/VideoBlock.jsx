import Image from 'next/image'
import React from 'react'
import { useState } from 'react'

const VideoBlock = ( {video, id, ...props} ) => {
  const [curDate, setCurDate] = useState()
  const dateTrim = (str, mode=0) => {
    let ans = ''
    let diff = Date.now() - Date.parse(str)
    let sec = Math.floor(diff / 1000)
    let min = Math.floor(diff / 60000)
    let hr = Math.floor(sec / 3600)
    let days = Math.floor(sec / 86400)
    let weeks = Math.floor(days / 7)
    let mths = Math.floor(days / 30)
    
    if (diff < 1000) {
      ans = 'прямо сейчас'
    } else
    if (sec < 60) {
      ans = sec + ' сек. назад'
    } else
    if (min < 60) {
      ans = min + ' мин. назад'
    } else
    if (hr < 24) {
      ans = hr + " ч. назад"
    } else
    if (days < 7) {
      ans = days + ' д. назад'
    } else
    if (weeks < 5) {
      ans = weeks + " нед. назад"
    } else {
      ans = mths + " мес. назад"
    }

    if (mode==0) return('Опубликованно ' + ans)
    else if (mode==1 && days < 7) return('ring-2 hover:ring-offset-1 ')
    else if (mode==2 && days < 7) return('visible ')
    else if (mode==2) return('hidden ')
  }

  const ytLoader = ({ src }) => {
    return `https://i.ytimg.com/vi/${src}/maxresdefault.jpg`
  }

  const coloring = (id, mode=0) => {
    if (id == "@NikitaNik_of" && mode==0)return " hover:shadow-violet-500/60 hover:dark:shadow-violet-800/50 ring-violet-500 "
    if (id == "@NikitaNik_not_of" && mode==0)return " hover:shadow-red-500/60 hover:dark:shadow-red-800/50 ring-red-500 dark:ring-red-600 "
    if (id == "@NikitaNik_of" && mode==1)return " bg-violet-500 "
    if (id == "@NikitaNik_not_of" && mode==1)return "bg-red-600 "
  }

  return (
    <a href={'https://www.youtube.com/watch?v=' + video.resourceId.videoId} className={dateTrim(video.publishedAt, 1) + coloring(id) + 'ring-offset-transparent ring-offset-0 relative w-auto h-auto rounded-lg bg-gray-100 dark:bg-gray-700/50 hover:-translate-y-1 hover:scale-[1.01] transition-all hover:bg-gray-200 hover:dark:bg-gray-600/50 hover:shadow-xl'}>
        <div className={coloring(id, 1) + dateTrim(video.publishedAt, 2) + ' -top-[1px] -right-[1px] absolute text-[14px] lg:text-sm py-1 px-2 rounded-tr-lg rounded-bl-lg'}>НОВЫЙ</div>
        <Image onBlur={true} alt="" className='rounded-lg' loader={ytLoader} src={video.resourceId.videoId} width={1280} height={720}/>
        <div className='m-3 px-2 text-[14px] lg:text-sm mb-4 pb-2 flex flex-col justify-between'>
          <div className=''>{video.title}</div>
          <div className='text-gray-600 mt-2 '>{dateTrim(video.publishedAt)}</div>
        </div>
    </a>
  )
}

export default VideoBlock