import React, { useRef, useState } from 'react'
import './style.css'
import emailjs from '@emailjs/browser'
import { useConfigurator } from '@/context'


export default function Modal() {

  //Modal
  const { modalOpen, setModalOpen } = useConfigurator()

  //Email JS
  const form = useRef()
  const [ submitText, setSubmitText ] = useState("SEND MAIL")
  const [ background, setBackground ] = useState("#000")

  function sendEmail(e){
    e.preventDefault()
 
    emailjs.sendForm("service_lvjifwh", "template_kdcdb1e", form.current, "76EmLHF7jqlJMKQqj")
      .then((result) => {
        setSubmitText("Thank you!")
        setBackground("#538c50")
        setTimeout(() => {
          setModalOpen(false)
          setSubmitText('SEND MAIL')
          setBackground('#000')
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
      <div className="close" onClick={() => setModalOpen(false)}></div>
      <div className="modal">
        <h1>Get in touch</h1>
        <form ref={form} onSubmit={sendEmail}>
          <input className='form-input' type="text" placeholder='your Name' required />
          <input className='form-input' type="email" placeholder='your Email' required />
          <textarea className='form-input' placeholder='your Message' required />
          <button className="submit" type="submit" style={{background}}>
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



