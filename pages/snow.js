import React from 'react'
import Snowing from '../components/animated/Snowing'

export default function Snow() {
  return (
    <div className='h-screen w-screen -z-20'>
        <Snowing stateSnow/>
    </div>
  )
}