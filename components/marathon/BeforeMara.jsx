import Head from "next/head";
import React, { useState } from "react";
import Layout from "../Layout";
import TitleHead from "../TitleHead";
import StreamerCard from "./StreamerCard";
import hype from "../../public/images/HYPERS.png"
import offline from "../../public/images/OFFLINECHAT.png"
import Image from "next/image";

const BeforeMara = ({ maraInfo, isBefore = [0, 0] }) => {
  const [curMara, setCurMara] = useState(maraInfo.curMarathon - 1);
  return (
    <div className={(isBefore[0] == 1) ? "hidden" : "visible"}>
      <Layout className="mt-16">
        <Head>
          <title>Эстафета стримеров</title>
        </Head>
        <TitleHead
          imgName="camera"
          title="Эстафета стримеров"
          subtitle="Генератор часов контента для зрителей"
          hidtitle='"А кому мне рейд кидать?" - кто-то из участников эстафеты'
        />
      </Layout>
      <div className={(isBefore[0]==0 ? "bg-lime-900/40" : " bg-red-900/30") + " my-8 py-12 -skew-y-3 flex flex-col justify-center items-center"}>
        <Image placeholder="blur" className="skew-y-3 mb-4" alt="" src={isBefore[0]==0 ? hype : offline} width={70}/>
        <div className="text-xl lg:text-3xl text-center skew-y-3">{isBefore[0]==0 ? "Эстафета еще не началась!" : "Эстафета уже завершилась"}</div>
        <div className="lg:text-xl text-center mt-2 skew-y-3">{isBefore[0]==0 ? "Совсем скоро будет начало, заходите!" : "Но мы уже планируем следующую эстафету."}</div>
      </div>
      <div className="text-2xl text-center mt-8">{"Участники эстафеты #" + maraInfo.curMarathon}</div>
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

export default BeforeMara;
