import Link from "next/link";
import Head from "next/head";
import Layout from "../components/Layout";
import Image from 'next/image'
import wave from '../public/images/wave.png'
import NavBar from "../components/NavBar";
import MainButton from "../components/UI/MainButton";
import { useEffect, useState } from "react";
import SlideUp from "../components/UI/SlideUp";

export default function Home() {
  

  return (
    <div>
      <NavBar/>
      <Layout>
        <Head>
          <title>Главная страница</title>
        </Head>
        <div className='flex flex-col justify-center text-center items-center my-32'>
          <div className="flex transition-all space-x-4 items-center mb-8">
            <SlideUp pauseFor={0}>
              <Image src={wave} height={90} width={90} layout="fixed" placeholder="blur"/>
            </SlideUp>
            <SlideUp pauseFor={0} className="text-6xl font-bold">Привет!
            </SlideUp>
          </div>
          <div className="transition-all text-3xl my-2 flex space-x-2">
            <SlideUp pauseFor={600}>{'Добро '}</SlideUp>
            <SlideUp pauseFor={700}>{'пожаловать '}</SlideUp>
            <SlideUp pauseFor={800}>{'на '}</SlideUp>
            <SlideUp pauseFor={900} className=" bg-gradient-to-br from-emerald-500 via-cyan-500 to-indigo-500 text-transparent bg-clip-text ">
              мой сайт!
            </SlideUp>
          </div>
        </div>
      </Layout>
    </div>
  );
}
