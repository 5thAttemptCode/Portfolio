import React from 'react'
import './style.css'
import { useCameraContext } from '@/context/cameraContext'


export default function ProjectButton() {

  const { setCameraPosition } = useCameraContext()

  return (
    <button  
      className='project-button nav-button' 
      onClick={() => { setCameraPosition([-6.61, 1.3, -5.73]) }}
    >
      Projects
    </button>
  )
}
