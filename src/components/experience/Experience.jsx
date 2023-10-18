import React, { Suspense, useState } from 'react'
import { Canvas} from '@react-three/fiber'
import { OrbitControls } from '@react-three/drei'
import { LoadingScreen } from '../loadingScreen/LoadingScreen';
import CanExperience from './modelCenter/CanExperience'
import Nav from '../nav/Nav';
import Modal from '../modal/Modal';
import { Perf } from 'r3f-perf';


export default function Experience() {
  
  const [start, setStart] = useState(false);
 
  return (
    <div className="canvas">
      <Canvas shadows>
        <Perf position="bottom-left" />
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
 
