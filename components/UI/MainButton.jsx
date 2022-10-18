import React from 'react'

const MainButton = ({disabled, children, className, ...props}) => {

  const btnStatus = (dis) => {
    if (dis) return 'bg-gray-400 dark:bg-gray-700 text-gray-500 dark:text-gray-800 cursor-not-allowed'
    else return 'bg-gray-300 dark:bg-gray-800 text-black dark:text-white dark:hover:bg-gray-700 hover:bg-gray-200 hover:border-gray-400 '
  }

  return (
    <button {...props} className={btnStatus(disabled) + ' dark:border-gray-600 rounded-lg border-2 border-gray-500 m-1 py-2 px-3 lg:py-1 lg:px-3 transition-all ' + className}>
        {children}
    </button>
  )
}

export default MainButton