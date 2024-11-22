import React from 'react'
import './style.css'
import { HtmlTooltipText } from '../htmlTooltip'


export default function AnnotationBlock({ description, header, href, liveLink }) {
    
  return (
    <div className="annotation">
      {liveLink ? (
        <HtmlTooltipText placement="top-start" title={
          <>
            <b>{header}</b>
            {description}
          </>
        }>
          <a href={href} target='_blank' className='flex-center'>Live</a>
        </HtmlTooltipText>
      ) : (
        <HtmlTooltipText placement="top-start" title="View source-code">
          <a href={href} target='_blank' className='flex-center'>Code</a>
        </HtmlTooltipText>
      )}
    </div>
  )
}