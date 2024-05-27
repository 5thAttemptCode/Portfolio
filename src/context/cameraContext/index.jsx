import React, { createContext, useContext, useState, useEffect } from "react"


const CameraContext = createContext()

export const CameraProvider = ({ children }) => {
  
  const initialCameraPosition = [0, 1.28, 8.82]
  const [ cameraPosition, setCameraPosition ] = useState(initialCameraPosition)

  useEffect(() => {
  }, [cameraPosition])

  return (
    <CameraContext.Provider
      value={{
        cameraPosition,
        setCameraPosition,
      }}
    >
      {children}
    </CameraContext.Provider>
  )
}

export const useCameraContext = () => {
  return useContext(CameraContext)
}