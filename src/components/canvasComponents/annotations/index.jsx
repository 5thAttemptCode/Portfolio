import React, { useState } from 'react'
import './style.css'
import AnnotationBlock from './components/annotationBlock'
import { Html } from '@react-three/drei'
import { ProjectData } from '@/components/data/projectData'
import { useMenu } from '@/context/menuContext'
import { useModal } from '@/context/modalContext'


export default function Annotation() {
  
  const [ hidden, set ] = useState()
  const { menuOpen } = useMenu()
  const { modalOpen } = useModal()

  return (
    <>
      <Html 
        position={[-0.75, 0.96, -1.12]} 
        rotation-y={3.7} 
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
        <div className="annotation-wrapper">
          {ProjectData.map((item) => (
            <AnnotationBlock 
              key={item.id}
              hrefLive={item.projectURL}
              hrefCode={item.projectCode}
              header={item.projectType}
              description={item.projectTechStack}
            />
          ))}
        </div>
      </Html>
    </>
  )
}