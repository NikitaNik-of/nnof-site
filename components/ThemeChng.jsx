import React, { useEffect, useState } from 'react'
import { useTheme } from 'next-themes'

const ThemeChng = () => {
  
  const {systemTheme, theme, setTheme} = useTheme();

  const [mounted, setMounted] = useState(false);

  const themeChange = () => {
    if (!mounted) return null;

    const curTheme = theme === 'system' ? systemTheme : theme;
    return(<div>The current theme is: {theme}</div>)
  }
  
  useEffect(() => {
    setMounted(true)
  }, [])

  return (
    <div className=" px-3 py-1 space-x-4 flex items-center">
      <button onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}>Switch theme</button>
      {/* {themeChange()} */}
    </div>
  )
}

export default ThemeChng