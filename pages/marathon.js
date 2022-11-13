import Head from 'next/head'
import Layout from "../components/Layout";
import { useState } from "react";
import NavBar from "../components/NavBar";
import LinkButton from "../components/UI/LinkButton";
import links from "../api/links.json"
import BeforeMara from '../components/marathon/BeforeMara';
import maraInfo from "../api/streamers.json"

export default function Marathon() {
    const [linkBtn, setLink] = useState(links.linkBtn)

    const stateMar = () => {
        // 0=before, 1=playing, 2=after
        let now = new Date()
        let start = new Date(maraInfo.marathons[maraInfo.curMarathon - 4].date + maraInfo.marathons[maraInfo.curMarathon - 4].times[0])
        let end = new Date(maraInfo.marathons[maraInfo.curMarathon - 4].date + maraInfo.marathons[maraInfo.curMarathon - 4].times[maraInfo.marathons[maraInfo.curMarathon - 4].streamCount - 1])
        let diffStart = start.getTime() - now.getTime()
        let diffEnd = end.getTime() - now.getTime()
        console.log(start.getTime(), diffStart)
        console.log(end.getTime(), diffEnd)
        if (diffStart > 0) return 0
        else if (diffEnd > 0) return 1
        else return 2
    } 

    return(
    <div className=" font-igraSans">
        <NavBar/>
        <BeforeMara isBefore={stateMar()} maraInfo={maraInfo} isTimer=""/>
    </div>
    )
}