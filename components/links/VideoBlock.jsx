import Image from 'next/image'
import React from 'react'

const VideoBlock = ( {video, id, ...props} ) => {
  const dateTrim = (str) => {
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
      ans = days + ' дней назад'
    } else
    if (weeks < 5) {
      ans = weeks + " нед. назад"
    } else {
      ans = mths + " мес. назад"
    }

    return('Опубликованно ' + ans)
  }

  const ytLoader = ({ src }) => {
    return `https://i.ytimg.com/vi/${src}/maxresdefault.jpg`
  }

  const coloring = (id) => {
    if (id == "@NikitaNik_of")return "hover:shadow-purple-500/60 hover:dark:shadow-purple-800/50"
    if (id == "@NikitaNik_not_of")return "hover:shadow-red-500/60 hover:dark:shadow-red-800/50"
  }

  return (
    <a href={'https://www.youtube.com/watch?v=' + video.resourceId.videoId} className={coloring(id) + 'w-auto h-auto rounded-lg bg-gray-100 dark:bg-gray-700/50 transition-all hover:bg-gray-200 hover:dark:bg-gray-700/70 hover:shadow-xl'}>
        <Image className='rounded-lg' loader={ytLoader} src={video.resourceId.videoId} width={1280} height={720}/>
        <div className='m-3 px-2 text-[14px] lg:text-sm mb-4 pb-2 flex flex-col justify-between'>
          <div className=''>{video.title}</div>
          <div className='text-gray-600 mt-2 '>{dateTrim(video.publishedAt)}</div>
        </div>
    </a>
  )
}

export default VideoBlock