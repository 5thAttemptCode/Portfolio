import React from 'react'
import { useGLTF } from '@react-three/drei'


export function SodaCan(props) {
  const { nodes, materials } = useGLTF('/Model/SodaCan.gltf')
  return (
    <group {...props} dispose={null}>
      <group position={[0, 3.471, -0.289]} scale={[-1.324, -2.473, -1.324]}>
        <mesh geometry={nodes.Cylinder003.geometry} material={materials['Material.001']} />
        <mesh geometry={nodes.Cylinder003_1.geometry} material={materials['Material.002']} />
        <mesh geometry={nodes.Cylinder003_2.geometry} material={materials['Material.003']} />
      </group>
    </group>
  )
}

useGLTF.preload('/Model/SodaCan.gltf')
