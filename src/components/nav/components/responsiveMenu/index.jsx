import React from 'react'
import './style.css'
import { useConfigurator } from '@/context'
import { ContactData } from '@/components/data/contactData'


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
          {ContactData.map((item) => (
            <a 
              key={item.id}
              onClick={() => setMenuOpen(false)}
              href={item.contactURL}
              target='_blank'
            >
              {item.contactName}
            </a>
          ))}
        </div>
        <span>&copy; by H3NRY</span>
      </div>

    </>
  )
}
