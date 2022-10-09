import React, { useEffect, useState } from 'react'
import MainButton from './MainButton'
import pagesInfo from "../../api/pages.json"
import Link from 'next/link'
import { useRouter } from 'next/router'
import { HomeIcon, InformationCircleIcon, CubeTransparentIcon, LinkIcon } from '@heroicons/react/24/outline'

const MenuModal = ({isVisible}) => {
  const [Pages, setPages] = useState(pagesInfo.navPages)
  const [mounted, setMounted] = useState(false)

  const setVis = () => {
    if (!isVisible) return 'hidden '
    else return 'visible '
  }
  
  useEffect(() => {
    setMounted(true)
  }, [])

  
  if (!mounted) {
    return null
  }
  
  const setIcon = (iconName) => {
    switch (iconName) {
      case 'Home':
        return(<HomeIcon className='text-black dark:text-white h-6 w-6 mr-3 '/>)
    
      case 'link':
        return(<LinkIcon className='text-black dark:text-white h-6 w-6 mr-3 '/>)
      
      case 'test':
        return(<CubeTransparentIcon className='text-black dark:text-white h-6 w-6 mr-3 '/>)
  
      default:
        break;
    }
  }

  return (
    <div className={setVis() + '  transition-all fixed z-50 inset-0 backdrop-blur-sm bg-slate-300/60 dark:bg-slate-700/60 overflow-y-auto min-h-screen min-w-full flex flex-col pt-16 py-4 px-6'}>
      {Pages.map((page) => (
        <Link key={page.id} href={page.address} passHref>
          <MainButton className='text-left flex justify-start items-center'>
            {setIcon(page.icon)}
            {page.name}
          </MainButton>
        </Link>
      ))}
    </div>
  )
}

export default MenuModal