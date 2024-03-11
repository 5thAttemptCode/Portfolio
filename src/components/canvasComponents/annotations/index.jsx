import React, { useState } from 'react'
import './style.css'
import { Html } from '@react-three/drei'
import { useConfigurator } from '@/context'
import AnnotationBlock from './components/annotationBlock'


export default function Annotation() {
  
  const [ hidden, set ] = useState()
  const { modalOpen, menuOpen } = useConfigurator()

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
          <AnnotationBlock 
            hrefLive='https://floor-planer.netlify.app/' 
            hrefCode='https://github.com/5thAttemptCode/FloorPlaner-MERN_R3F_Docker'
            header='E-Commerce'
            description="MERN, Docker, R3F, Blender"
          />

          <AnnotationBlock 
            hrefLive='https://zleep-cbd.netlify.app/' 
            hrefCode='https://github.com/5thAttemptCode/React_R3F_Full-project_ZLEEP'
            header='Product Page'
            description="R3F, Firebase, Paypal, Blender, Inkscape"
          />
          
          <AnnotationBlock 
            hrefLive='https://sneaker-headz.netlify.app' 
            hrefCode='https://github.com/5thAttemptCode/React_Firebase_Full-project_SneakerHeadz'
            header='E-Commerce'
            description="React, Firebase, Paypal, Inkscape"
          />
          
          <AnnotationBlock 
            hrefLive='https://doughboyz.netlify.app/' 
            hrefCode='https://github.com/5thAttemptCode/Doughboyz_ThreeJS_Portfolio-project'
            header='Landing Page'
            description="Three JS, HTML/CSS"
          />
        </div>
      </Html>
    </>
  )
}