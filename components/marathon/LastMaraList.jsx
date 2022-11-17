import React from "react";
import { useState } from "react";
import Layout from "../Layout";
import mPic1 from "../../public/images/marathons/mara1.png"
import mPic2 from "../../public/images/marathons/mara2.png"
import mPic3 from "../../public/images/marathons/mara3.png"
import mPic4 from "../../public/images/marathons/mara4.png"
import Image from "next/image";
import LinkButton from "../UI/LinkButton";
import links from "../../api/links.json"
import MainButton from "../UI/MainButton";
import Link from "next/link";

const LastMaraList = ({ streamers, marathons, curMar }) => {
  const [maraPics, setMaraPics] = useState([mPic1, mPic2, mPic3, mPic4])

  return (
    <div className="bg-gray-300/50 dark:bg-gray-800/50 my-16 -skew-y-3 py-4 md:p-4 text-center">
      <div className=" text-lg md:text-2xl mt-4 mb-2 skew-y-3">Прошедшие эстафеты</div>
      <div className=" text-sm md:text-base my-4 skew-y-3 flex flex-col justify-center items-center w-11/12 mx-auto">
        <div className=" text-gray-600 dark:text-gray-600">Все анонсы публикуются в <text className="text-[#5865F2]">Discord</text> и в <text className="text-[#0088cc]">Telegram</text></div>
        <div className="flex flex-wrap justify-around">
          <LinkButton className={links.linkBtn[5].classBtn} href={links.linkBtn[5].href}>{links.linkBtn[5].name}</LinkButton>
          <LinkButton className={links.linkBtn[2].classBtn} href={links.linkBtn[2].href}>{links.linkBtn[2].name}</LinkButton>
          <Link href="/links"><MainButton>Остальные ссылки</MainButton></Link>
        </div>
      </div>
      <Layout className="mt-5">
        <div className=" grid grid-cols-1 md:grid-cols-2 skew-y-3">
          {marathons.map((mar, key) => (key < curMar
            ? <div className="bg-gray-400/20 dark:bg-gray-700/30 px-3 pb-3 my-2 md:m-2 rounded-3xl overflow-hidden">
                <div className="my-3 text-base md:text-xl">{"Анонс эстафеты #" + (curMar - key)}</div>
                <Image className=" rounded-xl" src={maraPics[curMar - key - 1]} unoptimized/>
              </div>
            : null))}
        </div>
      </Layout>
    </div>
  );
};

export default LastMaraList;
