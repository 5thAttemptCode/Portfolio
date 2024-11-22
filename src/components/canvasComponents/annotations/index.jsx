import React from 'react'
import './style.css'
import AnnotationBlock from './components/annotationBlock'
import { Html } from '@react-three/drei'
import { ProjectData } from '@/components/data/projectData'
import { useMenu } from '@/context/menuContext'
import { useModal } from '@/context/modalContext'


export default function Annotation() {
  
  const { modalOpen } = useModal()
  const { menuOpen } = useMenu()

  const distanceFactor = 3
  const displayStyle = { display: (modalOpen || menuOpen) ? "none" : "block" }

  return (
    <>
      <Html 
        position={[ -0.65, 1.01, -1.15 ]} 
        rotation-y={3.65} 
        transform 
        occlude
        distanceFactor={distanceFactor}
        style={displayStyle}
        >
        <div className="annotation-wrapper flex-col">
          {ProjectData.map((item) => (
            <AnnotationBlock 
              key={item.id}
              href={item.projectURL}
              header={item.projectType}
              description={item.projectTechStack}
              liveLink={true}
            />
          ))}
        </div>
      </Html>
      
      <Html 
        position={[ -1.13, 1.01, -0.7 ]} 
        rotation-y={-2.15} 
        transform
        occlude
        distanceFactor={distanceFactor}
        style={displayStyle}
        >
        <div className="annotation-wrapper flex-col">
          {ProjectData.map((item) => (
            <AnnotationBlock 
              key={item.id}
              href={item.projectCode}
              liveLink={false}
            />
          ))}
        </div>
      </Html>
    </>
  )
}