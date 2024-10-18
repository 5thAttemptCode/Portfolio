import React from 'react'
import './style.css'
import HamburgerMenu from './components/hamburger'
import { ContactData } from '@/components/data/contactData'
import { MenuData } from '@/components/data/menuData'
import { useCameraContext } from '@/context/cameraContext'
import { useMenu } from '@/context/menuContext'
import { useModal } from '@/context/modalContext'
import { X } from 'phosphor-react'


export default function ResponsiveMenu() {

  const { setCameraPosition } = useCameraContext()
  const { setModalOpen } = useModal()
  const { menuOpen, closeMenu, menuRef } = useMenu()

  return (
    <>
      <HamburgerMenu />
      <div className={menuOpen ? "menu-container active" : "menu-container"} ref={menuRef}>
        <X size={30} className="close" onClick={closeMenu} />

        <div className="menu-child menu-links">
          {MenuData.map((item) => (
            <button 
              key={item.id} 
              onClick={() => { setCameraPosition(item.cameraPosition); closeMenu(); }}
            >
              {item.name}
            </button>
          ))}
        </div>

        <div className="menu-child quick-contact">
          <h3>Quick contact</h3>
          <button onClick={() => {setModalOpen(true); closeMenu();}}>E-mail</button>
          {ContactData.map((item) => (
            <a 
              key={item.id}
              onClick={closeMenu}
              href={item.contactURL}
              target='_blank'
            >
              {item.contactName}
            </a>
          ))}
        </div>

        <span>&copy; by Henry Fuerst</span>
      </div>
    </>
  )
}