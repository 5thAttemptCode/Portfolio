import React from 'react'
import './style.css'
import { Envelope } from 'phosphor-react'
import Contact from './components/contact'
import { ContactData } from '@/components/data/contactData'
import { useModal } from '@/context/modalContext'


export default function ContactButton() {

  const { setModalOpen } = useModal()

  return (
    <>
      <Contact 
        position={[1.2, -0.95, -0.7]} 
        rotation={2.1}
        title="Send email"
        text={
          <div className='mail' onClick={() => setModalOpen(true)}>
            <Envelope size={35} color="#ffffff" />
          </div>
        }
      />
      {ContactData.map((item) => (
        <Contact
          key={item.id}
          position={item.contactPosition}
          rotation={item.contactRotation}
          title={item.contactName}
          text={
            <a href={item.contactURL} target='_blank'>
              <img src={item.contactIMG} />
            </a>
          }
        />
      ))}
    </>
  )
}
