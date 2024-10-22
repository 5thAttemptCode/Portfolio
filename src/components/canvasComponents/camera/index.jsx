import React from 'react'
import { animated, config, useSpring } from '@react-spring/three'
import { PerspectiveCamera } from '@react-three/drei'
import { useCameraContext } from '@/context/cameraContext'


const AnimatedPerspectiveCamera = animated(PerspectiveCamera)


export default function AnimatedCamera() {
  
  //Responsive
  const onMobile = window.innerWidth < 930

  // Configurator context
  const { cameraPosition, animatedCameraPosition } = useCameraContext()

  // Camera animation
  const springProps = useSpring({
    loop: false,
    config: config.slow,
    from: { position: animatedCameraPosition },
    to: { position: cameraPosition }
  })
 
  return (
    <AnimatedPerspectiveCamera 
      makeDefault 
      fov={onMobile ? 44 : 38} 
      {...springProps} 
    />
  )
}
