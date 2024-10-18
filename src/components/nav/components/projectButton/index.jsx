import React from 'react'
import './style.css'
import { MenuData } from '@/components/data/menuData'
import { useCameraContext } from '@/context/cameraContext'


export default function ProjectButton() {

  const { setCameraPosition } = useCameraContext()
  const projectData = MenuData.find(projectData => projectData.id === 1)

  return (
    <button  
      className='project-button nav-button' 
      onClick={() => { setCameraPosition(projectData.cameraPosition) }}
    >
      {projectData.name}
    </button>
  )
}