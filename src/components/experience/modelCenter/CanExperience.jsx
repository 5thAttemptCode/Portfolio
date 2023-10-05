import React, { useState } from 'react'
import { CanLabel } from '../../can/CanLabel'
import { Can } from '../../can/Can'
import { Center, Grid, ContactShadows, PerspectiveCamera, Html } from '@react-three/drei'
import Lights from '../../lights/Lights'
import Triangles from '../../triangles/Triangles'
import Annotation from '../../annotations/Annotation'


export default function CanExperience() {

  const [cameraPosition, setCameraPosition] = useState([0, 0.1, 9])
  
  return (
    <>
      <PerspectiveCamera position={cameraPosition} fov={35} makeDefault />
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
      <Annotation />
      <Center>
        <CanLabel 
          castShadow 
          rotation-y={3.12} 
          onPointerEnter={ () => {document.body.style.cursor = "grab"}}
          onPointerLeave={ () => {document.body.style.cursor = "default"}}
        />
        {/* <Can /> */}
      </Center>
      
      {/* <Triangles /> */}
    </>
  )
}
