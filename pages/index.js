import Head from "next/head";
import Layout from "../components/Layout";
import Image from 'next/image'
import NavBar from "../components/NavBar";
import Intro from "../components/Intro";
import bgDark from "../public/images/bgDark.png"
import bgLight from "../public/images/bgLight.png"
import FadeIn from "../components/animated/FadeIn";
import { useTheme } from "next-themes";
import settings from "../api/settings.json"

export default function Home() {

  const {theme} = useTheme()
  function themePick() {
    if (theme == "light") {
      return(bgLight)
    } else {
      return(bgDark)
    }
  }
  

  return (
    <div className="font-igraSans">
      <Head>
        <title>Главная страница</title>
      </Head>
      <FadeIn pauseFor={1000} className="absolute z-0 h-screen w-screen flex flex-col justify-center">
        <div className="flex justify-center lg:pb-32 lg:pl-64">
          <Image alt="" src={themePick()} height={800} width={800}  className="-z-20 blur-lg "/>
        </div>
      </FadeIn>
      <Intro/>
      <Layout/>
      <div className='opacity-0 lg:opacity-10 absolute bottom-2 right-2'>{"Made by NikitaNik, ver. " + settings.version}</div>
    </div>
  );
}
