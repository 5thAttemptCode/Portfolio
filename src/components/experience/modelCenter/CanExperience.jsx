import React from 'react'
import { CanLabel } from '../../can/CanLabel'
import { Center, ContactShadows, PerspectiveCamera } from '@react-three/drei'
import { useConfigurator } from '../../../context/Context'
import { useThree } from '@react-three/fiber'
import { useSpring, animated, config } from '@react-spring/three'
import Lights from '../../lights/Lights'
import Annotation from '../../annotations/Annotation'
import ContactButton from '../../contactButtons/ContactButton'
import Floor from '../../floor/Floor'
import Triangles from '../../triangles/Triangles'


const AnimatedPerspectiveCamera = animated(PerspectiveCamera);


export default function CanExperience() {

  //Responsive
  const { viewport } = useThree()
  const onMobile = window.innerWidth < 930

  // Configurator context
  const { cameraPosition } = useConfigurator()

  // Camera animation
  const springProps = useSpring({
    loop: false,
    config: config.slow,
    from: { position: [-15, 10, 50] },
    to: { position: cameraPosition }
  });


  return (
    <>
      <AnimatedPerspectiveCamera 
        makeDefault 
        fov={onMobile ? 44 : 38} 
        {...springProps} 
      />

      <Center>
        <CanLabel 
          castShadow
          recieveShadow
          rotation-y={3.12} 
          onPointerEnter={ () => {document.body.style.cursor = "grab"}}
          onPointerLeave={ () => {document.body.style.cursor = "default"}}
        />
      </Center>

      <Floor />
      <Lights />
      <Annotation />
      <ContactButton />
      <ContactShadows 
        resolution={256} 
        position={[0, -2.41, 0]} 
        scale={15}
        blur={0.3} 
        opacity={0.8}
      />
      {/* <Triangles /> */}
    </>
  )
}
