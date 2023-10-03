import { Environment, Lightformer } from '@react-three/drei'
import React from 'react'

export default function Lights() {
  return (
    <>
       <Environment resolution={512}>
          {/* Ceiling */}
          <Lightformer intensity={1} rotation-x={Math.PI / 2} position={[0, 4, -9]} scale={[100, 1, 1]} />
          <Lightformer intensity={1} rotation-x={Math.PI / 2} position={[0, 4, -6]} scale={[100, 1, 1]} />
          <Lightformer intensity={1} rotation-x={Math.PI / 2} position={[0, 4, -3]} scale={[100, 1, 1]} />
          <Lightformer intensity={1} rotation-x={Math.PI / 2} position={[0, 4, 0]} scale={[100, 1, 1]} />
          <Lightformer intensity={1} rotation-x={Math.PI / 2} position={[0, 4, 3]} scale={[100, 1, 1]} />
          <Lightformer intensity={1} rotation-x={Math.PI / 2} position={[0, 4, 6]} scale={[100, 1, 1]} />
          <Lightformer intensity={1} rotation-x={Math.PI / 2} position={[0, 4, 9]} scale={[100, 1, 1]} />

          {/* Floor */}
          <Lightformer intensity={0.6} rotation-x={Math.PI / 2} position={[0, -4, -9]} scale={[100, 1, 1]} />
          <Lightformer intensity={0.6} rotation-x={Math.PI / 2} position={[0, -4, -6]} scale={[100, 1, 1]} />
          <Lightformer intensity={0.6} rotation-x={Math.PI / 2} position={[0, -4, -3]} scale={[100, 1, 1]} />
          <Lightformer intensity={0.6} rotation-x={Math.PI / 2} position={[0, -4, 0]} scale={[100, 1, 1]} />
          <Lightformer intensity={0.6} rotation-x={Math.PI / 2} position={[0, -4, 3]} scale={[100, 1, 1]} />
          <Lightformer intensity={0.6} rotation-x={Math.PI / 2} position={[0, -4, 6]} scale={[100, 1, 1]} />
          <Lightformer intensity={0.6} rotation-x={Math.PI / 2} position={[0, -4, 9]} scale={[100, 1, 1]} />

          {/* Sides */}
          <Lightformer form="ring" intensity={0.6} rotation-y={Math.PI / 2} position={[-1, 2, 0]} scale={[50, 2, 1]} />
          <Lightformer form="ring" intensity={0.6} rotation-y={-Math.PI / 2} position={[1, 2, 0]} scale={[50, 2, 1]} />
          <Lightformer form="ring" intensity={0.6} rotation-y={-Math.PI / 2} position={[-1, -2, 0]} scale={[50, 2, 1]} />
          <Lightformer form="ring" intensity={0.6} rotation-y={-Math.PI / 2} position={[1, -2, 0]} scale={[50, 2, 1]} />
        </Environment>
    </>
  )
}
