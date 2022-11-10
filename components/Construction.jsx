import Head from "next/head";
import Layout from "../components/Layout";
import Image from 'next/image'
import NavBar from "../components/NavBar";
import bgMaintenance from "../public/images/bgMaintenance.png"
import FadeIn from "../components/animated/FadeIn";
import { useTheme } from "next-themes";
import Maintenance from "../components/Maintenance";

export default function Construction() {

  return (
    <div className="font-igraSans">
      <Head>
        <title>Технические работы</title>
      </Head>
      <FadeIn pauseFor={1000} className=" z-0 absolute h-screen w-screen flex flex-col justify-center">
        <div className="flex justify-center">
          <Image alt="" src={bgMaintenance} height={800} width={800} unoptimized className=""/>
        </div>
      </FadeIn>
      <Maintenance/>
    </div>
  );
}
