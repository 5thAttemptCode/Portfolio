import React, { useEffect } from "react"
import './style.css'
import { useProgress } from '@react-three/drei'


export const LoadingScreen = ({ onStarted }) => {

  const { progress } = useProgress()

  useEffect(() => {
   if (progress >= 100) {
     onStarted()
   }
  }, [ progress, onStarted ])

  return (
    <div className="loading-screen">
      <h3>Henry's Portfolio</h3>
      <h1>Loading..</h1>
    </div>
  )
}