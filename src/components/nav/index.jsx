import React from 'react'
import './style.css'
import { useConfigurator } from '@/context'
import ResponsiveMenu from './components/responsiveMenu'


export default function Nav() {
  
  const { closeMenu, setCameraPosition } = useConfigurator()
  
  return (
    <nav>
      <div className="logo" onClick={closeMenu}>
        <p onClick={() => setCameraPosition([-0.04, 1.28, 8.82])}>H3NRY</p>
      </div>
      <ResponsiveMenu />
    </nav>
  )
}