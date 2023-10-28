import React, { useState } from 'react'
import './annotation.css'

import { Html } from '@react-three/drei'
import { useConfigurator } from '../../context/Context'


export default function Annotation() {
  
  const [ hidden, set ] = useState()
  const { modalOpen } = useConfigurator()

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
          opacity: hidden ? 0 : 1,
          transform: `scale(${hidden ? 0 : 1})`,
          display: modalOpen ? "none" : "block",
          pointerEvents: modalOpen ? "none" : "auto",
          }}
        >
        <div className="annotation-wrapper">
          <div className="annotation zleep">
            <a className='live' href='https://codesandbox.io/s/qyz5r?file=/src/App.js:1140-1170' target='_blank'>LIVE</a>
            <a className='code' href='https://github.com/5thAttemptCode/React_R3F_Full-project_ZLEEP/tree/main/src' target='_blank'>&lt;/&gt;</a>
          </div>
          <div className="annotation sneaker-headz">
            <a className='live' href='https://sneaker-headz.netlify.app' target='_blank'>LIVE</a>
            <a className='code' href='https://github.com/5thAttemptCode/React_Firebase_Full-project_SneakerHeadz/tree/main/src' target='_blank'>&lt;/&gt;</a>
          </div>
          <div className="annotation dough-boyz">
            <a className='live' href='https://codesandbox.io/s/qyz5r?file=/src/App.js:1140-1170' target='_blank'>LIVE</a>
            <a className='code' href='https://codesandbox.io/s/qyz5r?file=/src/App.js:1140-1170' target='_blank'>&lt;/&gt;</a>
          </div>
          <div className="annotation coffe-inc">
            <a className='live' href='https://codesandbox.io/s/qyz5r?file=/src/App.js:1140-1170' target='_blank'>LIVE</a>
            <a className='code' href='https://github.com/5thAttemptCode/React_R3F_Firebase_Full-project_CoffeeInc/tree/main/src' target='_blank'>&lt;/&gt;</a>
          </div>
        </div>
      </Html>
    </>
  )
}
