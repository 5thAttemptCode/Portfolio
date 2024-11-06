import React from 'react'
import './style.css'
import Contact from './components/contact'
import { ContactData } from '@/components/data/contactData'
import { Envelope } from 'phosphor-react'
import { useModal } from '@/context/modalContext'


export default function ContactButton() {

  const { setModalOpen } = useModal()
  const socialContact = ContactData.slice(0, 2)

  return (
    <>
      <Contact 
        position={[1.35, -0.9, -0.15]} 
        rotation={1.7}
        title="Send email"
        text={
          <button className='mail' onClick={() => setModalOpen(true)}>
            <Envelope size={35} color="#ffffff" />
          </button>
        }
      />
      {socialContact.map((item) => (
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
