import React, { useState } from 'react'
import "./annotation.css"
import { Html } from '@react-three/drei'


export default function Annotation() {
  const [hidden, set] = useState()

  return (
    <>
      <group position={[-0.8, 0.96, -1.15]}  rotation-y={3.7} >
        <Html 
          distanceFactor={3}
          transform 
          occlude   
          castShadow
          onOcclude={set}
          style={{
            transition: 'all 0.5s',
            opacity: hidden ? 0 : 1,
            transform: `scale(${hidden ? 0.5 : 1})`
            }}
          >
          <div className="annotation-wrapper">
            <div className="annotation zleep">
              <a className='live' href='https://codesandbox.io/s/qyz5r?file=/src/App.js:1140-1170' target='_blank'>LIVE</a>
              <a className='code' href='https://codesandbox.io/s/qyz5r?file=/src/App.js:1140-1170' target='_blank'>&lt;/&gt;</a>
            </div>
            <div className="annotation sneaker-headz">
              <a className='live' href='https://codesandbox.io/s/qyz5r?file=/src/App.js:1140-1170' target='_blank'>LIVE</a>
              <a className='code' href='https://codesandbox.io/s/qyz5r?file=/src/App.js:1140-1170' target='_blank'>&lt;/&gt;</a>
            </div>
            <div className="annotation dough-boyz">
              <a className='live' href='https://codesandbox.io/s/qyz5r?file=/src/App.js:1140-1170' target='_blank'>LIVE</a>
              <a className='code' href='https://codesandbox.io/s/qyz5r?file=/src/App.js:1140-1170' target='_blank'>&lt;/&gt;</a>
            </div>
            <div className="annotation coffe-inc">
              <a className='live' href='https://codesandbox.io/s/qyz5r?file=/src/App.js:1140-1170' target='_blank'>LIVE</a>
              <a className='code' href='https://codesandbox.io/s/qyz5r?file=/src/App.js:1140-1170' target='_blank'>&lt;/&gt;</a>
            </div>
          </div>
        </Html>
      </group>
    </>
  )
}
