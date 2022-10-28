import Head from 'next/head'
import Image from 'next/image'
import React, { useEffect, useState } from 'react'
import Layout from '../components/Layout'
import NavBar from '../components/NavBar'
import TitleHead from '../components/TitleHead'
import rules from '../api/rules.json'
import SubRules from '../components/rules/SubRules'
import MainButton from '../components/UI/MainButton'

export default function Rules() {

  const [ruleType, setRuleType] = useState(rules.discord)  
  const classIdCheck = (id) => {
    let cl = 'rounded-lg py-1 px-2 mx-2 transition-all'
    if (ruleType.id == id)
      return 'text-cyan-700 dark:text-cyan-400 dark:bg-cyan-800/20 bg-cyan-300/60 cursor-default ' + cl
    else return 'hover:bg-gray-300 dark:hover:bg-gray-700/50 ' + cl
  }

  return (
    <div className='scroll-smooth'>
        <NavBar/>
        <Layout className='mt-16'>
            <Head>
                <title>Правила сообщества</title>
            </Head>
            <TitleHead imgName="trafic" title="Правила сообщества" subtitle="Их нарушать не стоит :)" hidtitle="Они написаны не просто так, и прочитать их полезнее твоих конспектов по физ-ре."/>
        </Layout>
        <SubRules bodyname={ruleType.bodyName}/>
        <div className='flex justify-center my-2 py-2'>
          <div className='bg-gray-300/30 dark:bg-gray-600/10 flex justify-center py-2 px-3 rounded-xl -skew-x-6'>
            <button className={classIdCheck(0)} onClick={() => setRuleType(rules.discord)}><div className='skew-x-6'>Discord</div></button>
            <button className={classIdCheck(1)} onClick={() => setRuleType(rules.twitch)}><div className='skew-x-6'>Twitch</div></button>
            <button className={classIdCheck(2)} onClick={() => setRuleType(rules.telegram)}><div className='skew-x-6'>Telegram</div></button>
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
