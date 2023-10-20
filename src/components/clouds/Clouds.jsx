import React, { useRef,  useState  } from 'react'
import { Canvas, useFrame } from "@react-three/fiber"
import { Cloud } from "@react-three/drei"
import * as random from "maath/random"


export default function Clouds() {

  return (
    <>
      <group>
        <Cloud seed={20} scale={1} color="#444" position={[3, 12, -25]} />
        <Cloud seed={20} scale={1} color="#444" position={[-3, 12, -25]} />
        <Cloud seed={20} scale={1} color="#444" position={[10, 12, -25]} />
        <Cloud seed={20} scale={1} color="#444" position={[-10, 12, -25]} />
      </group>
      <group>
        <Cloud scale={1} color="#444" position={[3, 12, 25]} />
        <Cloud scale={1} color="#444" position={[-3, 12, 25]} />
        <Cloud scale={1} color="#444" position={[10, 12, 25]} />
        <Cloud scale={1} color="#444" position={[-10, 12, 25]} />
      </group>

      <group>
        <Cloud scale={1} color="#444" position={[6, 12, 12]} />
        <Cloud scale={1} color="#444" position={[-6, 12, 12]} />
        <Cloud scale={1} color="#444" position={[15, 12, 12]} />
        <Cloud scale={1} color="#444" position={[-15, 12, 12]} />
      </group>

      <group>
        <Cloud scale={1} color="#444" position={[6, 12, -12]} />
        <Cloud scale={1} color="#444" position={[-6, 12, -12]} />
        <Cloud scale={1} color="#444" position={[15, 12, -12]} />
        <Cloud scale={1} color="#444" position={[-15, 12, -12]} />
      </group>

      <group>
        <Cloud scale={1} color="#444" position={[3, 12, 0]} />
        <Cloud scale={1} color="#444" position={[-3, 12, 0]} />
        <Cloud scale={1} color="#444" position={[10, 12, 0]} />
        <Cloud scale={1} color="#444" position={[-10, 12, 0]} />
      </group>
      <Puffycloud />
    </>
  )
}


function Puffycloud() {

  const light = useRef()
  const [flash] = useState(() => new random.FlashGen({ count: 10, minDuration: 40, maxDuration: 200 })) //min 40ms duration of the flash, 200ms max duration of the flash
  useFrame((state, delta) => {
    const impulse = flash.update(state.clock.elapsedTime, delta)
    light.current.intensity = impulse * 5000
  })
  return <pointLight position={[0, 12, 0]} ref={light} color="blue" />
}
