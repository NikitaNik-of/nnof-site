import React from 'react'

const TabRules = ({setRules, ruleType, rules}) => {  

  const classIdCheck = (id) => {
      let cl = 'rounded-lg py-1 px-2 mx-1 transition-all'
      if (ruleType.id == id) return 'text-teal-800 dark:text-teal-400 dark:bg-teal-800/30 bg-teal-300/80 cursor-default ' + cl
      else return 'hover:bg-gray-300 dark:hover:bg-gray-700/50 ' + cl
  }
  return (
    <div className='flex justify-center my-2 py-2'>
      <div className='bg-gray-300/30 dark:bg-gray-600/10 flex justify-center py-2 px-3 rounded-xl -skew-x-6'>
        <button className={classIdCheck(0)} onClick={() => setRules(rules.discord)}><div className='skew-x-6'>Discord</div></button>
        <button className={classIdCheck(1)} onClick={() => setRules(rules.twitch)}><div className='skew-x-6'>Twitch</div></button>
        <button className={classIdCheck(2)} onClick={() => setRules(rules.telegram)}><div className='skew-x-6'>Telegram</div></button>
      </div>
    </div>
  )
}

export default TabRules