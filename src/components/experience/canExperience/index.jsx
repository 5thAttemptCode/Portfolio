import React from 'react'
import { Center } from '@react-three/drei'
import { SodaCan } from '@/components/canvasComponents/can/index'
import AnimatedCamera from '@/components/canvasComponents/camera'
import Annotation from '@/components/canvasComponents/annotations/index'
import Clouding from '@/components/canvasComponents/clouds/index'
import ContactButton from '@/components/canvasComponents/contactButtons/index'
import Floor from '@/components/canvasComponents/floor/index'
import Lights from '@/components/canvasComponents/lights/index'
import Shadows from '@/components/canvasComponents/shadows'
import useOnMobile from '@/customHooks/useOnMobile'


export default function CanExperience() {

  const onMobile = useOnMobile()

  return (
    <>
      <AnimatedCamera />
      <Annotation />
      <ContactButton />
      <Floor />
      <Lights />
      <Shadows />
      {!onMobile && <Clouding />}

      <Center>
        <SodaCan
          castShadow
          recieveShadow
          rotation-y={3.12} 
          onPointerEnter={ () => {document.body.style.cursor = "grab"}}
          onPointerLeave={ () => {document.body.style.cursor = "default"}}
        />
      </Center>
    </>
  )
}