import Head from 'next/head'
import Layout from "../components/Layout";
import { useEffect, useState } from "react";
import NavBar from "../components/NavBar";
import LinkButton from "../components/UI/LinkButton";
import links from "../api/links.json"
import BeforeMara from '../components/marathon/BeforeMara';
import maraInfo from "../api/streamers.json"
import DuringMara from '../components/marathon/DuringMara';
import TitleHead from '../components/TitleHead';
import LastMaraList from '../components/marathon/LastMaraList';

export default function Marathon() {
    const [linkBtn, setLink] = useState(links.linkBtn)
    const [mounted, setMounted] = useState(false)
    const [state, setState] = useState([])

    const stateMar = () => {
      // 0=before, 1=playing, 2=after
      let marInf = maraInfo.marathons[maraInfo.curMarathon - 1]
      let now = new Date()
      let diffs = []
      let k = 0
      for (let i = 0; i <= marInf.streamCount; i++) {
          let time = new Date(marInf.date + marInf.times[i])
          let dif = time.getTime() - now.getTime()
          if (dif < 0) k++
          diffs.push()
      }
      setMounted(true)
      if (k == 0) return [0, 1]
      else if (k > marInf.streamCount) return [2, 1]
      else return [1, k]
    } 

    useEffect(() => {
      setState(stateMar())
    }, [])
    

    return(
    <div className=" font-igraSans">
      <NavBar className="z-40"/>
      {mounted
      ?<div>{
        (state[0] == 1)
        ?<DuringMara isBefore={state} maraInfo={maraInfo}/>
        :<BeforeMara isBefore={state} maraInfo={maraInfo} isTimer=""/>}
      </div>
      :
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
      }
      <LastMaraList marathons={maraInfo.marathons} curMar={maraInfo.curMarathon - 1}/>
    </div>
    )
}