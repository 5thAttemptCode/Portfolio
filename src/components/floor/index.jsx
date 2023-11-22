import React from 'react'

import { Grid, MeshReflectorMaterial, useTexture } from '@react-three/drei'


export default function Floor() {

  const [ roughness, normal] = useTexture(["/Textures/Roughness.jpg", "/Textures/Normal.jpg"])

  return (
    <>
      <Grid 
        renderOrder={-1} 
        position={[0, -2.4, 0]} 
        infiniteGrid 
        cellSize={1.5} 
        cellThickness={0.6} 
        sectionSize={3} 
        sectionThickness={1.6} 
        sectionColor="blue"
        fadeDistance={28} 
      />
      <mesh 
        castShadow 
        receiveShadow 
        position-y={-2.45} 
        rotation-x={Math.PI / -2}
      >
        <planeGeometry args={[20, 30]}/>
        <MeshReflectorMaterial 
          envMapIntensity={0}
          color={[0.001, 0.003, 0.015]}
          roughness={0.2}
          roughnessMap={roughness}
          normalMap={normal}
          blur={[1000, 400]}
          mixBlur={30}
          mixStrength={80}
          mixContrast={1}
          resolution={256}
          mirror={0}
          minDepthThreshold={0.9}
          maxDepthThreshold={1}
          depthToBlurRatioBias={0.25}
          debug={0}
          reflectorOffset={0.2}
        />
      </mesh>
    </>
  )
}
