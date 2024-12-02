import React from 'react'
import Experience from './components/experience/index'
import { MenuProvider } from './context/menuContext'
import { ModalProvider } from './context/modalContext'


export default function App() {

  return (
    <MenuProvider>
      <ModalProvider>
        <Experience />
      </ModalProvider>
    </MenuProvider>
  )
}