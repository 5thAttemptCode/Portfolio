import React from 'react'
import './style.css'
import { useMenu } from '@/context/menuContext'


export default function HamburgerMenu() {
  
  const { menuRef, menuOpen, setMenuOpen } = useMenu()
  
  return (
    <abbr title="Open menu">
      <button 
        className="hamburger" 
        ref={menuRef} 
        onClick={() => setMenuOpen(!menuOpen)} 
      />
    </abbr>
  )
}
