import React, { useState } from 'react'
import { Html } from '@react-three/drei'
import { HtmlTooltipText } from '@/components/canvasComponents/annotations/components/htmlTooltip'
import { useModal } from '@/context/modalContext'
import { useMenu } from '@/context/menuContext'


export default function Contact(props) {

    const [ hidden, setHidden ] = useState()
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
        <div className="contact-wrapper">
          <HtmlTooltipText position="top" title={props.title}>
            <div className="contact-container flex-center">
              {props.text}
            </div>
          </HtmlTooltipText>
        </div>
      </Html>
    )
  }