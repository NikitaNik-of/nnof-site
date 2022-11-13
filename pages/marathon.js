import Head from 'next/head'
import Layout from "../components/Layout";
import { useState } from "react";
import NavBar from "../components/NavBar";
import LinkButton from "../components/UI/LinkButton";
import links from "../api/links.json"
import TitleHead from "../components/TitleHead";
import maraInfo from "../api/streamers.json"
import StreamerCard from '../components/marathon/StreamerCard';

export default function Marathon() {
    const [linkBtn, setLink] = useState(links.linkBtn)
    const [curMara, setCurMara] = useState(maraInfo.curMarathon - 4)
    const dateL = new Date(maraInfo.marathons[curMara].date + maraInfo.marathons[curMara].times[0] + ":00+03")

    return(
    <div className=" font-igraSans">
        <NavBar/>
        <Layout className='my-16'>
            <Head><title>Эстафета стримеров</title></Head>
            <TitleHead title="Эстафета стримеров" subtitle="Генератор часов контента для зрителей" hidtitle='"А кому мне рейд кидать?" - кто-то из участников эстафеты'/>
        </Layout>
        <div className='flex justify-center p-4 flex-wrap lg:mx-8'>
            {maraInfo.marathons[curMara].streamersID.map((streamer, key) => (
                <StreamerCard key={key} streamerInfo={maraInfo.profiles[streamer - 1]} times={[maraInfo.marathons[curMara].times[key], maraInfo.marathons[curMara].times[key + 1]]}/>
            ))}
        </div>
    </div>
    )
}