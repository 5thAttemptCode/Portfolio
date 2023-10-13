import React from 'react'
import "./nav.css"
import { useConfigurator } from '../../context/Context'


export default function Nav() {

  const { cameraPosition, setCameraPosition } = useConfigurator()
  
  return (
    <>
        <div className="logo">
            <div className="triangle">
              <div className="triangle-inner"></div>
            </div>
            <div className="name" onClick={() => setCameraPosition([0, 0.1, 9])}>
              <p>H3NRY</p>
            </div>
        </div>
        <div className="menu">
          <li onClick={() => setCameraPosition([-6.88, 0.67, -5.77])}>PROJECTS</li>
          <li onClick={() => setCameraPosition([7.81, 0.67, -4.43])}>ABOUT</li>
          <li onClick={() => setCameraPosition([7.78, -0.74, -4.46])}>CONTACT</li>
        </div>
        <div className="info">
          <a href="#">Mail</a>
          <a href="https://github.com/5thAttemptCode" target='_blank'>GitHub</a>
          <a href="https://www.linkedin.com/in/henrik-fuerst-10b58a187/" target='_blank'>LinkedIn</a>
          <a href="https://codepen.io/your-work/" target='_blank'>Codepen</a>
        </div>
       
    </>
  )
}
