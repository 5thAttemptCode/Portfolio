import React, { createContext, useContext, useState } from "react"


const CameraContext = createContext()


export const CameraProvider = ({ children }) => {

  const initialCameraPosition = [ 0, 1.28, 8.82 ]
  const animatedCameraPosition = [ -20, 10, 50 ]

  const [ cameraPosition, setCameraPositionState ] = useState(initialCameraPosition)
  const [ disableAnimation, setDisableAnimation ] = useState(false)
  const [ hasInteracted, setHasInteracted ] = useState(false)

  // Enhanced setCameraPosition with animation control
  const setCameraPosition = (position, useAnimation = true) => {
    setDisableAnimation(!useAnimation) // Enable/disable animation based on parameter
    setCameraPositionState(position)
  }

  return (
    <CameraContext.Provider
      value={{
        cameraPosition,
        setCameraPosition,
        disableAnimation,
        setDisableAnimation,
        hasInteracted,
        setHasInteracted,
        initialCameraPosition,
        animatedCameraPosition,
      }}
    >
      {children}
    </CameraContext.Provider>
  )
}

export const useCameraContext = () => {
  return useContext(CameraContext)
}