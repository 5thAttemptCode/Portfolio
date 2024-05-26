import React, { useState } from 'react'
import { Html } from '@react-three/drei'
import { useMenu } from '@/context/menuContext'
import { useModal } from '@/context/modalContext'


export default function Contact(props) {

    const [ hidden, set ] = useState()
    const { menuOpen } = useMenu()
    const { modalOpen } = useModal()
  
    return(
      <Html
        onPointerEnter={ () => {document.body.style.cursor = "grab"}}
        onPointerLeave={ () => {document.body.style.cursor = "default"}}
        position={props.position}
        rotation-y={props.rotation}
        distanceFactor={3}
        transform 
        occlude
        style={{
          transition: 'all 0.2s',
          opacity: (hidden || menuOpen || modalOpen) ? 0 : 1,
          transform: `scale(${(hidden || menuOpen || modalOpen) ? 0 : 1})`,
          pointerEvents: ((hidden || menuOpen || modalOpen) ? "none" : "auto"),
        }}
      >
        <div className="contact-wrapper">
          {props.text}
        </div>
      </Html>
    )
  }