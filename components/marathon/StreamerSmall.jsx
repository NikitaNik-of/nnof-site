import React from 'react'
import { useState } from 'react'
import maraInfo from "../../api/streamers.json"
import StreamerImage from './StreamerImage'
import StreamerImageSmall from './StreamerImageSmall'

const StreamerSmall = ( {pos, stremID, times, className} ) => {
  const skinLoader = ({ src }) => {
    return `https://render.skinmc.net/3d.php?user=${src}&vr=-30&hr0&hrh=45&aa=&headOnly=true&ratio=50`;
  };
  const[streamerInfo, setStreamerInfo] = useState(maraInfo.profiles[stremID - 1])

  return (
    <div className={className +
        " flex flex-row min-w-full md:min-w-0 md:justify-start items-center bg-gray-200/50 dark:bg-gray-800/50 my-2 rounded-lg" +
        streamerInfo.hover}>
      <div className={"p-px bg-gradient-to-bl rounded-lg aspect-square " + streamerInfo.color}>
        <div className="bg-gray-200 dark:bg-gray-900 rounded-lg">
          <div className={"rounded-lg p-2 " + streamerInfo.mainColor}>
            <StreamerImageSmall
              className="mx-auto"
              alt=""
              loader={skinLoader}
              src={streamerInfo.MCName}
              width={40}
              height={40}
            />
          </div>
        </div>
      </div>
      <div className="ml-4 text-left">
        <div className="">{streamerInfo.name}</div>
        <div className="md:mt-1 text-sm text-gray-500">
          {times[pos] + " - " + times[pos + 1]}
        </div>
      </div>
    </div>
  )
}

export default StreamerSmall