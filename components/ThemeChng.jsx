import React, { useEffect, useState } from 'react'
import { useTheme } from 'next-themes'
import MainButton from './UI/MainButton';
import { SunIcon, MoonIcon } from '@heroicons/react/24/outline'

const ThemeChng = () => {
  
  const {theme, setTheme} = useTheme();
  const [mounted, setMounted] = useState(false);
  
  const iconPlacer = () => {
    if (theme == 'light') {
      return(<MoonIcon className="text-black h-6 w-6 m-1 "/>)
    }
    else{
      return(<SunIcon className="text-white h-6 w-6 m-1 "/>)
    }
  }

  useEffect(() => {
    setMounted(true)
  }, [])

  
  if (!mounted) {
    return null
  }

  return (
      <button className= 'p-1 aspect-square bg-transparent border-2 border-gray-500/5 hover:bg-gray-200 dark:hover:bg-gray-700 rounded-2xl transition-colors box-content align-middle text-center' onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}>
        {iconPlacer()}
      </button>
  )
}

export default ThemeChng