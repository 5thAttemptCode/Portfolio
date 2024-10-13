import React, { useEffect, useState } from 'react'
import './style.css'
import { Hand } from 'phosphor-react'


export default function DragNotice() {

  const [textVisible, setTextVisible] = useState(false)

  // timeOut for DragNotice
  useEffect(() => {
    let timeoutId;
    timeoutId = setTimeout(() => {
      setTextVisible(true)
    }, 1200)

    return () => {
      clearTimeout(timeoutId)
    }
  }, [])

  // Remove on first pointerDown
  const handleClick = () => {
    setTextVisible(false);
    window.removeEventListener('pointerdown', handleClick)
  }

  useEffect(() => {
    window.addEventListener('pointerdown', handleClick)

    return () => {
      window.removeEventListener('pointerdown', handleClick)
    }
  }, [ handleClick ])

  return (
    <>
      {textVisible && (
        <div className='drag-notice' >
          <Hand className='hand' size={32} />
          <h3>Drag to Explore</h3>
        </div>
      )}
    </>
  );
}