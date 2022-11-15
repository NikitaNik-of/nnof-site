import Head from "next/head";
import React, { useState } from "react";
import Layout from "../Layout";
import SlideUp from "../UI/SlideUp";
import StreamerCard from "./StreamerCard";
import StreamerCardNow from "./StreamerCardNow";
import pag from "../../public/images/Pag.png"
import pointDown from "../../public/images/pointDown.png"
import Image from "next/image";

const DuringMara = ({ maraInfo, isBefore = [0, 0] }) => {
  const [curMara, setCurMara] = useState(maraInfo.curMarathon - 4);
  const [curStreamer, setCurStreamer] = useState(
    maraInfo.marathons[curMara].streamersID[isBefore[1] - 1] - 1
  );

  return (
    <div className={isBefore[0] == 1 ? "visible" : "hidden"}>
      <Layout>
        <Head>
          <title>🔴 Эстафета стримеров</title>
        </Head>
        <div className="flex flex-col w-full justify-center text-center lg:pt-20 lg:pb-8 pt-12 pb-4">
          <SlideUp className="lg:mt-12 lg:mb-4 mt-12 mb-2 text-xl lg:text-4xl flex flex-col items-center justify-center">
            {"Эстафета сейчас"}
            <div className=" text-2xl lg:text-5xl shadow-xl dark:shadow-red-600/50 shadow-red-500/60 dark:bg-red-800/70 bg-red-400/70 rounded-lg p-4 -skew-x-6 mt-2">
              <div className="skew-x-6"> в прямом эфире!</div>
            </div>
          </SlideUp>
        </div>
      </Layout>
      <div
        className={
          " bg-violet-900/30 my-8 py-12 -skew-y-3 flex flex-col justify-center items-center"
        }
      >
        <div className="flex flex-col-reverse md:flex-row items-center space-x-3 skew-y-3">
          <div className="flex items-end">
            <Image alt="" src={pag} height={60}/>
            <Image alt="" src={pointDown} height={40}/>
          </div>
          <div className="text-lg md:text-3xl text-center mt-2">
            {"У него сейчас самый сок"}
          </div>
        </div>
        <StreamerCardNow
          streamerInfo={maraInfo.profiles[curStreamer]}
          className = "skew-y-3 border-violet-600 border"
          times={[
            maraInfo.marathons[curMara].times[isBefore[1] - 1],
            maraInfo.marathons[curMara].times[isBefore[1]],
          ]}
        />
      </div>
      <div className="text-2xl text-center mt-8">
        {"Участники эстафеты #" + maraInfo.curMarathon}
      </div>
      <div className="flex justify-center p-4 flex-wrap lg:mx-8">
        {maraInfo.marathons[curMara].streamersID.map((streamer, key) => (
          <StreamerCard
            key={key}
            streamerInfo={maraInfo.profiles[streamer - 1]}
            times={[
              maraInfo.marathons[curMara].times[key],
              maraInfo.marathons[curMara].times[key + 1],
            ]}
          />
        ))}
      </div>
    </div>
  );
};

export default DuringMara;
