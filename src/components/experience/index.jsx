import React, { Suspense, useState } from 'react'

import { Canvas} from '@react-three/fiber'
import { LoadingScreen } from '../loadingScreen'
import { OrbitControls } from '@react-three/drei'

import CanExperience from './modelCenter'
import Modal from '../modal'
import Nav from '../nav'


export default function Experience() {
  
  const [start, setStart] = useState(false);
 
  return (
    <div className="canvas">
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
      <LoadingScreen 
        started={start}  
        onStarted={() => setStart(true)} 
      />
    </div>
  )
}
 
