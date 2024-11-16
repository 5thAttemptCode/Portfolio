import React from 'react'
import { ContactShadows } from '@react-three/drei'
import useOnMobile from '@/customHooks/useOnMobile'


export default function Shadows() {

  const onMobile = useOnMobile()
  if (onMobile) return null

  return (
    <ContactShadows 
      resolution={256} 
      position={[0, -2.44, 0]} 
      scale={15}
      blur={0.3} 
    />
  )
}
