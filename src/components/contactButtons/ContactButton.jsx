import React, { useState } from 'react'
import "./contactButton.css"
import { Html } from '@react-three/drei'
import { useConfigurator } from '../../context/Context'


function Contact(props){
  
  const [ hidden, set ] = useState()
  const { modalOpen } = useConfigurator()

  return(
    <Html
      position={props.position}
      rotation-y={props.rotation}
      occlude
      transform 
      distanceFactor={3}
      onOcclude={set}
      style={{
        opacity: hidden ? 0 : 1,
        transform: `scale(${hidden ? 0 : 1})`,
        display: modalOpen ? "none" : "block",
        pointerEvents: modalOpen ? "none" : "auto",
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
                <img src="../../public/Logos/github-black.png" alt="" />
              </a>
             }
      />
      <Contact
        position={[0.45, -0.95, -1.357]}
        rotation={2.68}
        text={
              <a href="https://www.linkedin.com/in/henrik-fuerst-10b58a187/" target='_blank'>
                <img src="../../public/Logos/linkedin.png" alt="" />
              </a>
             }
      />
    </>
  )
}
