import React from 'react'
import './style.css'
import ResponsiveMenu from './components/responsiveMenu'
import { useMenu } from '@/context/menuContext'
import { useCameraContext } from '@/context/cameraContext'
import ProjectButton from './components/projectButton'
import CvButton from './components/cvButton'


export default function Nav() {
  
  const { closeMenu } = useMenu()
  const { initialCameraPosition, setCameraPosition } = useCameraContext()
  
  return (
    <nav>
      <button 
        className='cta-logo' 
        onClick={() => {setCameraPosition(initialCameraPosition); closeMenu;}}
      >
        H<span>3</span>NRY
      </button>
      <div className="nav-container">
        <ProjectButton />
        <CvButton />
        <ResponsiveMenu />
      </div>
    </nav>
  )
}