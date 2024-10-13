import React, { useState } from 'react'
import './style.css'
import AnnotationBlock from './components/annotationBlock'
import { Html } from '@react-three/drei'
import { ProjectData } from '@/components/data/projectData'
import { useModal } from '@/context/modalContext'
import { useMenu } from '@/context/menuContext'


export default function Annotation() {
  
  const [ hidden, set ] = useState()
  const { modalOpen } = useModal()
  const { menuOpen } = useMenu()

  return (
    <>
      <Html 
        position={[-0.75, 0.96, -1.12]} 
        rotation-y={3.7} 
        distanceFactor={3}
        transform 
        occlude
        style={{
          display: (hidden || modalOpen || menuOpen) ? "none" : "block",
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