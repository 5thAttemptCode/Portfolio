import React from 'react'
import './style.css'
import { ContactData } from '@/components/data/contactData'
import { FileArrowDown } from 'phosphor-react'
import { HtmlTooltipText } from '@/components/canvasComponents/annotations/components/htmlTooltip'


export default function CvButton() {

  const cvData = ContactData.find(cvData => cvData.id === 3)

  return (
    <HtmlTooltipText 
      position="bottom" 
      title={cvData.contactName} 
      backgroundColor="rgb(61, 61, 61, 0.7)"
    >
      <a 
        className='cv-button nav-button' 
        href={cvData.contactURL} 
        target='_blank' 
      >
        Résumé <FileArrowDown size={17} color="#fff" weight="bold" />
      </a>
    </HtmlTooltipText>
  )
}