import React from 'react'
import { styled } from '@mui/material/styles'
import { Tooltip, tooltipClasses } from '@mui/material'


const HtmlTooltipText = styled(({ className, ...props }) => 

  <Tooltip {...props} classes={{ popper: className }} />)(({ theme }) => ({
    [`& .${tooltipClasses.tooltip}`]: {
      backdropFilter: 'blur(10px)',
      backgroundColor: 'rgb(7, 7, 7, 0.7)',
      color: '#ffffff',
      display: "grid",
      gap: "0.7rem",
      lineHeight: "1.4",
      maxWidth: 214,
      padding: '0.75rem 1rem',
      fontSize: theme.typography.pxToRem(14)
    }
  })
)

export { HtmlTooltipText }