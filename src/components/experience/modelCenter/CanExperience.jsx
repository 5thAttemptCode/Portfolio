import React, { useState } from 'react'
import { CanLabel } from '../../can/CanLabel'
import { Can } from '../../can/Can'
import { Center, Grid, ContactShadows, PerspectiveCamera, Html } from '@react-three/drei'
import Lights from '../../lights/Lights'
import Triangles from '../../triangles/Triangles'


export default function CanExperience() {

  const [cameraPosition, setCameraPosition] = useState([0, 0.1, 9])
  
  return (
    <>
      <PerspectiveCamera position={cameraPosition} fov={35} makeDefault />
      <Grid 
        renderOrder={-1} 
        position={[0, -2.4, 0]} 
        infiniteGrid cellSize={1.5} 
        cellThickness={0.6} 
        sectionSize={3} 
        sectionThickness={1.6} 
        sectionColor="grey"
        fadeDistance={20} 
      />
      <ContactShadows 
        resolution={1024} 
        position={[0, -2.41, 0]} 
        scale={15} blur={0.5} 
        opacity={1}
      />

      <hemisphereLight intensity={1.3} />
      <Lights />

      <Html rotation-y={4.4} position={[-1.25, 0.58, -0.5]} transform occlude>
        <div className="annotation">
          <a className='live' href='https://codesandbox.io/s/qyz5r?file=/src/App.js:1140-1170' target='_blank'>LIVE</a>
          <a className='code' href='https://codesandbox.io/s/qyz5r?file=/src/App.js:1140-1170' target='_blank'>CODE</a>
        </div>
      </Html>

      <Html rotation-y={4.4} position={[-1.25, -0.25, -0.5]} transform occlude>
        <div className="annotation">
          <a className='live' href='https://codesandbox.io/s/qyz5r?file=/src/App.js:1140-1170' target='_blank'>LIVE</a>
          <a className='code' href='https://codesandbox.io/s/qyz5r?file=/src/App.js:1140-1170' target='_blank'>CODE</a>
        </div>
      </Html>

      <Html rotation-y={3.6} position={[-0.55, 0.58, -1.24]} transform occlude>
        <div className="annotation">
          <a className='live' href='https://codesandbox.io/s/qyz5r?file=/src/App.js:1140-1170' target='_blank'>LIVE</a>
          <a className='code' href='https://codesandbox.io/s/qyz5r?file=/src/App.js:1140-1170' target='_blank'>CODE</a>
        </div>
      </Html>

      <Html rotation-y={3.6} position={[-0.55, -0.25, -1.24]}  transform occlude>
        <div className="annotation">
          <a className='live' href='https://codesandbox.io/s/qyz5r?file=/src/App.js:1140-1170' target='_blank'>LIVE</a>
          <a className='code' href='https://codesandbox.io/s/qyz5r?file=/src/App.js:1140-1170' target='_blank'>CODE</a>
        </div>
      </Html>


      <Center>
        <CanLabel 
          castShadow 
          rotation-y={3.12} 
          onPointerEnter={ () => {document.body.style.cursor = "grab"}}
          onPointerLeave={ () => {document.body.style.cursor = "default"}}
        />
        {/* <Can /> */}
        
      </Center>

      {/* <Html position={[5, 2, 0]}>
        <div className="menu">
          <li onClick={() => setCameraPosition([-6.88, 0.67, -5.77])}>PROJECTS</li>
          <li onClick={() => setCameraPosition([7.81, 0.67, -4.43])}>ABOUT</li>
          <li onClick={() => setCameraPosition([7.78, -0.74, -4.46])}>CONTACT</li>
        </div>
      </Html> */}

      {/* <Triangles /> */}
    </>
  )
}
