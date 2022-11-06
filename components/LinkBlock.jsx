import React from "react";
import { useEffect, useState } from "react";
import Layout from "./Layout";
import MainButton from "./UI/MainButton";
import { useFetching } from "../hooks/useFetching";
import PostService from "../api/PostService";
import LoadingVideoBlock from "./links/LoadingVideoBlock";
import VideoBlock from "./links/VideoBlock";
import Image from "next/image";
import ytl from "../public/images/logos/yt_profile.jpg"

const LinkBlock = (props) => {
  const [vidList, setVidList] = useState();
  const [fetchVids, isLoading, vidsError] = useFetching(async () => {
    const response = await PostService.getAll();
    setVidList(response.data.items);
  });

  useEffect(() => {
    fetchVids();
  }, []);

  return (
    <div className="w-screen h-auto my-4">
      <Layout className=" bg-purple-300/50 dark:bg-purple-700/10 py-4">
        <div className="flex justify-between items-center">
          <div className="flex space-x-4 items-center">
            <Image src={ytl} height={90} width={90} className="p-2 rounded-full"/>
            <div className="">
              <div className="text-lg lg:text-2xl">@NikitaNik_of</div>
              <div className="text-sm lg:text-base text-gray-500">
                Самая главная часть контента
              </div>
            </div>
          </div>
          <a href="https://youtube.com/@nikitanik_of/?sub_confirmation=1">
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
          {isLoading ? <LoadingVideoBlock/> : 
          vidList.map((video) => (
            <VideoBlock key={video.etag} video={video.snippet}/>
          ))}
        </div>
      </Layout>
    </div>
  );
};

export default LinkBlock;
