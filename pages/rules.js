import Head from 'next/head'
import Image from 'next/image'
import React from 'react'
import Layout from '../components/Layout'
import NavBar from '../components/NavBar'
import TitleHead from '../components/TitleHead'
import pin from '../public/images/pin.png'

export default function Rules() {
  return (
    <div>
        <NavBar/>
        <Layout className='mt-16'>
            <Head>
                <title>Правила сообщества</title>
            </Head>
            <TitleHead imgName="trafic" text="Правила сообщества"/>
        </Layout>
        <div className='dark:bg-red-600/10 flex flex-col place-content-center items-center py-2'>
          <div className='m-2'><Image src={pin} width={65} height={65} placeholder='blur' unoptimized/></div>
          <div className="py-2 px-4 w-4/5 lg:w-auto text-center text-sm lg:text-base">
            <text className='text-base lg:text-lg'>Данные правила относятся ко всему контенту, который находится и распространяется в Discord сервере. </text><br className='mb-3'/>
            Вне зависимости от ситуации, <text className='text-teal-300'>за модераторами последнее слово.</text><br className='mb-1'/>
            Они вправе самостоятельно выбрать соответвующее наказание без ограничений.
          </div>
        </div>
    </div>
  )
}
