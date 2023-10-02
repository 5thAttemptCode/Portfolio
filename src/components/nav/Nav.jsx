import React from 'react'
import "./nav.css"


export default function Nav() {
  
  return (
    <>
        <div className="logo">
            <div className="triangle">
              <div className="triangle-inner"></div>
            </div>
            <div className="name">
              <p>H3NRY</p>
            </div>
        </div>
        {/* <div className="menu">
          <li>PROJECTS</li>
          <li>ABOUT</li>
          <li>CONTACT</li>
        </div> */}
        <div className="info">
          <a href="#">Mail</a>
          <a href="https://github.com/5thAttemptCode" target='_blank'>GitHub</a>
          <a href="https://www.linkedin.com/in/henrik-fuerst-10b58a187/" target='_blank'>LinkedIn</a>
          <a href="https://codepen.io/your-work/" target='_blank'>Codepen</a>
        </div>
    </>
  )
}
