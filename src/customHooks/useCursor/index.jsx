import { useCallback } from "react"


const useCursor = () => {

    const setCursor = useCallback((cursorStyle) => {
        document.body.style.cursor = cursorStyle;
    }, [])

    const handlePointerEnter = () => setCursor("grab")
    const handlePointerLeave = () => setCursor("default")
    const handlePointerDown = () => setCursor("grabbing")
    const handlePointerUp = () => setCursor("grab")

    return {
        handlePointerEnter,
        handlePointerLeave,
        handlePointerDown,
        handlePointerUp
    }
}

export default useCursor