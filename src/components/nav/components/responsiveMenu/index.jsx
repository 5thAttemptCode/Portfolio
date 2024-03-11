import React from 'react'
import './style.css'
import { useConfigurator } from '@/context'


export default function ResponsiveMenu() {

  const { 
    menuOpen, 
    setMenuOpen, 
    closeMenu, 
    setModalOpen, 
    setCameraPosition, 
    menuRef, 
    hamburgerRef 
  } = useConfigurator()

  return (
    <>
      <div 
        className="hamburger" 
        ref={hamburgerRef} 
        onClick={() => setMenuOpen(!menuOpen)} 
      />
      <div className={menuOpen ? "menu-container active" : "menu-container"} ref={menuRef} >
        <div className="menu-child menu-links">
          <p onClick={() => { setCameraPosition([-6.61, 2.11, -5.73]); closeMenu(); }}>PROJECTS</p>
          <p onClick={() => { setCameraPosition([7.06, 1.57, -5.31]); closeMenu(); }}>ABOUT</p>
          <p onClick={() => { setCameraPosition([6.89, 0.67, -5.75]); closeMenu(); }}>CONTACT</p>
        </div>
        <div className="menu-child quick-contact">
          <h3>Quick contact</h3>
          <p onClick={() => setModalOpen(true)}>E-mail</p>
          <a onClick={() => setMenuOpen(false)} href="https://github.com/5thAttemptCode" target='_blank'>GitHub</a>
          <a onClick={() => setMenuOpen(false)} href="https://www.linkedin.com/in/henry-fuerst-10b58a187/" target='_blank'>LinkedIn</a>
          <a onClick={() => setMenuOpen(false)} href="https://codepen.io/your-work/" target='_blank'>Codepen</a>
        </div>
        <span>&copy; by H3NRY</span>
      </div>

    </>
  )
}
