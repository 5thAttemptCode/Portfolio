import React from 'react'

import { CameraProvider } from './context/Context'

import Experience from './components/experience/Experience'


export default function App() {
  return (
    <CameraProvider>
      <Experience />
    </CameraProvider>
  )
}

