import React from 'react'
import './style.css'
import CvButton from './components/cvButton'
import Logo from './components/logoButton'
import ProjectButton from './components/projectButton'
import ResponsiveMenu from './components/responsiveMenu'


export default function Nav() {
  
  return (
    <nav>
      <Logo />
      <div className="nav-container flex-center">
        <ProjectButton />
        <CvButton />
        <ResponsiveMenu />
      </div>
    </nav>
  )
}