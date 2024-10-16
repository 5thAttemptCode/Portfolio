import React from 'react'
import './style.css'
import { ContactData } from '@/components/data/contactData'
import { useMenu } from '@/context/menuContext'
import { useCameraContext } from '@/context/cameraContext'
import { useModal } from '@/context/modalContext'
import { X } from 'phosphor-react'
import HamburgerMenu from './components/hamburger'


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
          <p onClick={() => { setCameraPosition([-6.61, 2.11, -5.73]); closeMenu(); }}>
            Projects
          </p>
          <p onClick={() => { setCameraPosition([7.06, 1.57, -5.31]); closeMenu(); }}>
            About
          </p>
          <p onClick={() => { setCameraPosition([6.89, 0.67, -5.75]); closeMenu(); }}>
            Contact
          </p>
        </div>
        <div className="menu-child quick-contact">
          <h3>Quick contact</h3>
          <p onClick={() => {setModalOpen(true); closeMenu();}}>E-mail</p>
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
          <a 
            href="/CV/Henry_Fuerst_CV.pdf" 
            onClick={closeMenu} 
            target='_blank'
          >
            Download CV
          </a>
        </div>
        <span>&copy; by Henry Fuerst</span>
      </div>
    </>
  )
}