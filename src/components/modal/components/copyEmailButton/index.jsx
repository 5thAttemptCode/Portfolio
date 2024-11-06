import React, { useState } from 'react'


export default function CopyEmail() {
  
  const initialText = 'Copy my email'
  const [ buttonText, setButtonText ] = useState(initialText)
  
  const handleCopyEmail = () => {
    const email = 'htlfuerst@gmail.com'
    navigator.clipboard.writeText(email).then(() => {
      setButtonText('Copied!')
      setTimeout(() => {
        setButtonText(initialText)
      }, 1500)
    })
  }

  return (
    <abbr title='Copy my email adress'>
      <button onClick={handleCopyEmail} className='copy-email'>
        [ {buttonText} ]
      </button>
    </abbr>
  )
}
