import React from 'react'
import './style.css'
import { FileArrowDown } from 'phosphor-react'


export default function CvButton() {
  return (
    <abbr title="Download CV">
      <a className='cv-button' href="/CV/Henry_Fuerst_CV.pdf" target='_blank' >
        CV <FileArrowDown size={17} color="#fff" weight="bold" />
      </a>
    </abbr>
  )
}