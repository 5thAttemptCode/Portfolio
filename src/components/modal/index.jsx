import React, { useRef, useState } from 'react'
import './style.css'
import emailjs from '@emailjs/browser'
import useClickOutside from '../../customHooks/useClickOutside'
import { ContactData } from '@/components/data/contactData'
import { useModal } from '@/context/modalContext'
import { X } from 'phosphor-react'


export default function Modal() {

  // Modal
  const { modalOpen, closeModal } = useModal()

   // Refs for modal and container
  const modalRef = useRef()
  const overlayRef = useRef()
 
   // Use the custom hook to handle outside clicks
  useClickOutside({
    containerRef: overlayRef, 
    childRef: modalRef, 
    isActive: modalOpen, 
    toggle: closeModal
  })

  // Email JS
  const form = useRef()
  const [ submitText, setSubmitText ] = useState("Submit")

  function sendEmail(e){
    e.preventDefault()

    setSubmitText("Sending...")

    emailjs.sendForm("service_lvjifwh", "template_kdcdb1e", form.current, "76EmLHF7jqlJMKQqj")
      .then((result) => {
        setSubmitText("Success!")
        setTimeout(() => {
          e.target.reset() //Resets form after submit
          closeModal()
          setSubmitText('Submit')
        }, 1200)

      }, (error) => {
        console.log(error.text);
        setSubmitText("Error..")
      });
  }

  if(!modalOpen) return null

  // Social contact 
  const socialContact = ContactData.slice(0, 2)

  return (
    <div className='overlay' ref={overlayRef}>
      <div className="modal" ref={modalRef}>

        <div className="top-bar">
          <div className="close-bar">
            <X size={20} className="close" onClick={closeModal} />
          </div>
        </div>

        <div className="form-wrapper">
          <h2>Drop me a Message</h2>
          <form ref={form} onSubmit={sendEmail}>
            <input className='form-input' type="email" placeholder='My email adress is... ' required />
            <textarea className='form-input' placeholder='I wanted to talk to you about...' required />
            <button className={submitText === "Sending..." ? "sending" : ""}>
              {submitText}
            </button>
          </form>
          <div className='contact-links'>
          {socialContact.map((item) => (
            <a 
              key={item.id} 
              href={item.contactURL} 
              target="_blank"
            >
              [ {item.contactName} ]
            </a>
          ))}
          </div>
        </div>

      </div>
    </div>
  )
}