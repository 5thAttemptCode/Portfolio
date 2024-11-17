import React, { useState } from 'react'
import { Canvas} from '@react-three/fiber'
import { OrbitControls } from '@react-three/drei'
import { LoadingScreen } from '@/components/loadingScreen'
import CanExperience from './canExperience'
import DragNotice from '../dragNotice'
import Modal from '@/components/modal'
import Nav from '@/components/nav'


export default function Experience() {
  
  const [ start, setStart ] = useState(false)
  const [ canvasLoaded, setCanvasLoaded ] = useState(false)

  const handleStarted = () => {
    setTimeout(() => setStart(true), 800)
  }

  return (
    <div className="canvas">

      {!start && (
        <LoadingScreen 
          started={start}  
          onStarted={handleStarted} 
        />
      )}

      <Canvas 
        frameloop='demand'
        shadows 
        onCreated={() => setCanvasLoaded(true)}
      >
        <OrbitControls 
          enablePan={false} 
          enableZoom={false} 
          minPolarAngle={Math.PI / 2.5} 
          maxPolarAngle={Math.PI / 2.1} 
        />
          {start && <CanExperience />}
      </Canvas> 

      {start && canvasLoaded && (
        <>
          <Nav />
          <Modal />
          <DragNotice />
        </>
      )}

    </div>
  )
}