import React from 'react'
import './style.css'
import useCameraStore from '@/context/cameraContext'
import { useMenu } from '@/context/menuContext'


export default function Logo() {

  const { closeMenu } = useMenu()
  const { initialCameraPosition, setCameraPosition } = useCameraStore()

  return (
    <button 
      className='logo' 
      onClick={() => {setCameraPosition(initialCameraPosition); closeMenu;}}
    >
      H<span>3</span>NRY
    </button>
  )
}
