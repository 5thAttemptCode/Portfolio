import React from 'react'
import './style.css'
import { useConfigurator } from '../../context'

export default function Nav() {
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
      <div className="logo nav-item" onClick={closeMenu}>
        <div className="nav-triangle triangle">
          <div className="nav-triangle-inner triangle-inner"></div>
        </div>
        <div className="name">
          <p onClick={() => setCameraPosition([-0.04, 1.28, 8.82])}>H3NRY</p>
        </div>
      </div>

      <div ref={hamburgerRef} className="hamburger" onClick={() => setMenuOpen(!menuOpen)}></div>

      <div ref={menuRef} className={menuOpen ? "menu-container active" : "menu-container"}>
        <div className="menu menu-child">
          <p onClick={() => { setCameraPosition([-6.61, 2.11, -5.73]); closeMenu(); }}>PROJECTS</p>
          <p onClick={() => { setCameraPosition([7.06, 1.57, -5.31]); closeMenu(); }}>ABOUT</p>
          <p onClick={() => { setCameraPosition([6.89, 0.67, -5.75]); closeMenu(); }}>CONTACT</p>
        </div>
        <br />
        <br />
        <div className="info menu-child">
          <h3>Quick contact</h3>
          <p onClick={() => setModalOpen(true)}>E-mail</p>
          <a onClick={() => setMenuOpen(false)} href="https://github.com/5thAttemptCode" target='_blank'>GitHub</a>
          <a onClick={() => setMenuOpen(false)} href="https://www.linkedin.com/in/henry-fuerst-10b58a187/" target='_blank'>LinkedIn</a>
          <a onClick={() => setMenuOpen(false)} href="https://codepen.io/your-work/" target='_blank'>Codepen</a>
        </div>
      </div>
    </>
  )
}