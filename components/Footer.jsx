import React from 'react'
import { useRouter } from "next/router";
import { useState } from 'react';
import Link from 'next/link';

const Footer = ( {version} ) => {
  const curPage = useRouter().pathname
  const cl = "transition-all hover:text-gray-800 hover:bg-gray-200 dark:hover:text-gray-300 dark:hover:bg-gray-800 py-1 rounded-2xl"
  return (
    <div className='flex justify-center '>
      <div className={((curPage === "/" ) ? "absolute bottom-0 opacity-10 " : " border border-transparent border-t-gray-400/70 dark:border-t-gray-600/70") + ' hidden lg:flex max-w-7xl w-4/5 text-sm visible z-50 mx-auto p-4 justify-between items-center'}>
        <div className=''>{"© NikitaNik_of 2022"}</div>
        <div className={((curPage === "/" ) ? "hidden" : "") + ' flex space-x-2 text-[14px]'}>
          <a href="https://github.com/NikitaNik-of/nnof-site" className={cl + " px-4"}>Исходный код</a>
          <Link href="/links" className={cl + " px-4"}>Ccылки</Link>
          <a href='https://www.twitch.tv/nikitanik_of/' className={cl + " px-4"}>Прямой эфир</a>
        </div>
        <div className=''>{"v" + version}</div>
      </div>
      <div className={((curPage === "/" ) ? "absolute bottom-0 opacity-10 " : " border border-transparent border-t-gray-400/70 dark:border-t-gray-600/70") + ' flex flex-col lg:hidden w-11/12 text-sm visible z-50 mx-auto p-4 justify-between items-center'}>
        <div className={((curPage === "/" ) ? "hidden" : "") + ' flex space-x-1 text-[12px] items-center text-center'}>
          <a href="https://github.com/NikitaNik-of/nnof-site" className={cl + " px-2"}>Исходный код</a>
          <Link href="/links" className={cl + " px-2"}>Ccылки</Link>
          <a href='https://www.twitch.tv/nikitanik_of/' className={cl + " px-2"}>Прямой эфир</a>
        </div>
        <div className='flex justify-between w-full mt-2 text-[14px]'>
          <div className=''>{"© NikitaNik_of 2022"}</div>
          <div className=''>{"v" + version}</div>
        </div>
      </div>
    </div>
  )
}

export default Footer