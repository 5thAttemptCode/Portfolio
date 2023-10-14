import React from 'react'
import "./modal.css"
import { useConfigurator } from '../../context/Context'

export default function Modal() {

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
        <form>
            <input type="text" placeholder='your Name'/>
            <input type="email" placeholder='your Email' />
            <textarea placeholder='your Message' />
            <input type="submit" value="SEND MAIL" />
        </form>
        <div>
          <p>henrycodes@outlook.com</p>
          <a href="#">LinkedIn</a>
          <a href="#">GitHub</a>
        </div>
      </div>
    </div>
  )
}
