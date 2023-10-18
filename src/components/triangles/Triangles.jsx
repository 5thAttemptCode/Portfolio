import React, { useRef } from 'react'
import { useFrame } from '@react-three/fiber'
import { Bloom, EffectComposer } from '@react-three/postprocessing'
import { DoubleSide } from 'three'


export default function Triangles() {

  const ref = useRef()

  // useFrame((_state, delta) => {
  //    ref.current.rotation.y += delta * 0.5
  // })

  return (
    <>
      <mesh ref={ref} position={[ -5, -1.5, -8]} rotation-z={0.5}>
        <ringGeometry args={[ 0.9, 1, 3, 1]} />
        <meshStandardMaterial 
          side={DoubleSide} 
          color={[0, 0, 2]} 
          emissive={[0, 0, 4]} 
          emissiveIntensity={3} 
          toneMapped={false} 
        />
      </mesh>

      <EffectComposer>
        <Bloom 
        mipmapBlur 
        intensity={0.4}
        luminanceThreshold={1} />
      </EffectComposer>
    </>
  )
}
