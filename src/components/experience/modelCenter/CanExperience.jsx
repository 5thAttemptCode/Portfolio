import React from 'react'
import { CanLabel } from '../model/CanLabel'
import { Center, Grid, Stage } from '@react-three/drei'


export default function CanExperience() {

  return (
    <>
      <Grid renderOrder={-1} position={[0, -2.4, 0]} infiniteGrid cellSize={1.5} cellThickness={0.6} sectionSize={3} sectionThickness={1.6} sectionColor="grey" fadeDistance={30} />
      <Center>
        <Stage preset="rembrandt" intensity={10} environment="city" adjustCamera={false}>
            <CanLabel receiveShadow castShadow rotation-y={3.12} />
        </Stage>
      </Center>
    </>
  )
}
