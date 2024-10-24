import { useEffect, useState } from 'react'


export default function useOnMobile() {

  const [ onMobile, setOnMobile ] = useState(false)

  useEffect(() => {
    const handleResize = () => {
      setOnMobile(window.innerWidth < 930)
    }
    
    handleResize()
    window.addEventListener('resize', handleResize)
    
    return () => {
      window.removeEventListener('resize', handleResize)
    }
  }, [])

  return onMobile
}