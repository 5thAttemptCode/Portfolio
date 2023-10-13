import { createContext, useContext, useState } from "react";


const CameraContext = createContext()

export const CameraProvider = ({ children }) => {
    const [ cameraPosition, setCameraPosition ] = useState([0, 0.1, 9])

    return <CameraContext.Provider value={{ cameraPosition, setCameraPosition }}>
                {children}
            </CameraContext.Provider>
        }

export const useConfigurator = () => {
    return useContext(CameraContext) 
}