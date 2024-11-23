import { useState } from 'react'


export function useCopyEmail( defaultText = "Copy my e-mail", timeout = 1500 ) {

  const [ buttonText, setButtonText ] = useState(defaultText)

  const copyEmail = () => {
    
    const email = "htlfuerst@gmail.com"

    navigator.clipboard.writeText(email).then(() => {
      setButtonText("Copied!")
      setTimeout(() => {
        setButtonText(defaultText)
      }, timeout)
    })
  }

  return { buttonText, copyEmail }
}