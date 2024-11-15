import React from 'react'
import './style.css'
import { useCameraContext } from '@/context/cameraContext'
import { useMenu } from '@/context/menuContext'


export default function Logo() {

  const { closeMenu } = useMenu()
  const { initialCameraPosition, setCameraPosition } = useCameraContext()

  return (
    <button 
      className='logo' 
      onClick={() => {setCameraPosition(initialCameraPosition); closeMenu;}}
    >
      H<span>3</span>NRY
    </button>
  )
}
