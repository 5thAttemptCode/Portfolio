import React from 'react'
import { Environment } from '@react-three/drei'
import LightFormer from './components/lightFormer'


export default function Lights() {

  const intensityCeiling = 6
  const intensityFloor = 2
  const intensitySides = 0.4

  const lightPropsCeiling = [
    { intensity: intensityCeiling, rotationX: Math.PI / 2, position: [-6, 4, -6], scale: [10, 1, 1] },
    { intensity: intensityCeiling, rotationX: Math.PI / 2, position: [-3, 4, -3], scale: [10, 1, 1] },
    { intensity: intensityCeiling, rotationX: Math.PI / 2, position: [-9, 4, -9], scale: [10, 1, 1] },
    { intensity: intensityCeiling, rotationX: Math.PI / 2, position: [0, 4, 0], scale: [10, 1, 1] },
    { intensity: intensityCeiling, rotationX: Math.PI / 2, position: [0, 0, 5], scale: [10, 1, 1] },
    { intensity: intensityCeiling, rotationX: Math.PI / 2, position: [3, 4, 3], scale: [10, 1, 1] },
    { intensity: intensityCeiling, rotationX: Math.PI / 2, position: [6, 4, 6], scale: [10, 1, 1] },
    { intensity: intensityCeiling, rotationX: Math.PI / 2, position: [9, 4, 9], scale: [10, 1, 1] },
  ]

  const lightPropsFloor = [
    { intensity: intensityFloor, rotationX: Math.PI / 2, position: [-6, -4, -6], scale: [10, 1, 1] },
    { intensity: intensityFloor, rotationX: Math.PI / 2, position: [-3, -4, -3], scale: [10, 1, 1] },
    { intensity: intensityFloor, rotationX: Math.PI / 2, position: [-9, -4, -9], scale: [10, 1, 1] },
    { intensity: intensityFloor, rotationX: Math.PI / 2, position: [0, -4, 0], scale: [10, 1, 1] },
    { intensity: intensityFloor, rotationX: Math.PI / 2, position: [3, -4, 3], scale: [10, 1, 1] },
    { intensity: intensityFloor, rotationX: Math.PI / 2, position: [6, -4, 6], scale: [10, 1, 1] },
    { intensity: intensityFloor, rotationX: Math.PI / 2, position: [9, -4, 9], scale: [10, 1, 1] },
  ]

  const lightPropsSides = [
    { intensity: intensitySides, rotationY: Math.PI / 2, position: [-1, 2, 0], scale: [50, 2, 1] },
    { intensity: intensitySides, rotationY: -Math.PI / 2, position: [1, 2, 0], scale: [50, 2, 1] },
    { intensity: intensitySides, rotationY: -Math.PI / 2, position: [1, -2, 0], scale: [50, 2, 1] },
    { intensity: intensitySides, rotationY: -Math.PI / 2, position: [-1, -2, 0], scale: [50, 2, 1] }, 
  ]

  return (
    <>
      <ambientLight />
      <Environment>
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

