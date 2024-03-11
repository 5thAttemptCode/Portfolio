import React from 'react'
import './style.css'
import { HtmlTooltipText, HtmlTooltipView } from '../htmlTooltip'
import { Code } from 'phosphor-react'


export default function AnnotationBlock({ hrefLive, hrefCode, header, description }) {
    
  return (
    <div className="annotation">
      <HtmlTooltipText placement="top-start" title={
        <React.Fragment>
          <b>{header}</b>
          {description}
        </React.Fragment>
      }>
        <a className='live' href={hrefLive} target='_blank'>LIVE</a>
      </HtmlTooltipText>
      <HtmlTooltipView>
        <a className='code' href={hrefCode} target='_blank'>
          <Code size={20} weight="bold" />
        </a>
      </HtmlTooltipView>  
    </div>
  )
}
