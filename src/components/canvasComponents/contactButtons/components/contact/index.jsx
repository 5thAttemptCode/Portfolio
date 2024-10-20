import React, { useState } from 'react'
import { Html } from '@react-three/drei'
import { useModal } from '@/context/modalContext'
import { useMenu } from '@/context/menuContext'


export default function Contact(props) {

    const [ hidden, set ] = useState()
    const { modalOpen } = useModal()
    const { menuOpen } = useMenu()
  
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
          display: (hidden || modalOpen || menuOpen ) ? "none" : "block"
        }}
      >
        <abbr title={props.title} className="contact-wrapper">
          {props.text}
        </abbr>
      </Html>
    )
  }