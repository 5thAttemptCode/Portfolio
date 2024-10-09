import React from 'react'
import { Tooltip, tooltipClasses } from '@mui/material'
import { styled } from '@mui/material/styles'


const HtmlTooltipText = styled(({ className, ...props }) => 
  <Tooltip {...props} classes={{ popper: className }} />)(({ theme }) => ({
  [`& .${tooltipClasses.tooltip}`]: {
    backgroundColor: 'rgb(0, 0, 0, 0.8)',
    color: '#2e70ff',
    backdropFilter: 'blur(10px)',
    maxWidth: 210,
    fontSize: theme.typography.pxToRem(16),
    padding: '1rem',
    display: "grid",
    gap: "0.7rem"
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