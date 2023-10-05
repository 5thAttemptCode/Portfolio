import React from 'react'
import "./annotation.css"
import { Html } from '@react-three/drei'


export default function Annotation() {
  return (
    <>
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
    </>
  )
}
