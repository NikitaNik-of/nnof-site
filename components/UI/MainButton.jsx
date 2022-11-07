import React from 'react'

const MainButton = ({disabled, children, color = 'default', className, ...props}) => {

  const btnStatus = (dis) => {
    if (dis) return 'bg-gray-400 dark:bg-gray-700 text-gray-500 dark:text-gray-800 cursor-not-allowed '
    else return 'bg-gray-300 dark:bg-gray-800 text-black dark:text-white dark:hover:bg-gray-700 hover:bg-gray-200 '
  }

  const coloring = (clr) => {
    if (clr == "default") return " dark:border-gray-600 border-gray-400 "
    else if (clr == "red") return " dark:border-red-600 border-red-400 "
  }

  return (
    <button {...props} className={btnStatus(disabled) + coloring(color) + ' rounded-lg border-2 text-sm lg:text-base m-1 py-2 px-3 lg:px-5 transition-all -skew-x-6 ' + className}>
        <div className='skew-x-6 flex flex-row'>
          {children}
        </div>
    </button>
  )
}

export default MainButton