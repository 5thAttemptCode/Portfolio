import React from 'react'
import { Lightformer } from '@react-three/drei'


export default function LightFormer({ intensity, rotationX, rotationY, position, scale }) {
  return (
    <Lightformer
      form="ring"
      intensity={intensity}
      rotation-x={rotationX || null}
      rotation-y={rotationY || null}
      position={position}
      scale={scale}
    />
  )
}
