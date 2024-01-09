import React from 'react'
import { Feature } from "../../components"
import "./whatGPT3.css"

const WhatGPT3 = () => {
  return (
    <div className='gpt3__whatgpt3 section__margin' id='whpt3'>
      <div className='gpt3__whatgpt3-features'>
        <div><h2 className='h22'>What is GPT-3</h2></div>
        <div><Feature title="Descripcion" text="Lorem ipsum dolor, sit amet consectetur adipisicing elit. Laudantium sapiente, beatae aut nemo facere ducimus reprehenderit quis itaque reiciendis vel molestiae fugit"/></div>
      </div>
      <div className='gpt3__whatgpt3-heading'>
        <h1 className='gradient__text'>The possibilities are beyond your imagination</h1>
        <p>Explore The Library</p>
      </div>
      <div className='gpt3__whatgpt3-container'>
        <div><Feature title="Chatbots" text="Lorem ipsum dolor, sit amet consectetur adipisicing elit. Laudantium sapiente"/></div>
        <div><Feature title="Knowledgebase" text="Lorem ipsum dolor, sit amet consectetur adipisicing elit. Laudantium sapiente"/></div>
        <div><Feature title="Education" text="Lorem ipsum dolor, sit amet consectetur adipisicing elit. Laudantium sapiente"/></div>
      </div>
    </div>
  )
}

export default WhatGPT3