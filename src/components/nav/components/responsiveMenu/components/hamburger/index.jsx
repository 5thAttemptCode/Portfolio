import React from 'react'
import './style.css'
import { List } from 'phosphor-react'
import { useMenu } from '@/context/menuContext'


export default function HamburgerMenu() {
  
  const { menuRef, menuOpen, setMenuOpen } = useMenu()
  
  return (
    <div className="hamburger-wrapper">
      <button 
        className="hamburger" 
        ref={menuRef} 
        onClick={() => setMenuOpen(!menuOpen)} 
      >
        <List color="var(--light-color-100)" size={30} />
      </button>
    </div>
  )
}