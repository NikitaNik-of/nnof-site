import React, { useEffect, useState } from 'react'
import { useTheme } from 'next-themes'
import MainButton from './UI/MainButton';
import { SunIcon, MoonIcon } from '@heroicons/react/24/outline'

const ThemeChng = () => {
  
  const {theme, setTheme} = useTheme();
  const [mounted, setMounted] = useState(false);
  
  const iconPlacer = () => {
    if (theme == 'dark') {
      return(<SunIcon className="text-white"/>)
    }
    else{
      return(<MoonIcon className="text-black"/>)
    }
  }

  useEffect(() => {
    setMounted(true)
  }, [])

  
  if (!mounted) {
    return null
  }

  return (
      <button className= 'm-2 h-6 w-6 bg-transparent border-transparent hover:bg-gray-200 dark:hover:bg-gray-700 rounded-2xl p-1 border-2 transition-colors box-content align-middle text-center' onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}>
        {iconPlacer()}
      </button>
  )
}

export default ThemeChng