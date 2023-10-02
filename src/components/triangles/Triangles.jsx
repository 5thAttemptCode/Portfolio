import { Sparkles } from '@react-three/drei'
import { useFrame } from '@react-three/fiber'
import { Bloom, EffectComposer } from '@react-three/postprocessing'
import React, { useRef } from 'react'
import { DoubleSide } from 'three'

export default function Triangles() {

  const ref = useRef()

  useFrame((_state, delta) => {
     ref.current.rotation.y += delta * 0.3
  })

  return (
    <>
      <mesh ref={ref} position={[ -5, -1.5, -8]} rotation-z={0.5}>
        <ringGeometry args={[ 0.9, 1, 3, 1]} />
        <meshStandardMaterial side={DoubleSide} emissive="#38bdf8" emissiveIntensity={5} toneMapped={false} />
      </mesh>
      <Sparkles position={[ -5, -1.5, -8]} color="#9e5ae1" count={8} scale={1.6} size={30} speed={0.4} />
      <EffectComposer>
        <Bloom  />
      </EffectComposer>
    </>
  )
}
