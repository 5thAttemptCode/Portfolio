import React from 'react'
import Experience from './components/experience/Experience'
import Nav from './components/nav/Nav'
import { CameraProvider } from './context/Context'


export default function App() {
  return (
    <CameraProvider>
      <Experience />
    </CameraProvider>
  )
}

