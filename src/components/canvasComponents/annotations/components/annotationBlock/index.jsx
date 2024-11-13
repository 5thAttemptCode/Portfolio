import React from 'react'
import './style.css'
import { HtmlTooltipText } from '../htmlTooltip'


export default function AnnotationBlock({ href, header, description, liveLink }) {
    
  return (
    <div className="annotation">
      {liveLink ? (
        <HtmlTooltipText placement="top-start" title={
          <>
            <b>{header}</b>
            {description}
          </>
        }>
          <a href={href} target='_blank'>Live</a>
        </HtmlTooltipText>
      ) : (
        <abbr title="View source-code">
          <a href={href} target='_blank'>Code</a>
        </abbr>
      )}
    </div>
  )
}