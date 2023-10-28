import React from 'react'
import './nav.css'

import { useConfigurator } from '../../context/Context'


export default function Nav() {

  const { setModalOpen } = useConfigurator()
  const { setCameraPosition } = useConfigurator()
  
  return (
    <>
      <div className="logo nav-item">
        <div className="nav-triangle triangle">
          <div className="nav-triangle-inner triangle-inner"></div>
        </div>
        <div className="name" >
          <p onClick={() => setCameraPosition([-0.04, 1.28, 8.82])}>H3NRY</p>
        </div>
      </div>

      <div className="menu nav-item">
        <p onClick={() => setCameraPosition([-6.61, 2.11, -5.73])}>PROJECTS</p>
        <p onClick={() => setCameraPosition([7.06, 1.57, -5.31])}>ABOUT</p>
        <p onClick={() => setCameraPosition([6.89, 0.67, -5.75])}>CONTACT</p>
      </div>

      <div className="info nav-item">
        <p onClick={() => setModalOpen(true)}>E-mail</p>
        <a href="https://github.com/5thAttemptCode" target='_blank'>GitHub</a>
        <a href="https://www.linkedin.com/in/henrik-fuerst-10b58a187/" target='_blank'>LinkedIn</a>
        <a href="https://codepen.io/your-work/" target='_blank'>Codepen</a>
      </div>
    </>
  )
}
