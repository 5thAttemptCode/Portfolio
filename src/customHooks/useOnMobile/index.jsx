import { useEffect, useState } from 'react'


export default function useOnMobile() {

  const isMobile = () => window.innerWidth < 930
  const [ onMobile, setOnMobile ] = useState(isMobile)

  useEffect(() => {
    const handleResize = () => setOnMobile(isMobile)

    window.addEventListener('resize', handleResize)
    return () => window.removeEventListener('resize', handleResize)
  }, [])

  return onMobile
}
