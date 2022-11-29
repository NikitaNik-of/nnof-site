import React from 'react'
import Image from "next/image";
import settings from '../../api/settings.json'

const MainButton = ({disabled, children, type = 'default', className, ...props}) => {

  const coloring = (type, dis) => {
    if (dis) return 'bg-gray-400 dark:bg-gray-700 text-gray-500 dark:text-gray-800 cursor-not-allowed dark:border-gray-800/50 '
    else if (type == "default") return " dark:border-gray-600 border-gray-400 bg-gray-300 dark:bg-gray-800 text-black dark:text-white dark:hover:bg-gray-700 hover:bg-gray-200 "
    else if (type == "red") return " dark:border-red-600 border-red-500 bg-red-400 dark:bg-red-900/50 text-black dark:text-white dark:hover:bg-red-700/50 hover:bg-red-300 "
    else if (type == "violet") return " dark:border-violet-600 border-violet-500 bg-violet-400 dark:bg-violet-900/50 text-black dark:text-white dark:hover:bg-violet-700/50 hover:bg-violet-300 "
  }

  const isSnow = (b) => {
    if (b) return <div style={{backgroundImage:'url(/snowlayer.png)'}} className="skew-x-6 absolute bg-repeat-x w-full inset-0 left-[2px] h-[5px]" />
    else return null
  }

  return (
    <button {...props} className={coloring(type, disabled) + ' overflow-hidden relative bg-[30%_30%] rounded-lg border-2 text-[14px] lg:text-base m-1 py-2 px-3 lg:px-5 transition-all -skew-x-6 ' + className}>
        {isSnow(settings.isSnow)}
        <div className='skew-x-6 flex flex-row items-center'>
          {children}
        </div>
    </button>
  )
}

export default MainButton