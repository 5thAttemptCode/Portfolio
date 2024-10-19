import React, { useRef, useState }  from 'react'
import './style.css'
import emailjs from '@emailjs/browser'
import { useModal } from '@/context/modalContext'


export default function EmailForm() {

  // Modal context
  const { closeModal } = useModal()

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
    })
  }

  return (
    <form ref={form} onSubmit={sendEmail}>
      <input className='form-input' type="email" placeholder='My email adress is... ' required />
      <textarea className='form-input' placeholder='I wanted to talk to you about...' required />
      <button className={submitText === "Sending..." ? "sending" : ""}>
        {submitText}
      </button>
    </form>
  )
}
