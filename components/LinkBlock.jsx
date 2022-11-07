import React, { cache } from "react";
import { useEffect, useState } from "react";
import Layout from "./Layout";
import MainButton from "./UI/MainButton";
import { useFetching } from "../hooks/useFetching";
import PostService from "../api/PostService";
import LoadingVideoBlock from "./links/LoadingVideoBlock";
import VideoBlock from "./links/VideoBlock";
import Image from "next/image";

const LinkBlock = ({ playlistID, channelID, body, pic, ...props}) => {
  const [vidList, setVidList] = useState([{}, {}, {}, {}]);
  const [fetchVids, isLoading, vidsError] = useFetching(async () => {
    const response = await PostService.getAll(playlistID);
    setVidList(response.data.items);
  });

  const coloring = (id) => {
    if (id == "@NikitaNik_of")return "bg-purple-300/50 dark:bg-purple-700/10"
    if (id == "@NikitaNik_not_of")return "bg-red-300/50 dark:bg-red-700/10"
  } 
  
  useEffect(() => {
    fetchVids();
  }, []);

  return (
    <div className="w-screen h-auto my-4">
      <Layout className={coloring(channelID) +" py-4"}>
        <div className="flex justify-between items-center">
          <div className="flex space-x-4 items-center">
            <Image alt="" src={pic} height={90} width={90} className="p-2 rounded-full"/>
            <div className="">
              <div className="text-base lg:text-2xl">{channelID}</div>
              <div className="text-[12px] lg:text-base text-gray-500">{body}</div>
            </div>
          </div>
          <a href={"https://youtube.com/"+ channelID +"/?sub_confirmation=1"}>
            <MainButton
              onClick={() => {
                console.log(vidList);
              }}
            >
              Подписаться
            </MainButton>
          </a>
        </div>
        <div className="my-4 grid grid-cols-2 lg:grid-cols-4 gap-6">
          {isLoading ?
          vidList.map(() => (
            <LoadingVideoBlock/>
          ))
          : 
          vidList.map((video) => (
            <VideoBlock id={channelID} key={video.etag} video={video.snippet}/>
          ))}
        </div>
      </Layout>
    </div>
  );
};

export default LinkBlock;
