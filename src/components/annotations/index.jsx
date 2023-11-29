import React, { useState } from 'react'
import './style.css'

import { Html } from '@react-three/drei'
import { useConfigurator } from '../../context'
import { Tooltip, tooltipClasses } from '@mui/material'
import { styled } from '@mui/material/styles';


export default function Annotation() {
  
  const [ hidden, set ] = useState()
  const { modalOpen } = useConfigurator()

  return (
    <>
      <Html 
        position={[-0.75, 0.96, -1.12]} 
        rotation-y={3.7} 
        distanceFactor={3}
        transform 
        occlude
        style={{
          transition: 'all 0.2s',
          opacity: hidden ? 0 : 1,
          transform: `scale(${hidden ? 0 : 1})`,
          display: modalOpen ? "none" : "block",
          pointerEvents: modalOpen ? "none" : "auto",
          }}
        >
        <div className="annotation-wrapper">

          <div className="annotation coffe-inc">
            <HtmlTooltip
              placement="top-start"
              title={
                <React.Fragment>
                  <b>{'E-Commerce'}</b>
                  <br />
                  {"R3F, Firebase, Paypal, Blender"}
                </React.Fragment>
              }
            >
              <a className='live' href='https://coffee-inc.netlify.app/' target='_blank'>LIVE</a>
            </HtmlTooltip>
            <a className='code' href='https://github.com/5thAttemptCode/React_R3F_Firebase_Full-project_CoffeeInc' target='_blank'>&lt;/&gt;</a>
          </div>

          <div className="annotation zleep">
            <HtmlTooltip
              placement="top-start"
              title={
                <React.Fragment>
                  <b>{'Product Page'}</b>
                  <br />
                  {"R3F, Firebase, Paypal, Blender, Inkscape"}
                </React.Fragment>
              }
            >
              <a className='live' href='https://zleep-cbd.netlify.app/' target='_blank'>LIVE</a>
            </HtmlTooltip>
            <a className='code' href='https://github.com/5thAttemptCode/React_R3F_Full-project_ZLEEP' target='_blank'>&lt;/&gt;</a>
          </div>

          <div className="annotation sneaker-headz">
            <HtmlTooltip
              placement="top-start"
              title={
                <React.Fragment>
                  <b>{'E-Commerce'}</b>
                  <br />
                  {"React, Firebase, Paypal, Inkscape"}
                </React.Fragment>
              }
            >
              <a className='live' href='https://sneaker-headz.netlify.app' target='_blank'>LIVE</a>
            </HtmlTooltip>
            <a className='code' href='https://github.com/5thAttemptCode/React_Firebase_Full-project_SneakerHeadz' target='_blank'>&lt;/&gt;</a>
          </div>

          <div className="annotation dough-boyz">
            <HtmlTooltip
              placement="top-start"
              title={
                <React.Fragment>
                  <b>{'Landing Page'}</b>
                  <br />
                  {"Three JS, HTML/CSS"}
                </React.Fragment>
              }
            >
              <a className='live' href='https://doughboyz.netlify.app/' target='_blank'>LIVE</a>
            </HtmlTooltip>
            <a className='code' href='https://github.com/5thAttemptCode/Doughboyz_ThreeJS_Portfolio-project' target='_blank'>&lt;/&gt;</a>
          </div>
        </div>

      </Html>
    </>
  )
}

const HtmlTooltip = styled(({ className, ...props }) => (
  <Tooltip {...props} classes={{ popper: className }} />
  ))(({ theme }) => ({
    [`& .${tooltipClasses.tooltip}`]: {
      backgroundColor: 'rgb(0, 0, 0, 0.8)',
      color: '#2e70ff',
      backdropFilter: 'blur(10px)',
      maxWidth: 220,
      fontSize: theme.typography.pxToRem(16),
      padding: '0.5em',
      border: '2px solid white',
    },
}));