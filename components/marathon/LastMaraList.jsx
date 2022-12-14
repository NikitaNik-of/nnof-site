import React from "react";
import { useState } from "react";
import { PhotoIcon } from "@heroicons/react/24/outline";
import Layout from "../Layout";
import mPic1 from "../../public/images/marathons/mara1.png"
import mPic2 from "../../public/images/marathons/mara2.png"
import mPic3 from "../../public/images/marathons/mara3.png"
import mPic4 from "../../public/images/marathons/mara4.png"
import mPic5 from "../../public/images/marathons/mara5.png"
import Image from "next/image";
import LinkButton from "../UI/LinkButton";
import links from "../../api/links.json"
import MainButton from "../UI/MainButton";
import Link from "next/link";
import StreamerSmall from "./StreamerSmall";

const LastMaraList = ({ marathons, curMar }) => {
  const [maraPics, setMaraPics] = useState([mPic1, mPic2, mPic3, mPic4, mPic5])
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
            {marathons.map((mar, key) => (key < curMar
              ? <div key={key} className="bg-gray-200 dark:bg-gray-800 p-4 pb-20 rounded-xl relative w-60 md:w-80">
                  <div className="text-base md:text-2xl ">{"Эстафета #" + (curMar - key)}</div>  
                  <div className="text-sm md:text-lg text-gray-600 dark:text-gray-500 mb-4">{marathons[curMar - key - 1].dateStr}</div>
                  {marathons[curMar - key - 1].streamersID.map((stremID, key2)=>(
                    <StreamerSmall key={key2} pos={key2} stremID={stremID} times={marathons[curMar - key - 1].times} />
                  ))}
                  <Link href={"/images/marathons/mara"+ (curMar - key) +".png"} className="absolute bottom-4 right-4">
                    <MainButton className="align-middle">
                      <div className="mr-2 h-6 w-6 transition-all">
                        <PhotoIcon/>
                      </div>
                      Анонс
                    </MainButton>
                  </Link>
                </div>
              : null))}
          </div>
        </div>
        {/* <div className=" grid grid-cols-1 md:grid-cols-2 skew-y-3">
          {marathons.map((mar, key) => (key < curMar
            ? <div key={key} className="bg-gray-400/20 dark:bg-gray-700/30 px-3 pb-3 my-2 md:m-2 rounded-3xl overflow-hidden">
                <div className="mt-3 text-base md:text-xl">{"Анонс эстафеты #" + (curMar - key)}</div>
                <div className="mb-3 text-sm md:text-base text-gray-600 dark:text-gray-500">{marathons[curMar - key - 1].dateStr}</div>
                <Image className=" rounded-xl" src={maraPics[curMar - key - 1]} unoptimized/>
              </div>
            : null))}
        </div> */}
      </Layout>
    </div>
  );
};

export default LastMaraList;
