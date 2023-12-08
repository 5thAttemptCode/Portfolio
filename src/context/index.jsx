import { createContext, useContext, useState, useRef, useEffect } from "react";

const CameraContext = createContext();

export const CameraProvider = ({ children }) => {
    const initialCameraPosition = [0, 1.28, 8.82];
    const [cameraPosition, setCameraPosition] = useState(initialCameraPosition);
    const [modalOpen, setModalOpen] = useState(false);
    const [menuOpen, setMenuOpen] = useState(false);
    let menuRef = useRef(null);
    let hamburgerRef = useRef(null);

    useEffect(() => {
        const handler = (e) => {
            if (hamburgerRef.current && !hamburgerRef.current.contains(e.target) && 
                (!menuRef.current || !menuRef.current.contains(e.target))) {
                setMenuOpen(false);
            }
        };

        window.addEventListener('mousedown', handler);

        return () => {
            window.removeEventListener('mousedown', handler);
        };
    }, [menuOpen]);

    const closeMenu = () => {
        setMenuOpen(false);
        // remove the setCameraPosition here or revert it to previous state, it won't set to initial position
    };

    return (
        <CameraContext.Provider 
            value={{
                cameraPosition, 
                setCameraPosition, 
                modalOpen, 
                setModalOpen, 
                menuOpen, 
                setMenuOpen, 
                closeMenu,
                menuRef,
                hamburgerRef
            }}
        >
            {children}
        </CameraContext.Provider>
    );
}

export const useConfigurator = () => {
    return useContext(CameraContext);
}