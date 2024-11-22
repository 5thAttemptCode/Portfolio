import React, { useRef, useState }  from 'react'
import './style.css'
import emailjs from '@emailjs/browser'
import { useModal } from '@/context/modalContext'


export default function EmailForm() {

  // Modal context
  const { closeModal } = useModal()

  // Button-value states
  const BUTTON_VALUE = {
    DEFAULT: "Submit",
    SENDING: "Sending...",
    SUCCESS: "Sent successfully!",
    ERROR: "Error.. try again"
  }

  // Email JS
  const form = useRef()
  const [ submitText, setSubmitText ] = useState(BUTTON_VALUE.DEFAULT)
  
  function sendEmail(e){
    e.preventDefault()

    setSubmitText(BUTTON_VALUE.SENDING)

    emailjs.sendForm("service_lvjifwh", "template_kdcdb1e", form.current, "76EmLHF7jqlJMKQqj")
    .then((result) => {
      setSubmitText(BUTTON_VALUE.SUCCESS)
      setTimeout(() => {
      e.target.reset() //Resets form after submit
      closeModal()
      setSubmitText(BUTTON_VALUE.DEFAULT)
      }, 1200)
    }, (error) => {
      console.log(error.text);
      setSubmitText(BUTTON_VALUE.ERROR)
    })
  }

  return (
    <form ref={form} onSubmit={sendEmail}>
      <input 
        className='form-input' 
        name="email" 
        placeholder='My email adress is... ' 
        type="email" 
        required 
      />
      <textarea 
        className='form-input' 
        name="message" 
        placeholder='I wanted to talk to you about...' 
        required 
      />
      <button 
        className={submitText === BUTTON_VALUE.SENDING 
        ? "sending flex-center pulse-animation" 
        : "flex-center"}
      >
        {submitText}
      </button>
    </form>
  )
}
