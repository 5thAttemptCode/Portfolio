import React from 'react'
import './style.css'
import { useConfigurator } from '@/context'
import { Envelope } from 'phosphor-react'
import Contact from './components/contact'


export default function ContactButton() {

  const { setModalOpen } = useConfigurator()

  return (
    <>
      <Contact 
        position={[1.2, -0.95, -0.7]} 
        rotation={2.1}
        text={
          <div className='mail' onClick={() => setModalOpen(true)}>
            <Envelope size={35} color="#ffffff" />
          </div>
        }
      />
      <Contact
        position={[0.87, -0.95, -1.09]} 
        rotation={2.45}
        text={
          <a href="https://github.com/5thAttemptCode" target='_blank'>
            <img src="/Logos/github-black.png" alt="" />
          </a>
        }
      />
      <Contact
        position={[0.45, -0.95, -1.357]}
        rotation={2.68}
        text={
          <a href="https://www.linkedin.com/in/henry-fuerst-10b58a187/" target='_blank'>
            <img src="/Logos/linkedin.png" alt="" />
          </a>
        }
      />
    </>
  )
}
