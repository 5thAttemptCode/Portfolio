import React from 'react'
import { Canvas } from '@react-three/fiber'
import { Center, Environment, OrbitControls, Grid, Lightformer, Stage } from '@react-three/drei'
import { Can } from './Can'

export default function Experience() {
  return (
    <div className="canvas">
        <Canvas shadows camera={{ position: [0, 0, 10], fov: 35 }}>

            <color attach="background" args={['#150DF7']} />
            <OrbitControls autoRotate autoRotateSpeed={0} enablePan={false} enableZoom={false} minPolarAngle={Math.PI / 2.1} maxPolarAngle={Math.PI / 2.1} />
            <Grid receiveShadow renderOrder={-1} position={[0, -2.4, 0]} infiniteGrid cellSize={1.5} cellThickness={0.6} sectionSize={3} sectionThickness={1.5} sectionColor={[0.5, 0.5, 10]} fadeDistance={30} />
            <Environment  preset='city' /> 

            <Center receiveShadow castShadow>
                <Stage adjustCamera={false}>
                    <Can />
                </Stage>
            </Center>

        </Canvas>
    </div>
  )
}
