import React from 'react'
import './style.css'
import { useCameraContext } from '@/context/cameraContext'


export default function ProjectButton() {

  const { setCameraPosition } = useCameraContext()

  return (
    <button  
      className='project-button' 
      onClick={() => { setCameraPosition([-6.61, 2.11, -5.73]) }}
    >
      PROJECTS
    </button>
  )
}
