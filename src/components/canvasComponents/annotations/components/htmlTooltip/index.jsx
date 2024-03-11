import React from 'react'
import { Tooltip, tooltipClasses } from '@mui/material'
import { styled } from '@mui/material/styles'


const HtmlTooltipText = styled(({ className, ...props }) => 
  <Tooltip {...props} classes={{ popper: className }} />)(({ theme }) => ({
  [`& .${tooltipClasses.tooltip}`]: {
    backgroundColor: 'rgb(0, 0, 0, 0.8)',
    color: '#2e70ff',
    backdropFilter: 'blur(10px)',
    maxWidth: 200,
    fontSize: theme.typography.pxToRem(16),
    padding: '0.5em',
    border: '2px solid white',
    display: "grid",
    gap: "1rem"
  }
}))


const HtmlTooltipView = ({ children }) => {
  const view = "View source code"

  return (
    <HtmlTooltipText placement="top-start" title={view}>
      {children}
    </HtmlTooltipText>
  )
}

export { HtmlTooltipText, HtmlTooltipView }