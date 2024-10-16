import React, { createContext, useContext, useState } from "react"


const ModalContext = createContext()

export const ModalProvider = ({ children }) => {

  const [ modalOpen, setModalOpen ] = useState(false)

  const closeModal = () => setModalOpen(false)

  return (
    <ModalContext.Provider value={{ modalOpen, setModalOpen, closeModal }}>
      {children}
    </ModalContext.Provider>
  )
}

export const useModal = () => useContext(ModalContext)
