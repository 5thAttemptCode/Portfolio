import React, { useEffect, useState } from 'react'
import './style.css'
import { Hand } from 'phosphor-react'


export default function DragNotice() {

  const [ textVisible, setTextVisible ] = useState(true)

  useEffect(() => {
    const handleClick = () => {
      setTextVisible(false)
      window.removeEventListener('pointerdown', handleClick)
    }

    window.addEventListener('pointerdown', handleClick)

    return () => {
      window.removeEventListener('pointerdown', handleClick)
    }
  }, [])

  return (
    <>
      {textVisible && 
        <div className='drag-notice'>
          <Hand className='hand' size={32} />
          <h3>Drag to Explore</h3>
        </div>
      }
    </>
  )
}
