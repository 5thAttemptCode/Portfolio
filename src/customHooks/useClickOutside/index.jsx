import { useEffect } from "react"


const useClickOutside = ({containerRef, childRef, isActive, toggle}) => {
  const handleClickOutside = (event) => {
    if (containerRef.current && !childRef.current.contains(event.target)) {
      toggle()
      event.stopPropagation()
    }
  }

  useEffect(() => {
    if (isActive) {
      document.addEventListener('mousedown', handleClickOutside)
    } else {
      document.removeEventListener('mousedown', handleClickOutside)
    }
    
    return () => {
      document.removeEventListener('mousedown', handleClickOutside)
    }
  }, [isActive, containerRef, childRef, toggle])
}

export default useClickOutside