import React, { useEffect, useState } from 'react'
import MainButton from './MainButton'
import pagesInfo from "../../api/pages.json"
import Link from 'next/link'
import { Transition, Dialog } from "@headlessui/react";
import { HomeIcon, InformationCircleIcon, CubeTransparentIcon, LinkIcon, VideoCameraIcon } from '@heroicons/react/24/outline'
import { Fragment } from 'react'
import settings from "../../api/settings.json"


const MenuModal = ({isVisible, setIsVisible}) => {
  const [Pages, setPages] = useState(pagesInfo.navPages)
  const [mounted, setMounted] = useState(false)
  
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
  
  return(
    <Transition show={isVisible} as={Fragment}>
      <Dialog className="relative z-50" onClose={() => setIsVisible(true)}>
        <Transition.Child
          as={Fragment}
          enter="ease-out duration-200"
          enterFrom="opacity-0"
          enterTo="opacity-1"
          leave="ease-in duration-200"
          leaveFrom="opacity-1"
          leaveTo="opacity-0"
        >
          <div className="fixed inset-0 bg-gray-700/20 backdrop-blur">
            <Transition.Child
              enter="ease-out duration-200"
              enterFrom=" translate-x-full"
              enterTo="translate-x-0"
              leave="ease-in duration-200"
              leaveFrom="translate-x-0"
              leaveTo="translate-x-full"
            >
              <div className={'text-xl my-4 mt-6 text-center transition-all'}>Главное меню</div>
              <Dialog.Panel className=" flex flex-col justify-center px-4">
                  {Pages.map((page) => (
                    <Link key={page.id} href={page.address} passHref>
                      <MainButton className={' text-left w-full mx-auto justify-start items-center'}>
                        {setIcon(page.icon)}
                        {page.name}
                      </MainButton>
                    </Link>
                  ))}
              </Dialog.Panel>
            </Transition.Child>
            <div className='absolute bottom-2 right-2 opacity-10'>{"Made by NikitaNik, ver. " + settings.version}</div>
          </div>
        </Transition.Child>
      </Dialog>
    </Transition>
  )
}

export default MenuModal