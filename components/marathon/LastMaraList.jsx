import React from "react";
import { PhotoIcon } from "@heroicons/react/24/outline";
import Layout from "../Layout";
import LinkButton from "../UI/LinkButton";
import links from "../../api/links.json"
import MainButton from "../UI/MainButton";
import Link from "next/link";
import StreamerSmall from "./StreamerSmall";

const LastMaraList = ({ marathons, curMar }) => {
  return (
    <div className="bg-gray-200 dark:bg-gray-800 my-16 -skew-y-3 py-4 md:p-4 text-center">
      <div className=" text-lg md:text-2xl mt-4 mb-2 skew-y-3">Прошедшие эстафеты</div>
      <div className=" text-sm md:text-base my-4 skew-y-3 flex flex-col justify-center items-center w-11/12 mx-auto">
        <div className=" text-gray-600 dark:text-gray-500">Все анонсы публикуются в <text className="text-[#5865F2]">Discord</text> и в <text className="text-[#0088cc]">Telegram</text></div>
        <div className="flex flex-wrap justify-around">
          <LinkButton className={links.linkBtn[5].classBtn} href={links.linkBtn[5].href}>{links.linkBtn[5].name}</LinkButton>
          <LinkButton className={links.linkBtn[2].classBtn} href={links.linkBtn[2].href}>{links.linkBtn[2].name}</LinkButton>
          <Link href="/links"><MainButton>Остальные ссылки</MainButton></Link>
        </div>
      </div>
      <Layout className="mt-5">
        <div className="skew-y-3 relative">
          <div className="bg-gradient-to-l from-transparent to-gray-200 dark:to-gray-800 w-6 md:w-16 h-full absolute left-0 z-10" />
          <div className="bg-gradient-to-r from-transparent to-gray-200 dark:to-gray-800 w-6 md:w-16 h-full absolute right-0 z-10" />
          <div className="overflow-x-auto grid grid-rows-1 grid-flow-col text-left px-6 md:px-16 space-x-4 bg-white dark:bg-gray-900 py-4 mb-12">
            {marathons.map((mar, key) => ((key > curMar & mar.type=="M")
              ? <div key={key} className="bg-gray-200 dark:bg-gray-800 p-4 pb-20 rounded-xl relative w-60 md:w-80 border dark:border-violet-800 border-violet-500">
                  <div className="text-base md:text-2xl ">{"Эстафета #" + (mar.id)}</div>
                  <div className="flex mt-1 mb-5">
                    <div className="text-sm md:text-lg text-gray-600 dark:text-gray-300 rounded-full bg-violet-300 dark:bg-violet-900 px-2">{marathons[key].dateStr}</div>
                  </div>  
                  {marathons[key].streamersID.map((stremID, key2)=>(
                    <StreamerSmall key={key2} pos={key2} stremID={stremID} times={marathons[key].times} type={mar.type} />
                  ))}
                  <Link href={"/images/marathons/mara"+ (mar.id) +".png"} className="absolute bottom-4 right-4">
                    <MainButton className="align-middle">
                      <div className="mr-2 h-6 w-6 transition-all">
                        <PhotoIcon/>
                      </div>
                      Анонс
                    </MainButton>
                  </Link>
                </div>
              :((key > curMar & mar.type=="E") ?
              <div key={key} className="bg-gray-200 dark:bg-gray-800 p-4 pb-20 rounded-xl relative w-60 md:w-80 border dark:border-cyan-800 border-cyan-400">
                <div className="text-base md:text-2xl ">{"Событие #" + (mar.id)}</div>
                <div className="flex space-x-2 mt-1 mb-5">
                  <div className="text-sm md:text-lg text-gray-600 dark:text-gray-300 my-auto rounded-full bg-cyan-300 dark:bg-cyan-900 px-2">{marathons[key].dateStr}</div>
                  <div className="text-[14px] md:text-base text-gray-400 dark:text-gray-500 my-auto">{marathons[key].timeStr}</div>
                </div>
                {marathons[key].streamersID.map((stremID, key2)=>(
                  <StreamerSmall key={key2} pos={key2} stremID={stremID} times={marathons[key].times} type={mar.type} />
                ))}
                <Link href={"/images/marathons/mara"+ (mar.id) +".png"} className="absolute bottom-4 right-4">
                  <MainButton className="align-middle">
                    <div className="mr-2 h-6 w-6 transition-all">
                      <PhotoIcon/>
                    </div>
                    Анонс
                  </MainButton>
                </Link>
              </div>
              : null)))}
          </div>
        </div>
      </Layout>
    </div>
  );
};

export default LastMaraList;
