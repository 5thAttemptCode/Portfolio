import React from 'react'
import { Environment, Lightformer } from '@react-three/drei'


export default function Lights() {

  return (
    <>
      <hemisphereLight intensity={1} />
      <Environment resolution={512}>
      {/* Ceiling */}
      <group>
        <Lightformer form="ring" intensity={6} rotation-x={Math.PI / 2} position={[-6, 4, -6]} scale={[100, 1, 1]} />
        <Lightformer form="ring" intensity={6} rotation-x={Math.PI / 2} position={[-3, 4, -3]} scale={[100, 1, 1]} />
        <Lightformer form="ring" intensity={6} rotation-x={Math.PI / 2} position={[-9, 4, -9]} scale={[100, 1, 1]} />
        <Lightformer form="ring" intensity={6} rotation-x={Math.PI / 2} position={[0, 4, 0]} scale={[100, 1, 1]} />
        <Lightformer form="ring" intensity={6} rotation-x={Math.PI} position={[0, 0, 5]} scale={[100, 1, 1]} />
        <Lightformer form="ring" intensity={6} rotation-x={Math.PI / 2} position={[3, 4, 3]} scale={[100, 1, 1]} />
        <Lightformer form="ring" intensity={6} rotation-x={Math.PI / 2} position={[6, 4, 6]} scale={[100, 1, 1]} />
        <Lightformer form="ring" intensity={6} rotation-x={Math.PI / 2} position={[9, 4, 9]} scale={[100, 1, 1]} />
      </group>

      {/* Floor */}
      <group>
        <Lightformer form="ring" intensity={2} rotation-x={Math.PI / 2} position={[-6, -4, -6]} scale={[100, 1, 1]} />
        <Lightformer form="ring" intensity={2} rotation-x={Math.PI / 2} position={[-3, -4, -3]} scale={[100, 1, 1]} />
        <Lightformer form="ring" intensity={2} rotation-x={Math.PI / 2} position={[-9, -4, -9]} scale={[100, 1, 1]} />
        <Lightformer form="ring" intensity={2} rotation-x={Math.PI / 2} position={[0, -4, 0]} scale={[100, 1, 1]} />
        <Lightformer form="ring" intensity={2} rotation-x={Math.PI / 2} position={[3, -4, 3]} scale={[100, 1, 1]} />
        <Lightformer form="ring" intensity={2} rotation-x={Math.PI / 2} position={[6, -4, 6]} scale={[100, 1, 1]} />
        <Lightformer form="ring" intensity={2} rotation-x={Math.PI / 2} position={[9, -4, 9]} scale={[100, 1, 1]} />
      </group>

      {/* Sides */}
        <Lightformer form="ring" intensity={0.4} rotation-y={Math.PI / 2} position={[-1, 2, 0]} scale={[50, 2, 1]} />
        <Lightformer form="ring" intensity={0.4} rotation-y={-Math.PI / 2} position={[1, 2, 0]} scale={[50, 2, 1]} />
        <Lightformer form="ring" intensity={0.4} rotation-y={-Math.PI / 2} position={[1, -2, 0]} scale={[50, 2, 1]} />
        <Lightformer form="ring" intensity={0.4} rotation-y={-Math.PI / 2} position={[-1, -2, 0]} scale={[50, 2, 1]} /> 
      </Environment>
    </>
  )
}

