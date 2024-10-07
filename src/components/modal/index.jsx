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

  function sendEmail(e){
    e.preventDefault()

    setSubmitText("Sending...")

    emailjs.sendForm("service_lvjifwh", "template_kdcdb1e", form.current, "76EmLHF7jqlJMKQqj")
      .then((result) => {
        setSubmitText("Success!")
        setTimeout(() => {
          setModalOpen(false)
          setSubmitText('Submit')
        }, 1200)

      }, (error) => {
        console.log(error.text);
        setSubmitText("Error..")
      });
      //Resets form after submit
      e.target.reset()
  }

  if(!modalOpen) return null

  return (
    <div className='overlay'>

      <div className="modal">
        <div className="top-bar">
          <abbr title="Close modal">
            <X size={20} className="close" onClick={() => setModalOpen(false)} />
          </abbr>
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
            <a href="https://github.com/5thAttemptCode" target='_blank'>[ GitHub ]</a>
            <a href="https://www.linkedin.com/in/henry-fuerst-10b58a187/" target='_blank'>[ LinkedIn ]</a>
          </div>
        </div>
      </div>
    </div>
  )
}