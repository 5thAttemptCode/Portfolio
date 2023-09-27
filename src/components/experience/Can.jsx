/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
Command: npx gltfjsx@6.2.7 public/can.gltf -o src/Can.jsx -r public
*/

import React, { useRef } from 'react'
import { useGLTF } from '@react-three/drei'

export function Can(props) {
  const { nodes, materials } = useGLTF('/can.gltf')
  return (
    <group {...props} dispose={null}>
      <mesh geometry={nodes['Can-main'].geometry} material={materials['Material.002']} position={[0, 3.471, -0.289]} scale={[-1.324, -2.473, -1.324]} />
      <mesh geometry={nodes['Can-top'].geometry} material={materials['Material.002']} position={[-0.004, 5.857, -0.29]} />
      <mesh geometry={nodes['Can-label'].geometry} material={materials['Material.001']} position={[0, 3.471, -0.289]} scale={[-1.324, -2.473, -1.324]} />
      <mesh geometry={nodes['Can-upper'].geometry} material={materials['Material.001']} position={[0, 3.471, -0.289]} scale={[-1.324, -2.473, -1.324]} />
    </group>
  )
}

useGLTF.preload('/can.gltf')
