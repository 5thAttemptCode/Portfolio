import React from 'react'
import './style.css'
import CopyEmail from './components/copyEmailButton'
import EmailForm from './components/emailForm'
import { ContactData } from '@/components/data/contactData'
import { useModal } from '@/context/modalContext'
import { X } from 'phosphor-react'


export default function Modal() {

  // Modal
  const { modalOpen, closeModal, overlayRef, modalRef } = useModal()

  // Social contact 
  const socialContact = ContactData.slice(0, 2)

  // ensures Modal is rendered only if set to true
  if(!modalOpen) return null

  return (
    <div className="overlay flex-col-center" ref={overlayRef}>
      <div className="modal" ref={modalRef}>
        <div className="top-bar flex-end">
          <div className="close-bar flex-end">
            <X size={20} className="close" onClick={closeModal} />
          </div>
        </div>
        <div className="form-wrapper">
          <h2>Drop me a Message</h2>
          <EmailForm />
          <div className="contact-links flex-col">
            {socialContact.map((item) => (
              <a 
                target="_blank"
                href={item.contactURL} 
                key={item.id} 
                onClick={closeModal}
              >
                [ {item.contactName} ]
              </a>
            ))}
            <CopyEmail />
          </div>
        </div>
      </div>
    </div>
  )
}