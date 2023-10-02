import React, { Suspense, useState } from 'react'
import { Canvas} from '@react-three/fiber'
import { Html, OrbitControls } from '@react-three/drei'
import CanExperience from './modelCenter/CanExperience'
import { LoadingScreen } from '../loadingScreen/LoadingScreen';
import { Perf } from 'r3f-perf';
import CameraPosition from '../cameraPosition/CameraPosition';


export default function Experience() {
  
  const [start, setStart] = useState(false);
 
  return (
    <div className="canvas">
      <Canvas shadows camera={{ position: [0, 0, 9], fov: 35 }}>
        <Perf position="bottom-left" />
        <OrbitControls 
          enablePan={false} 
          enableZoom={false} 
          minPolarAngle={Math.PI / 2.6} 
          maxPolarAngle={Math.PI / 2.1} 
        />

        <Suspense fallback={null}>
          {start && <CanExperience />}
        </Suspense>
        <CameraPosition event="mousedown" />
      </Canvas> 
      <LoadingScreen 
        started={start}  
        onStarted={() => setStart(true)} 
      />
    </div>
  )
 }
 
