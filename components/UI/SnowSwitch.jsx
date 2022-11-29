import { Switch } from '@headlessui/react'
import React from 'react'
import { GiftIcon } from "@heroicons/react/24/outline";
import { useState } from 'react'
import { useEffect } from 'react';

const SnowSwitch = ( {stateSnow, setStateSnow} ) => {

  const snowChange = (w) => {
    localStorage.setItem('snow', !stateSnow)
  }

  return (
    <Switch
      checked={stateSnow}
      onChange={setStateSnow}
      onClick={snowChange}
      className={(stateSnow ? "border-cyan-200/30 shadow-cyan-300 bg-cyan-200/30 dark:border-cyan-200/50 dark:shadow-cyan-200 dark:bg-cyan-100/10" : "shadow-transparent dark:hover:bg-gray-700 border-gray-300/20 hover:bg-gray-300/70 dark:border-gray-700/10") + "  p-1 border-2 shadow-inner transition-all relative inline-flex aspect-square items-center rounded-2xl"}
    >
      <GiftIcon className=' h-6 w-6 m-1 transition-all'/>{stateSnow}
    </Switch>
  )
}

export default SnowSwitch