import React, { cache } from "react";
import { useEffect, useState } from "react";
import Layout from "./Layout";
import MainButton from "./UI/MainButton";
import { useFetching } from "../hooks/useFetching";
import PostService from "../api/PostService";
import LoadingVideoBlock from "./links/LoadingVideoBlock";
import VideoBlock from "./links/VideoBlock";
import Image from "next/image";
import cat from "../public/images/KOT.png";

const LinkBlock = ({ playlistID, channelID, body, pic, ...props }) => {
  const [vidList, setVidList] = useState([
    { id: 0 },
    { id: 1 },
    { id: 2 },
    { id: 3 },
  ]);
  const [fetchVids, isLoading, vidsError] = useFetching(async () => {
    const response = await PostService.getAll(playlistID);
    setVidList(response.data.items);
  });

  const coloring = (id) => {
    if (id == "@NikitaNik_of") return "bg-purple-300/30 dark:bg-purple-800/20";
    if (id == "@NikitaNik_not_of") return "bg-red-300/30 dark:bg-red-800/20";
  };

  useEffect(() => {
    fetchVids();
  }, []);

  return (
    <div className="w-screen h-auto my-4">
      <Layout className={coloring(channelID) + " py-4"}>
        <div className="flex flex-col sm:flex-row justify-between items-center">
          <div className="flex items-center">
            <Image
              alt=""
              src={pic}
              height={90}
              width={90}
              className="p-2 rounded-full"
            />
            <div className="mx-2">
              <div className="text-base lg:text-2xl">{channelID}</div>
              <div className="text-[12px] lg:text-base text-gray-500">
                {body}
              </div>
            </div>
          </div>
          <div>
            <a
              className={
                channelID == "@NikitaNik_not_of" ? "visible" : "hidden"
              }
              href="https://www.twitch.tv/nikitanik_of/"
            >
              <MainButton type="violet">Прямой эфир</MainButton>
            </a>
            <a
              href={"https://youtube.com/" + channelID + "/?sub_confirmation=1"}
            >
              <MainButton type="red">Подписаться</MainButton>
            </a>
          </div>
        </div>
        {vidsError == "Network Error" ? (
          <div className="flex flex-col justify-center text-center items-center my-4 py-6 bg-gray-300/50 dark:bg-gray-700/40 rounded-lg shadow-xl shadow-red-700/20">
            <Image alt="" src={cat} width={170} onBlur />
            <div>Привет! Кажется, это страница успела загрузиться до того, как отключился интернет...</div>
            <div>Пока что здесь лежит только кот</div>
          </div>
        ) : (
          <div className="my-4 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {isLoading
              ? vidList.map((vid) => <LoadingVideoBlock key={vid.id} />)
              : vidList.map((video) => (
                  <VideoBlock
                    id={channelID}
                    key={video.etag}
                    video={video.snippet}
                  />
                ))}
          </div>
        )}
      </Layout>
    </div>
  );
};

export default LinkBlock;
