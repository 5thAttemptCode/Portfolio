import React from 'react'
import { Grid, MeshReflectorMaterial, useTexture } from '@react-three/drei'


export default function Floor() {

  const [ roughness, normal ] = useTexture(["/Textures/Roughness.jpg", "/Textures/Normal.jpg"])

  const size = 1
  const thickness = 1

  return (
    <>
      <Grid 
        fadeDistance={28} 
        infiniteGrid 
        position={[ 0, -2.4, 0 ]} 
        renderOrder={-1} 
        cellSize={size} 
        cellThickness={thickness} 
        sectionSize={size} 
        sectionThickness={thickness} 
        sectionColor="blue"
      />
      <mesh 
        position-y={-2.45} 
        receiveShadow 
        rotation-x={Math.PI / -2}
      >
        <planeGeometry args={[ 30, 30 ]}/>
        <MeshReflectorMaterial 
          blur={[ 1000, 400 ]}
          color={[ 0.001, 0.003, 0.015 ]}
          debug={0}
          depthToBlurRatioBias={0.25}
          envMapIntensity={0}
          maxDepthThreshold={1}
          mixBlur={30}
          mixContrast={1}
          minDepthThreshold={0.9}
          mirror={0}
          mixStrength={80}
          normalMap={normal}
          reflectorOffset={0.2}
          resolution={256}
          roughness={0.2}
          roughnessMap={roughness}
        />
      </mesh>
    </>
  )
}
