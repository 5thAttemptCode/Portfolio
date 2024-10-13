import React from 'react'
import { ContactShadows } from '@react-three/drei'


export default function Shadows() {

  return (
    <ContactShadows 
      resolution={256} 
      position={[0, -2.41, 0]} 
      scale={15}
      blur={0.3} 
      opacity={0.8}
    />
  )
}
