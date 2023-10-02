import React, { useRef } from 'react'
import { CanLabel } from '../../can/CanLabel'
import { Can } from '../../can/Can'
import { Center, Environment, Grid, Lightformer, ContactShadows } from '@react-three/drei'
import { useFrame } from '@react-three/fiber'
import Lights from '../../lights/Lights'
import Triangles from '../../triangles/Triangles'


export default function CanExperience() {

  return (
    <>
      <Grid 
        renderOrder={-1} 
        position={[0, -2.4, 0]} 
        infiniteGrid cellSize={1.5} 
        cellThickness={0.6} 
        sectionSize={3} 
        sectionThickness={1.6} 
        sectionColor="grey" 
        fadeDistance={20} 
      />
      <ContactShadows 
        resolution={1024} 
        position={[0, -2.41, 0]} 
        scale={15} blur={0.5} 
        opacity={1}
      />

      <hemisphereLight intensity={1.3} />
      <Lights />

      <Center>
        {/* <CanLabel castShadow rotation-y={3.12} /> */}
        <Can />
      </Center>

      <Triangles />
    </>
  )
}
