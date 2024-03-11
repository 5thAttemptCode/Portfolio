import React from 'react'
import LightningCloud from './components'


export default function Clouding() {

  return (
    <>
      <group position={[10, 10, -60]}>
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
  
