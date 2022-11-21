import React, { useEffect, useState } from 'react'
import MainButton from './MainButton'
import pagesInfo from "../../api/pages.json"
import Link from 'next/link'
import { useRouter } from 'next/router'
import { HomeIcon, InformationCircleIcon, CubeTransparentIcon, LinkIcon, VideoCameraIcon } from '@heroicons/react/24/outline'

const MenuModal = ({isVisible}) => {
  const [Pages, setPages] = useState(pagesInfo.navPages)
  const [mounted, setMounted] = useState(false)

  const setMovement = () => {
    if (!isVisible) return 'translate-x-full opacity-0 '
    else return 'translate-x-0 opacity-1'
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
      
      case 'rules':
        return(<InformationCircleIcon className='text-black dark:text-white h-6 w-6 mr-3' />)

      case 'marathon':
        return(<VideoCameraIcon className='text-black dark:text-white h-6 w-6 mr-3' />)

      case 'test':
        return(<CubeTransparentIcon className='text-black dark:text-white h-6 w-6 mr-3 '/>)
  
      default:
        break;
    }
  }

  return (
    <div className={setMovement() + ' backdrop-blur-xl absolute inset-0 ease-in-out duration-200 transition-all z-50 ibackdrop-blur-sm bg-slate-300/60 dark:bg-slate-700/60 overflow-y-auto min-h-screen min-w-full flex flex-col py-2 px-4'}>
      <div className={'text-xl my-4 transition-all'}>Главное меню</div>
      {Pages.map((page) => (
        <Link key={page.id} href={page.address} passHref>
          <MainButton className={' text-left w-full mx-auto justify-start items-center'}>
            {setIcon(page.icon)}
            {page.name}
          </MainButton>
        </Link>
      ))}
      <div className='absolute bottom-2 right-2 opacity-10'>Made by NikitaNik, ver. 0.4.1</div>
    </div>
  )
}

export default MenuModal