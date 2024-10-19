import React, { createContext, useContext, useState, useRef } from "react"
import useClickOutside from "@/customHooks/useClickOutside"


const ModalContext = createContext()

export const ModalProvider = ({ children }) => {

  const [ modalOpen, setModalOpen ] = useState(false)
  const overlayRef = useRef(null)
  const modalRef = useRef(null)
  const closeModal = () => setModalOpen(false)

  useClickOutside({
    containerRef: overlayRef, 
    childRef: modalRef, 
    isActive: modalOpen, 
    toggle: closeModal
  })

  return (
    <ModalContext.Provider value={{ modalOpen, setModalOpen, closeModal, overlayRef, modalRef }}>
      {children}
    </ModalContext.Provider>
  )
}

export const useModal = () => useContext(ModalContext)
