import React from 'react'
import Grow from '@mui/material/Grow'
import { styled } from '@mui/material/styles'
import { Tooltip, tooltipClasses } from '@mui/material'


const HtmlTooltipText = styled(({ className, backgroundColor, ...props }) => 

  <Tooltip 
    {...props} 
    classes={{ popper: className }} 
    disableInteractive 
    TransitionComponent={Grow} 
    TransitionProps={{ timeout: 250 }}
  />)(({ theme, backgroundColor="rgb(7, 7, 7, 0.7)" }) => ({
    [`& .${tooltipClasses.tooltip}`]: {
      backdropFilter: "blur(10px)",
      backgroundColor: backgroundColor,
      color: "#ffffff",
      display: "grid",
      gap: "0.35rem",
      lineHeight: "1.4",
      padding: "0.35rem 0.75rem",
      fontSize: theme.typography.pxToRem(14),
      maxWidth: 214
    }
  })
)

export { HtmlTooltipText }