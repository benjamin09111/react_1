import React from 'react'
import "./footer.css"
import gpt3Logo from "../../assets/logo.svg"

const Footer = () => {
  return (
    <div className='gpt3__footer section__pading'>
      <div className='gpt3__footer-heading'>
        <h1 className='gradient__text'>Do you want to step in to future before others</h1>
      </div>

      <div className='gpt3__footer-btn'>
        Request Early Access
      </div>

      <div className='gpt3__footer-links'>
        <div className='gpt3__footer-links_logo'>
          <img src={gpt3Logo} alt="logo" />
          <p>Crechterwood K12 182 DK Alknjkcb, All Rights Reserved</p>
        </div>
        <div className='gpt3__footer-links_div'>
          <h4>Links</h4>
          <p>Overons</p>
          <p>Social Media</p>
          <p>Counters</p>
          <p>Contact</p>
        </div>
        <div className='gpt3__footer-links_div'>
          <h4>Company</h4>
          <p>Terms & Conditions</p>
          <p>Privacy Policy</p>
          <p>Contact</p>
        </div>
        <div className='gpt3__footer-links_div'>
          <h4>Get in touch</h4>
          <p>Crechterwoord K12 182 DK Alknjkcb</p>
          <p>085-132567</p>
          <p>info@oayme.net</p>
        </div>
      </div>

      <div className='gpt3__footer-copyright'>
        <p>This is a Frontend React proyect by Benjamin Morales in 2024, all rights are reserved by GPT-3 2021.</p>
      </div>

    </div>
  )
}

export default Footer