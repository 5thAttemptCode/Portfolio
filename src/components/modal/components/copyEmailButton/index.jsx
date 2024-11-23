import React from 'react'
import { HtmlTooltipText } from '@/components/canvasComponents/annotations/components/htmlTooltip'
import { useCopyEmail } from '@/customHooks/useCopyEmail'


export default function CopyEmail() {
  
  const { buttonText, copyEmail } = useCopyEmail()

  return (
    <HtmlTooltipText placement="top-start" title='Copy my e-mail adress'>
      <button onClick={copyEmail} className='copy-email'>
        [ {buttonText} ]
      </button>
    </HtmlTooltipText>
  )
}