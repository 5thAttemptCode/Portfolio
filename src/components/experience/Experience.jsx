import React, { Suspense, useState } from 'react'
import { Canvas} from '@react-three/fiber'
import { OrbitControls } from '@react-three/drei'
import CanExperience from './modelCenter/CanExperience'
import { LoadingScreen } from '../loadingScreen/LoadingScreen';
import { Perf } from 'r3f-perf';
import Menu from '../nav/Menu';


export default function Experience() {
  
  const [start, setStart] = useState(false);
 
  return (
    <div className="canvas">

      <Canvas>
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
      
      <Menu />
      <LoadingScreen 
        started={start}  
        onStarted={() => setStart(true)} 
      />

    </div>
  )
 }
 
