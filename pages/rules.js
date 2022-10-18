import Head from 'next/head'
import Image from 'next/image'
import React, { useEffect, useState } from 'react'
import Layout from '../components/Layout'
import NavBar from '../components/NavBar'
import TitleHead from '../components/TitleHead'
import pin from '../public/images/pin.png'
import rules from '../api/rules.json'
import MainButton from '../components/UI/MainButton'

export default function Rules() {

  const [ruleType, setRuleType] = useState(rules.discord)  
  const classIdCheck = (id) => {
    let cl = 'rounded-lg py-1 px-2 mx-1 transition-all'
    if (ruleType.id == id)
      return 'text-cyan-700 dark:text-cyan-400 dark:bg-cyan-800/20 bg-cyan-300/60 cursor-default ' + cl
    else return 'hover:bg-gray-300 dark:hover:bg-gray-700/50 ' + cl
  }

  return (
    <div>
        <NavBar/>
        <Layout className='mt-16'>
            <Head>
                <title>Правила сообщества</title>
            </Head>
            <TitleHead imgName="trafic" text="Правила сообщества"/>
        </Layout>
        <div className='bg-red-300/30 dark:bg-red-600/10 flex flex-col place-content-center items-center my-2 py-2'>
          <div className='m-2'><Image src={pin} width={65} height={65} placeholder='blur' unoptimized/></div>
          <div className="py-2 px-4 w-4/5 lg:w-auto text-center text-sm lg:text-base">
            <text className='text-base lg:text-lg'>Данные правила относятся ко всему контенту, который находится и распространяется в {ruleType.bodyName}. </text><br className='mb-3'/>
            Вне зависимости от ситуации, <text className=' text-teal-600 dark:text-teal-300'>за модераторами последнее слово.</text><br className='mb-1'/>
            Они вправе самостоятельно выбрать соответвующее наказание без ограничений.
          </div>
        </div>
        <div className='flex justify-center my-2 py-2'>
          <div className='bg-gray-300/30 dark:bg-gray-600/10 flex justify-center py-2 px-2 rounded-xl'>
            <button className={classIdCheck(0)} onClick={() => setRuleType(rules.discord)}>Discord</button>
            <button className={classIdCheck(1)} onClick={() => setRuleType(rules.twitch)}>Twitch</button>
            <button className={classIdCheck(2)} onClick={() => setRuleType(rules.telegram)}>Telegram</button>
          </div>
        </div>
        <div className='bg-gray-300/30 dark:bg-gray-600/10 flex justify-center my-2 py-2'>
          <div className="py-2 px-4 w-3/4 text-sm lg:text-base">
            {ruleType.ruleList.map((rule) => (
              <div key={rule.id} className='flex my-2 items-start'>
                <text className='rounded-lg m-1 px-1 text-right w-9'>{rule.id + '.'}</text>
                <div className='mt-1 px-2'>{rule.text}</div>
              </div>
            ))}
          </div>
        </div>
    </div>
  )
}
