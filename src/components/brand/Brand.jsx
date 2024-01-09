import React from 'react'
import "./brand.css"
import {google,atlassian,dropbox,slack,shopify} from "./import"

const Brand = () => {
  return (
    <div className='gpt3__brand section_padding'>
      <div className=''>
        <img src={google} alt="google" />
        <img src={atlassian} alt="google" />
        <img src={dropbox} alt="google" />
        <img src={slack} alt="google" />
        <img src={shopify} alt="google" />
      </div>
    </div>
  )
}

export default Brand