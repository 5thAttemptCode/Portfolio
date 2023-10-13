import React, { useState } from 'react'
import { CanLabel } from '../../can/CanLabel'
import { Can } from '../../can/Can'
import { Center, ContactShadows, PerspectiveCamera, useTexture } from '@react-three/drei'
import Lights from '../../lights/Lights'
import Triangles from '../../triangles/Triangles'
import Annotation from '../../annotations/Annotation'
import ContactButton from '../../contactButtons/ContactButton'
import Floor from '../../floor/Floor'
import { useConfigurator } from '../../../context/Context'


export default function CanExperience() {

  const {cameraPosition} = useConfigurator()

  return (
    <>
      <PerspectiveCamera position={cameraPosition} fov={36} makeDefault />
      <Floor />
      <Lights />
      <ContactShadows 
        resolution={1024} 
        position={[0, -2.41, 0]} 
        scale={15} blur={0.5} 
        opacity={1}
      />

      <Center>
        <CanLabel 
          castShadow
          recieveShadow
          rotation-y={3.12} 
          onPointerEnter={ () => {document.body.style.cursor = "grab"}}
          onPointerLeave={ () => {document.body.style.cursor = "default"}}
        />
        {/* <Can /> */}
      </Center>

      <Annotation />
      <ContactButton />

      {/* <Triangles /> */}
    </>
  )
}
