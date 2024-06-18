import React, { useRef, useState } from 'react'
import './style.css'
import emailjs from '@emailjs/browser'
import { useModal } from '@/context/modalContext'
import { X } from 'phosphor-react'


export default function Modal() {

  //Modal
  const { modalOpen, setModalOpen } = useModal()

  //Email JS
  const form = useRef()
  const [ submitText, setSubmitText ] = useState("Submit")
  const [ background, setBackground ] = useState("#151515")

  function sendEmail(e){
    e.preventDefault()

    emailjs.sendForm("service_lvjifwh", "template_kdcdb1e", form.current, "76EmLHF7jqlJMKQqj")
      .then((result) => {
        setSubmitText("Thank you!")
        setBackground("#538c50")
        setTimeout(() => {
          setModalOpen(false)
          setSubmitText('Send')
          setBackground('#151515')
        }, 1200)

      }, (error) => {
        console.log(error.text);
        setSubmitText("Error")
        setBackground("#f2003c")
      });
      //Resets form after submit
      e.target.reset()
  }

  if(!modalOpen) return null

  return (
    <div className='overlay'>
      <div className="modal">
        <X size={20} className="close" onClick={() => setModalOpen(false)} />
        <form ref={form} onSubmit={sendEmail}>
          <input className='form-input' type="email" placeholder='your Email' required />
          <textarea className='form-input' placeholder='your Message' required />
          <button className="submit" style={{background}} >
            {submitText}
          </button>
        </form>
        <div className='contact-links'>
          <a href="https://github.com/5thAttemptCode" target='_blank'>GitHub</a>
          <a href="https://www.linkedin.com/in/henry-fuerst-10b58a187/" target='_blank'>LinkedIn</a>
        </div>
      </div>
    </div>
  )
}