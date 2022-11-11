import React from 'react'

const MainButton = ({disabled, children, type = 'default', className, ...props}) => {

  const coloring = (type, dis) => {
    if (dis) return 'bg-gray-400 dark:bg-gray-700 text-gray-500 dark:text-gray-800 cursor-not-allowed '
    else if (type == "default") return " dark:border-gray-600 border-gray-400 bg-gray-300 dark:bg-gray-800 text-black dark:text-white dark:hover:bg-gray-700 hover:bg-gray-200 "
    else if (type == "red") return " dark:border-red-600 border-red-500 bg-red-400 dark:bg-red-900/50 text-black dark:text-white dark:hover:bg-red-700/50 hover:bg-red-300 "
    else if (type == "violet") return " dark:border-violet-600 border-violet-500 bg-violet-400 dark:bg-violet-900/50 text-black dark:text-white dark:hover:bg-violet-700/50 hover:bg-violet-300 "
  }

  return (
    <button {...props} className={coloring(type, disabled) + ' rounded-lg border-2 text-[14px] lg:text-base m-1 py-2 px-3 lg:px-5 transition-all -skew-x-6 ' + className}>
        <div className='skew-x-6 flex flex-row items-center'>
          {children}
        </div>
    </button>
  )
}

export default MainButton