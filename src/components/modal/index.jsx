import React, { useRef, useState } from 'react'
import './style.css'

import emailjs from '@emailjs/browser'

import { useConfigurator } from '../../context'


export default function Modal() {

  //Modal
  const { modalOpen, setModalOpen } = useConfigurator()
  if (!modalOpen) return null

  //Email JS
  const form = useRef()
  const [ submitText, setSubmitText ] = useState("SEND MAIL")
  const [ background, setBackground ] = useState("linear-gradient(to right, #38bdf8, #c084fc)")

  function sendEmail(e){
    e.preventDefault()
 
    emailjs.sendForm("service_lvjifwh", "template_kdcdb1e", form.current, "76EmLHF7jqlJMKQqj")
      .then((result) => {
        setSubmitText("THANK YOU 🤙🏽")
        setBackground("#6eaa5e")
        setTimeout(() => {
          setModalOpen(false)
        }, 2000)

      }, (error) => {
        console.log(error.text);
        setSubmitText("Error 💀")
        setBackground("#f2003c")
      });
      //Resets form after submit
      e.target.reset()
  }
  

  return (
    <div className='overlay'>
      <div onClick={() => setModalOpen(false)} className="close">
        <div></div>
        <div></div>
      </div>
      <div className="modal">
        <h1>Get in touch</h1>
        <form ref={form} onSubmit={sendEmail}>
          <input className='form-input' name="name" type="text" placeholder='your Name' required />
          <input className='form-input' name="email" type="email" placeholder='your Email' required />
          <textarea className='form-input' name="message" placeholder='your Message' required />
          <input className="submit" type="submit" value={submitText} style={{background}} />        
        </form>
        <div>
          <a href="https://github.com/5thAttemptCode" target='_blank'>GitHub</a>
          <a href="https://www.linkedin.com/in/henrik-fuerst-10b58a187/" target='_blank'>LinkedIn</a>
        </div>
      </div>
    </div>
  )
}



