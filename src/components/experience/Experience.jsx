import React, { Suspense, useState } from 'react'
import { Canvas } from '@react-three/fiber'
import { OrbitControls } from '@react-three/drei'
import CanExperience from './modelCenter/CanExperience'
import { LoadingScreen } from '../loadingScreen/LoadingScreen';


export default function Experience() {
  
  const [start, setStart] = useState(false);

  return (
    <div className="canvas">
        <Canvas shadows camera={{ position: [0, 0, 9], fov: 35 }}>
          <OrbitControls autoRotate autoRotateSpeed={0} enablePan={false} enableZoom={false} minPolarAngle={Math.PI / 2.1} maxPolarAngle={Math.PI / 2.1} />
          <Suspense>  
              <Suspense fallback={null}>{start && <CanExperience />}</Suspense>
          </Suspense>
        </Canvas> 
        <LoadingScreen started={start} onStarted={() => setStart(true)} />
    </div>
  )
}
