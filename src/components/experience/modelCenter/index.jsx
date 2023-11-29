import React, { useState, useEffect } from 'react'

import { useThree } from '@react-three/fiber'
import { animated, config, useSpring } from '@react-spring/three'
import { Center, ContactShadows, PerspectiveCamera, Text } from '@react-three/drei'
import { CanLabel } from '../../can/index'
import { useConfigurator } from '../../../context/index'

import Annotation from '../../annotations/index'
import Clouding from '../../clouds/index'
import ContactButton from '../../contactButtons/index'
import Floor from '../../floor/index'
import Lights from '../../lights/index'


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
    from: { position: [-20, 10, 50] },
    to: { position: cameraPosition }
  });

  //Text disappear
  const [textVisible, setTextVisible] = useState(true)

  useEffect(() => {
    const handleClick = () => {
      setTextVisible(false)
      window.removeEventListener('mousedown', handleClick)
    }

    window.addEventListener('mousedown', handleClick)

    return () => {
      window.removeEventListener('mousedown', handleClick)
    }
  }, [])


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
      <Clouding />
      <ContactButton />
      <ContactShadows 
        resolution={256} 
        position={[0, -2.41, 0]} 
        scale={15}
        blur={0.3} 
        opacity={0.8}
      />
      {textVisible && (
        <Text
          fontSize={0.3}
          position={[ -4.3, -2.3, -4.5]}
          rotation-y={0.5}
          color="white"
          material-toneMapped={false}
        >
          Drag to Explore
        </Text>
      )}
    </>
  )
}