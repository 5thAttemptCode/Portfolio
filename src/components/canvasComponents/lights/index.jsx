import React from 'react'
import { Environment } from '@react-three/drei'
import LightFormer from './components/lightFormer'


export default function Lights() {

  const lightPropsCeiling = [
    { intensity: 6, rotationX: Math.PI / 2, position: [-6, 4, -6], scale: [100, 1, 1] },
    { intensity: 6, rotationX: Math.PI / 2, position: [-3, 4, -3], scale: [100, 1, 1] },
    { intensity: 6, rotationX: Math.PI / 2, position: [-9, 4, -9], scale: [100, 1, 1] },
    { intensity: 6, rotationX: Math.PI / 2, position: [0, 4, 0], scale: [100, 1, 1] },
    { intensity: 6, rotationX: Math.PI, position: [0, 0, 5], scale: [100, 1, 1] },
    { intensity: 6, rotationX: Math.PI / 2, position: [3, 4, 3], scale: [100, 1, 1] },
    { intensity: 6, rotationX: Math.PI / 2, position: [6, 4, 6], scale: [100, 1, 1] },
    { intensity: 6, rotationX: Math.PI / 2, position: [9, 4, 9], scale: [100, 1, 1] },
  ]

  const lightPropsFloor = [
    { intensity: 2, rotationX: Math.PI / 2, position: [-6, -4, -6], scale: [100, 1, 1] },
    { intensity: 2, rotationX: Math.PI / 2, position: [-3, -4, -3], scale: [100, 1, 1] },
    { intensity: 2, rotationX: Math.PI / 2, position: [-9, -4, -9], scale: [100, 1, 1] },
    { intensity: 2, rotationX: Math.PI / 2, position: [0, -4, 0], scale: [100, 1, 1] },
    { intensity: 2, rotationX: Math.PI / 2, position: [3, -4, 3], scale: [100, 1, 1] },
    { intensity: 2, rotationX: Math.PI / 2, position: [6, -4, 6], scale: [100, 1, 1] },
    { intensity: 2, rotationX: Math.PI / 2, position: [9, -4, 9], scale: [100, 1, 1] },
  ]

  const lightPropsSides = [
    { intensity: 0.4, rotationY: Math.PI / 2, position: [-1, 2, 0], scale: [50, 2, 1] },
    { intensity: 0.4, rotationY: -Math.PI / 2, position: [1, 2, 0], scale: [50, 2, 1] },
    { intensity: 0.4, rotationY: -Math.PI / 2, position: [1, -2, 0], scale: [50, 2, 1] },
    { intensity: 0.4, rotationY: -Math.PI / 2, position: [-1, -2, 0], scale: [50, 2, 1] }, 
  ]

  return (
    <>
      <hemisphereLight intensity={1} />
      <Environment resolution={512}>
        {/* Ceiling */}
        <group>
          {lightPropsCeiling.map((props, index) => <LightFormer key={`ceiling-${index}`} {...props} />)}
        </group>

        {/* Floor */}
        <group>
          {lightPropsFloor.map((props, index) => <LightFormer key={`floor-${index}`} {...props} />)}
        </group>

        {/* Sides */}
        <group>
          {lightPropsSides.map((props, index) => <LightFormer key={`sides-${index}`} {...props} />)}
        </group> 
      </Environment>
    </>
  )
}

