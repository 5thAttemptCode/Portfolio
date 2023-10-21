import React, { useRef,  useState  } from 'react'
import { useFrame } from "@react-three/fiber"
import { Cloud } from "@react-three/drei"
import * as random from "maath/random"
import * as THREE from "three"


export default function Clouding() {

  return (
    <>
      <group position={[30, 12, -40]}>
        <LightningCloud />
        <LightningCloud />
        <LightningCloud />
        <LightningCloud />
      </group>
      <group position={[-20, 15, -50]}>
        <LightningCloud />
        <LightningCloud />
        <LightningCloud />
        <LightningCloud />
      </group>
      <group position={[0, 17, 50]}>
        <LightningCloud />
        <LightningCloud />
        <LightningCloud />
        <LightningCloud />
      </group>
      <group position={[-40, 15, 50]}>
        <LightningCloud />
        <LightningCloud />
        <LightningCloud />
        <LightningCloud />
      </group>
    </>
  )
}


function LightningCloud() {

  const light = useRef()
  const [flash] = useState(() => new random.FlashGen({ count: 10, minDuration: 40, maxDuration: 200 })) //min 40ms duration of the flash, 200ms max duration of the flash
  useFrame((state, delta) => {
    const impulse = flash.update(state.clock.elapsedTime, delta)
    light.current.intensity = impulse * 2000
  })
  return( 
    <>
      <pointLight 
        position={[0, 0, 0.7]} 
        ref={light} 
        color="cyan" />
      <Cloud
        color="#000C66"
        segments={3}
        fade={30}
        speed={0.1}
        growth={2}
        volume={1}
        opacity={1}
        bounds={[10, 1, 10]}
      />
       <Cloud
       color="#000C66"
        segments={3}
        fade={30}
        speed={0.1}
        growth={2}
        volume={1}
        opacity={1}
        bounds={[10, 1, 10]}
      />
      <Cloud
      color="#000C66"
        segments={3}
        fade={30}
        speed={0.1}
        growth={2}
        volume={1}
        opacity={1}
        bounds={[10, 1, 10]}
      />
       <Cloud
       color="#333"
        segments={3}
        fade={30}
        speed={0.1}
        growth={2}
        volume={1}
        opacity={1}
        bounds={[10, 1, 10]}
      />
      
      {/* <Cloud material={THREE.MeshLambertMaterial}  segments={10} position-y={10} fade={30} speed={0.1} growth={2} volume={1} opacity={1} bounds={[20, 0.5, 20]} />
      <Cloud material={THREE.MeshLambertMaterial}  segments={10} position-y={10} fade={30} speed={0.1} growth={2} volume={1} opacity={1} bounds={[20, 0.5, 20]} /> */}
    </>
  )
}
