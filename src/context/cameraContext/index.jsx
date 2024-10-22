import React, { createContext, useContext, useState, useEffect } from "react"


const CameraContext = createContext()

export const CameraProvider = ({ children }) => {
  
  const initialCameraPosition = [ 0, 1.28, 8.82 ]
  const animatedCameraPosition = [ -20, 10, 50 ]

  const [ cameraPosition, setCameraPosition ] = useState(initialCameraPosition)

  useEffect(() => {
  }, [cameraPosition])

  return (
    <CameraContext.Provider
      value={{
        cameraPosition,
        setCameraPosition,
        initialCameraPosition,
        animatedCameraPosition
      }}
    >
      {children}
    </CameraContext.Provider>
  )
}

export const useCameraContext = () => {
  return useContext(CameraContext)
}