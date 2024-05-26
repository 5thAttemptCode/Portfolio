import React from 'react'
import './style.css'
import ResponsiveMenu from './components/responsiveMenu'
import { useMenu } from '@/context/menuContext'
import { useCameraContext } from '@/context/cameraContext'
import ProjectButton from './components/projectButton'


export default function Nav() {
  
  const { closeMenu } = useMenu()
  const { setCameraPosition } = useCameraContext()
  
  return (
    <nav>
      <button 
        className='cta-logo' 
        onClick={() => {setCameraPosition([-0.04, 1.28, 8.82]); closeMenu;}}
      >
        H<span>3</span>NRY
      </button>
      <div className="nav-container">
        <ProjectButton />
        <ResponsiveMenu />
      </div>
    </nav>
  )
}