import React, { useEffect } from "react";
import "./loadingScreen.css"
import { useProgress } from "@react-three/drei";


export const LoadingScreen = ({ started, onStarted }) => {

 const { progress } = useProgress();

 useEffect(() => {
    if (progress >= 100) {
      onStarted();
    }
 }, [progress, onStarted]);

 return (
    <div className={`loadingScreen ${started ? "loadingScreen--started" : ""}`}>

    </div>
 );
};