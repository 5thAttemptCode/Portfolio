import React from 'react'
import './style.css'
import HamburgerMenu from './components/hamburger'
import { ContactData } from '@/components/data/contactData'
import { MenuData } from '@/components/data/menuData'
import { useCameraContext } from '@/context/cameraContext'
import { useCopyEmail } from '@/customHooks/useCopyEmail'
import { useMenu } from '@/context/menuContext'
import { useModal } from '@/context/modalContext'
import { X } from 'phosphor-react'


export default function ResponsiveMenu() {

  const { setCameraPosition } = useCameraContext()

  const { setModalOpen } = useModal()

  const { menuOpen, closeMenu, menuChildRef } = useMenu()

  const { buttonText, copyEmail } = useCopyEmail()

  return (
    <>
      <HamburgerMenu />
      <div className={menuOpen ? "menu-container flex-col active" : "menu-container flex-col"} ref={menuChildRef}>
        <X size={30} className="close" onClick={closeMenu} />

        <div className="menu-child flex-col menu-links">
          {MenuData.map((item) => (
            <button 
              key={item.id} 
              onClick={() => { setCameraPosition(item.cameraPosition); closeMenu(); }}
            >
              {item.name}
            </button>
          ))}
        </div>

        <div className="menu-child flex-col quick-contact">
          <h3>Quick contact</h3>
          <button onClick={() => {setModalOpen(true); closeMenu();}}>Send e-mail</button>
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
          <button onClick={copyEmail}>{buttonText}</button>
        </div>

        <span>&copy; by Henry Fuerst</span>
      </div>
    </>
  )
}