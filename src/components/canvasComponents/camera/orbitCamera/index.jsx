import { useEffect } from "react"
import { useThree } from "@react-three/fiber"
import useCameraStore from "@/context/cameraContext"


function OrbitCamera() {

  const { camera } = useThree()
  const { setCameraPosition, setDisableAnimation, setHasInteracted } = useCameraStore()

  useEffect(() => {
    const updateCameraPosition = () => {
      const { x, y, z } = camera.position
      setCameraPosition([x, y, z])
      setDisableAnimation(true)
      setHasInteracted(true)
    }

    window.addEventListener("mouseup", updateCameraPosition)

    return () => {
      window.removeEventListener("mouseup", updateCameraPosition)
    }
  }, [ setCameraPosition, setDisableAnimation, setHasInteracted, camera ])

  return null
}

export default OrbitCamera
