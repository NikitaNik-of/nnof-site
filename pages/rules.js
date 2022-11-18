import Head from 'next/head'
import Image from 'next/image'
import React, { useEffect, useState } from 'react'
import Layout from '../components/Layout'
import NavBar from '../components/NavBar'
import TitleHead from '../components/TitleHead'
import rules from '../api/rules.json'
import SubRules from '../components/rules/subRules'
import MainButton from '../components/UI/MainButton'
import TabRules from '../components/rules/TabRules'

export default function Rules() {

  const [ruleType, setRuleType] = useState(rules.discord)
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
        <TabRules rules={rules} ruleType={ruleType} setRules={setRuleType}/>
        <div className='bg-gray-300/30 dark:bg-gray-600/10 flex justify-center my-8 py-16 -skew-y-3'>
          <div className="py-2 lg:px-4 w-11/12 lg:w-3/4 text-sm lg:text-base skew-y-3 flex flex-col flex-start">
            {ruleType.ruleList.map((rule) => (
              <div key={rule.id} className={'grid-cols-[_32px_1fr] md:grid-cols-[_40px_1fr] grid my-2 items-start'}>
                <text className={'rounded-lg m-1 p-auto text-right basis-8 '}>{rule.id + '.'}</text>
                <div className='mt-1 px-2 '>{rule.text}</div>
              </div>
            ))}
          </div>
        </div>
    </div>
  )
}
