import React from 'react'
import './style.css'
import { HtmlTooltipText, HtmlTooltipView } from '../htmlTooltip'


export default function AnnotationBlock({ hrefLive, hrefCode, header, description }) {
    
  return (
    <div className="annotation">
      <HtmlTooltipText placement="top-start" title={
        <React.Fragment>
          <b>{header}</b>
          {description}
        </React.Fragment>
      }>
        <a href={hrefLive} target='_blank'>Live</a>
      </HtmlTooltipText>
      <HtmlTooltipView>
        <a href={hrefCode} target='_blank'>Code</a>
      </HtmlTooltipView>  
    </div>
  )
}