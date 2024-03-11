import React, { useRef,  useState  } from 'react'
import * as random from 'maath/random'
import { Cloud } from '@react-three/drei'
import { useFrame } from '@react-three/fiber'


export default function LightningCloud() {

    const light = useRef()
    const [ flash ] = useState(() => new random.FlashGen({ count: 10, minDuration: 40, maxDuration: 200 })) //min 40ms duration of the flash, 200ms max duration of the flash
    useFrame((state, delta) => {
      const impulse = flash.update(state.clock.elapsedTime, delta)
      light.current.intensity = impulse * 2000
    })
  
    return( 
      <>
        <pointLight 
          position={[0, 0, 0.7]} 
          ref={light} 
          color="blue" />
        <Cloud
          color="#001eff"
          segments={3}
          fade={30}
          speed={0.5}
          growth={2}
          volume={1}
          opacity={1}
          bounds={[10, 1, 10]}
        />
         <Cloud
          color="#333"
          segments={3}
          fade={30}
          speed={0.5}
          growth={2}
          volume={1}
          opacity={1}
          bounds={[10, 1, 10]}
        />
        <Cloud
        color="#0000ff"
          segments={3}
          fade={30}
          speed={0.1}
          growth={2}
          volume={1}
          opacity={1}
          bounds={[10, 1, 10]}
        />
         <Cloud
          color="#141414"
          segments={3}
          fade={30}
          speed={0.1}
          growth={2}
          volume={1}
          opacity={1}
          bounds={[10, 1, 10]}
        />
      </>
    )
  }