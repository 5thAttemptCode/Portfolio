import React, { useEffect } from "react"
import './loadingScreen.css'

import { useProgress } from '@react-three/drei'


export const LoadingScreen = ({ started, onStarted }) => {

   const { progress } = useProgress()

   useEffect(() => {
      if (progress >= 100) {
         onStarted();
      }
   }, [progress, onStarted])

   return (
      <div className={`loading-screen ${started ? "loading-screen--started" : ""}`}>
         <div className="bar">
            <div className="load">
               LOADING... LOADING... LOADING... LOADING...
            </div>
         </div>
      </div>
   )
}