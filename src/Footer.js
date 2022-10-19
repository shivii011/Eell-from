import React from 'react'
import './Footer.css'
import facebook from './facebook.png'
import linkedin from './linkedin.png'
import logo from './logo.png'
import twitter from './twitter.png'
import instaram from './instagram .png'

function Footer() {
  return (
    <div className='mainFooterDiv'>
        <div className='logoDiv'>
            <img className='logoEcell' src={logo}/>
            <p>Ecell, JEC Jabalpur</p>
        </div>
        <div>
            @2022 @all rights reserved
        </div>
        <div className='socialMedia'>
        <img className='iconsFooter' src={facebook}/>
        <img className='iconsFooter' src={instaram}/>
        <img className='iconsFooter' src={twitter}/>
        <img className='iconsFooter' src={linkedin}/>
        </div>
    </div>
  )
}

export default Footer