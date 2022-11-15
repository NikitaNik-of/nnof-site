import Head from 'next/head'
import Layout from "../components/Layout";
import { useState } from "react";
import NavBar from "../components/NavBar";
import LinkButton from "../components/UI/LinkButton";
import links from "../api/links.json"
import BeforeMara from '../components/marathon/BeforeMara';
import maraInfo from "../api/streamers.json"
import DuringMara from '../components/marathon/DuringMara';

export default function Marathon() {
    const [linkBtn, setLink] = useState(links.linkBtn)

    const stateMar = () => {
        // 0=before, 1=playing, 2=after
        let marInf = maraInfo.marathons[maraInfo.curMarathon - 4]
        let now = new Date()
        let diffs = []
        let k = 0
        for (let i = 0; i <= marInf.streamCount; i++) {
            let time = new Date(marInf.date + marInf.times[i])
            let dif = time.getTime() - now.getTime()
            if (dif < 0) k++
            diffs.push()
        }
        console.log(k)
        if (k == 0) return [0, NaN]
        else if (k > marInf.streamCount) return [2, NaN]
        else return [1, k]
    } 

    return(
    <div className=" font-igraSans">
        <NavBar className="z-40"/>
        {console.log(stateMar())}
        <DuringMara isBefore={stateMar()} maraInfo={maraInfo}/>
        <BeforeMara isBefore={stateMar()} maraInfo={maraInfo} isTimer=""/>
    </div>
    )
}