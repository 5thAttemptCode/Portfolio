import React, { createContext, useContext, useState, useRef } from "react"
import useClickOutside from "@/customHooks/useClickOutside"


const MenuContext = createContext()

export const MenuProvider = ({ children }) => {
  
  const [ menuOpen, setMenuOpen ] = useState(false)
  const menuRef = useRef(null)
  const menuChildRef = useRef(null)

  useClickOutside({
    containerRef: menuRef,
    childRef: menuChildRef,
    isActive: menuOpen,
    toggle: () => setMenuOpen(false),
  })

  const closeMenu = () => setMenuOpen(false)

  return (
    <MenuContext.Provider value={{ menuOpen, setMenuOpen, closeMenu, menuRef, menuChildRef }}>
      {children}
    </MenuContext.Provider>
  )
}

export const useMenu = () => useContext(MenuContext)