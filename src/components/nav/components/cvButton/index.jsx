import React from 'react'
import './style.css'
import { ContactData } from '@/components/data/contactData'
import { FileArrowDown } from 'phosphor-react'


export default function CvButton() {

  const cvData = ContactData.find(cvData => cvData.id === 3)

  return (
    <abbr title={cvData.contactName}>
      <a 
        className='cv-button nav-button' 
        href={cvData.contactURL} 
        target='_blank' 
      >
        Résumé <FileArrowDown size={17} color="#fff" weight="bold" />
      </a>
    </abbr>
  )
}