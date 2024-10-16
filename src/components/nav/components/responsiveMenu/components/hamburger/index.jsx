import React from 'react'
import './style.css'
import { useMenu } from '@/context/menuContext'


export default function HamburgerMenu() {
  
  const { hamburgerRef, menuOpen, setMenuOpen } = useMenu()
  
  return (
    <abbr title="Open menu">
      <button 
        className="hamburger" 
        ref={hamburgerRef} 
        onClick={() => setMenuOpen(!menuOpen)} 
      />
    </abbr>
  )
}
