import React, { useState } from 'react'
import "./contactButton.css"
import { Html } from '@react-three/drei'

export default function ContactButton() {
  const [hidden, set] = useState()

  return (
    <>
      <Html
        position={[1.2, -0.95, -0.7]} 
        rotation-y={2.1}
        occlude
        transform 
        distanceFactor={3}
        onOcclude={set}
        style={{
          transition: 'all 0.5s',
          opacity: hidden ? 0 : 1,
          transform: `scale(${hidden ? 0.5 : 1})`
          }}
      >
        <div className="contact-wrapper mail">
          ✉️
        </div>
      </Html>

      <Html
        position={[0.87, -0.95, -1.09]} 
        rotation-y={2.45}
        occlude
        transform 
        distanceFactor={3}
        onOcclude={set}
        style={{
          transition: 'all 0.5s',
          opacity: hidden ? 0 : 1,
          transform: `scale(${hidden ? 0.5 : 1})`
          }}
      >
        <div className="contact-wrapper">
          <a href="#">
            <img src="../../public/github-black.png" alt="" />
          </a>
        </div>
      </Html>

      <Html
        position={[0.45, -0.95, -1.357]} 
        rotation-y={2.68}
        occlude
        transform 
        distanceFactor={3}
        onOcclude={set}
        style={{
          transition: 'all 0.5s',
          opacity: hidden ? 0 : 1,
          transform: `scale(${hidden ? 0.5 : 1})`
          }}
      >
        <div className="contact-wrapper">
          <a href="#">
            <img src="../../public/linkedin.png" alt="" />
          </a>
        </div>
      </Html>
    </>
  )
}
