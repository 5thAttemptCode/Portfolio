import React from 'react'

import { CameraProvider } from './context/index'
import Experience from './components/experience/index'


export default function App() {

  return (
    <CameraProvider>
      <Experience />
    </CameraProvider>
  )
}

