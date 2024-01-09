import React from 'react'
import { Feature } from "../../components"
import "./whatGPT3.css"

const WhatGPT3 = () => {
  return (
    <div className='gpt3__whatgpt3 section__margin' id='whpt3'>
      <div className='gpt3__whatgpt3-features'>
        <Feature title="What is GPT-3" text="Lorem ipsum dolor, sit amet consectetur adipisicing elit. Laudantium sapiente, beatae aut nemo facere ducimus reprehenderit quis itaque reiciendis vel molestiae fugit"/>
      </div>
      <div className='gpt3__whatgpt3-heading'>
        <h1 className='gradient__text'>The possibilities are beyond your imagination</h1>
        <p>Explore The Library</p>
      </div>
      <div className='gpt3__whatgpt3-container'>
        <Feature title="Chatbots" text="Lorem ipsum dolor, sit amet consectetur adipisicing elit. Laudantium sapiente"/>
        <Feature title="Knowledgebase" text="Lorem ipsum dolor, sit amet consectetur adipisicing elit. Laudantium sapiente"/>
        <Feature title="Education" text="Lorem ipsum dolor, sit amet consectetur adipisicing elit. Laudantium sapiente"/>
      </div>
    </div>
  )
}

export default WhatGPT3