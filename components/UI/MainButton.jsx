import React from 'react'

const MainButton = ({disabled, children, ...props}) => {

  const btnStatus = (dis) => {
    if (dis) return 'border-2 border-gray-500 dark:border-gray-600 m-1 p-1 px-3 rounded-lg bg-gray-400 dark:bg-gray-700 text-gray-500 dark:text-gray-800 cursor-not-allowed'
    else return 'border-2 border-gray-500 dark:border-gray-600 m-1 p-1 px-3 rounded-lg bg-gray-300 dark:bg-gray-800 text-black dark:text-white dark:hover:bg-gray-700 hover:bg-gray-200 hover:border-gray-400'
  }

  return (
    <button {...props} className={btnStatus(disabled)}>
        {children}
    </button>
  )
}

export default MainButton