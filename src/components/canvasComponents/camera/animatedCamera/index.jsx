import React from "react"
import { animated, config, useSpring } from "@react-spring/three"
import { PerspectiveCamera } from "@react-three/drei"
import useCameraStore from "@/context/cameraContext"
import useOnMobile from "@/customHooks/useOnMobile"


const AnimatedPerspectiveCamera = animated(PerspectiveCamera)


export default function AnimatedCamera() {

  const onMobile = useOnMobile()

  const {
    cameraPosition,
    animatedCameraPosition,
    initialCameraPosition,
    disableAnimation,
    hasInteracted,
  } = useCameraStore()

  // Camera animation
  const springProps = useSpring({
    loop: false,
    config: config.slow,
    from: { position: animatedCameraPosition },
    to: {
      position: hasInteracted
        ? cameraPosition // Use the updated position after interaction
        : initialCameraPosition, // Default to initial position if no interaction
    },
    immediate: disableAnimation, // Skip animation when disabled
  })

  return (
    <AnimatedPerspectiveCamera
      makeDefault
      fov={onMobile ? 44 : 38}
      {...springProps}
    />
  )
}
