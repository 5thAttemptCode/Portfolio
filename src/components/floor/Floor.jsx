import React from 'react'
import { Grid, MeshReflectorMaterial, useTexture } from '@react-three/drei'


export default function Floor() {

    const [ roughness, normal] = useTexture(["../../public/Textures/Roughness.jpg", "../../public/Textures/Normal.jpg"])
  
    return (
    <>
      <Grid 
        renderOrder={-1} 
        position={[0, -2.4, 0]} 
        infiniteGrid cellSize={1.5} 
        cellThickness={0.6} 
        sectionSize={3} 
        sectionThickness={1.6} 
        sectionColor="#ff00ff"
        fadeDistance={20} 
      />
      <mesh castShadow receiveShadow position-y={-2.45} rotation-x={Math.PI / -2}>
        <planeGeometry args={[30, 30]} />
        <MeshReflectorMaterial 
          envMapIntensity={0}
          color={[0.001, 0.003, 0.015]}
          roughness={0.7}
          roughnessMap={roughness}
          normalMap={normal}
          blur={[1000, 400]}
          mixBlur={30}
          mixStrength={80}
          mixContrast={1}
          resolution={1024}
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
