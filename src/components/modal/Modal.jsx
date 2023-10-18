import React, { useRef, useState } from 'react'
import "./modal.css"
import { useConfigurator } from '../../context/Context'
import emailjs from '@emailjs/browser';


export default function Modal() {

  const form = useRef()

  function sendEmail(e){
    e.preventDefault()
 
    emailjs.sendForm("service_lvjifwh", "template_kdcdb1e", form.current, "76EmLHF7jqlJMKQqj")
      .then((result) => {
        setTimeout(() => {
          setModalOpen(false)
        }, 1000)
      }, (error) => {
        console.log(error.text);
      });
      //Resets form after submit
      e.target.reset()
  }
  
  const { modalOpen, setModalOpen } = useConfigurator()
  if (!modalOpen) return null;

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
          <input className="submit" type="submit" value="SEND MAIL" />        
        </form>
        <div>
          <a href="https://github.com/5thAttemptCode" target='_blank'>GitHub</a>
          <a href="https://www.linkedin.com/in/henrik-fuerst-10b58a187/" target='_blank'>LinkedIn</a>
          <p>henrycodes@outlook.com</p>
        </div>
      </div>
    </div>
  )
}



