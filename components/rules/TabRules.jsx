import React from 'react'

const TabRules = ({setRules, rules}) => {  

  const classIdCheck = (id) => {
      let cl = 'rounded-lg py-1 px-2 mx-1 transition-all'
      if (rules.id == id)
      return 'text-cyan-700 dark:text-cyan-400 dark:bg-cyan-800/20 bg-cyan-300/60 cursor-default ' + cl
      else return 'hover:bg-gray-300 dark:hover:bg-gray-700/50 ' + cl
  }
  return (
    <div className='flex justify-center my-2 py-2'>
      <div className='bg-gray-300/30 dark:bg-gray-600/10 flex justify-center py-2 px-2 rounded-xl'>
        <button className={classIdCheck(0)} onClick={() => setRules(rules.discord)}>Discord</button>
        <button className={classIdCheck(1)} onClick={() => setRules(rules.twitch)}>Twitch</button>
        <button className={classIdCheck(2)} onClick={() => setRules(rules.telegram)}>Telegram</button>
      </div>
    </div>
  )
}

export default TabRules