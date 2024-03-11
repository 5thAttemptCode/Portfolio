import React, { Suspense, useState } from 'react'
import { Canvas} from '@react-three/fiber'
import { OrbitControls } from '@react-three/drei'
import { LoadingScreen } from '@/components/loadingScreen'
import CanExperience from './canExperience'
import Modal from '@/components/modal'
import Nav from '@/components/nav'
import DragNotice from '../dragNotice'


export default function Experience() {
  
  const [start, setStart] = useState(false)

  return (
    <div className="canvas">
      <LoadingScreen 
        started={start}  
        onStarted={() => setStart(true)} 
      />

      <Canvas shadows>
        <OrbitControls 
          enablePan={false} 
          enableZoom={false} 
          minPolarAngle={Math.PI / 2.5} 
          maxPolarAngle={Math.PI / 2.1} 
        />
        <Suspense fallback={null}>
          {start && <CanExperience />}
        </Suspense>
      </Canvas> 
      
      <Nav />
      <Modal />
      <DragNotice />
    </div>
  )
}
 
