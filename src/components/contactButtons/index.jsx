import React, { useState } from 'react'
import './style.css'
import { Html } from '@react-three/drei'
import { useConfigurator } from '@/context'


function Contact(props){
  
  const [ hidden, set ] = useState()
  const { modalOpen, menuOpen } = useConfigurator()

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


export default function ContactButton() {

  const { setModalOpen } = useConfigurator()

  return (
    <>
      <Contact 
        position={[1.2, -0.95, -0.7]} 
        rotation={2.1}
        text={
          <div className='mail' onClick={() => setModalOpen(true)}>
            ✉️
          </div>
        }
      />
      <Contact
        position={[0.87, -0.95, -1.09]} 
        rotation={2.45}
        text={
          <a href="https://github.com/5thAttemptCode" target='_blank'>
            <img src="/Logos/github-black.png" alt="" />
          </a>
        }
      />
      <Contact
        position={[0.45, -0.95, -1.357]}
        rotation={2.68}
        text={
          <a href="https://www.linkedin.com/in/henry-fuerst-10b58a187/" target='_blank'>
            <img src="/Logos/linkedin.png" alt="" />
          </a>
        }
      />
    </>
  )
}
