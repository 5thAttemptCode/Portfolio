import React, { createContext, useContext, useState, useRef, useEffect } from "react"


const MenuContext = createContext()

export const MenuProvider = ({ children }) => {
  
  const [ menuOpen, setMenuOpen ] = useState(false)
  const menuRef = useRef(null)
  const hamburgerRef = useRef(null)

  const handleClickOutside = (event) => {
    if (
      hamburgerRef.current && !hamburgerRef.current.contains(event.target) &&
      menuRef.current && !menuRef.current.contains(event.target)
    ) {
      setMenuOpen(false)
    }
  }

  useEffect(() => {
    window.addEventListener("mousedown", handleClickOutside)
    return () => window.removeEventListener("mousedown", handleClickOutside)
  }, [])

  const closeMenu = () => setMenuOpen(false)

  return (
    <MenuContext.Provider value={{ menuOpen, setMenuOpen, closeMenu, menuRef, hamburgerRef }}>
      {children}
    </MenuContext.Provider>
  )
}

export const useMenu = () => useContext(MenuContext)
