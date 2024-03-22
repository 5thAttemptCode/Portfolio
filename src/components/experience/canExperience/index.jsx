import React from 'react'
import { animated, config, useSpring } from '@react-spring/three'
import { Center, ContactShadows, PerspectiveCamera} from '@react-three/drei'
import { useConfigurator } from '@/context/index'
import Annotation from '@/components/canvasComponents/annotations/index'
import Clouding from '@/components/canvasComponents/clouds/index'
import ContactButton from '@/components/canvasComponents/contactButtons/index'
import Floor from '@/components/canvasComponents/floor/index'
import Lights from '@/components/canvasComponents/lights/index'
import { SodaCan } from '@/components/canvasComponents/can/SodaCan'


const AnimatedPerspectiveCamera = animated(PerspectiveCamera)


export default function CanExperience() {

  //Responsive
  const onMobile = window.innerWidth < 930
  
  // Configurator context
  const { cameraPosition } = useConfigurator()

  // Camera animation
  const springProps = useSpring({
    loop: false,
    config: config.slow,
    from: { position: [-20, 10, 50] },
    to: { position: cameraPosition }
  })

  return (
    <>
      <AnimatedPerspectiveCamera 
        makeDefault 
        fov={onMobile ? 44 : 38} 
        {...springProps} 
      />

      <Center>
        <SodaCan
          castShadow
          recieveShadow
          rotation-y={3.12} 
          onPointerEnter={ () => {document.body.style.cursor = "grab"}}
          onPointerLeave={ () => {document.body.style.cursor = "default"}}
        />
      </Center>

      <ContactShadows 
        resolution={256} 
        position={[0, -2.41, 0]} 
        scale={15}
        blur={0.3} 
        opacity={0.8}
      />

      <Floor />
      <Lights />
      <Annotation />
      <Clouding />
      <ContactButton />
    </>
  )
}
