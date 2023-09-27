import React from 'react'
import { Canvas } from '@react-three/fiber'
import { Center, OrbitControls, Grid, Stage } from '@react-three/drei'
import { Can } from './Can'


export default function Experience() {
  
  return (
    <div className="canvas">
        <Canvas shadows camera={{ position: [0, 0, 10], fov: 35 }}>
            <OrbitControls autoRotate autoRotateSpeed={0} enablePan={false} enableZoom={false} minPolarAngle={Math.PI / 2.1} maxPolarAngle={Math.PI / 2.1} />
            <Grid renderOrder={-1} position={[0, -2.4, 0]} infiniteGrid cellSize={1.5} cellThickness={0.6} sectionSize={3} sectionThickness={1.6} sectionColor="grey" fadeDistance={30} />
            <Center>
                <Stage preset="rembrandt" intensity={0.1} environment="city" adjustCamera={false}>
                    <Can receiveShadow castShadow/>
                </Stage>
            </Center>
        </Canvas>
    </div>
  )
}
