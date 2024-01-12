import React from 'react'
import "./features.css"

import Feature from "../../components/feature/Feature"

const featuresData = [
  {
    title: "Improving end distrusts instantly",
    text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolor, nostrum Nam eligendi esse natus placeat "
  },
  {
    title: "Become the tended active",
    text: "Lorem ipsum dolor consectetur adipisicing elit. Dolor, nostrum facere? Nam eligendi esse natus placeat "
  },
  {
    title: "Message or am nothing",
    text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolor, nostrum facere? Nam eligendi esse natus "
  },
  {
    title: "Really boy law country",
    text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolor, nostrum facere? Nam eligendi esse natus placeat "
  }
]

const Features = () => {
  return (
    <div className='gpt3__features section__padding' id="features">
      <div className='gpt3__features-heading'>
        <h1 className='gradient__text'>
          The Future is Now and You Just Need To Realize It. Step into Future Today & Make It Happen.
        </h1>
        <p className='gradient__text'>Request Early Access to Get Started</p>
      </div>
      <div className='gpt3__features-container'>
        {featuresData.map((item, index) => (
          <Feature title={item.title} text={item.text} key={item.title + index} />
        ))}
      </div>
    </div>
  )
}

export default Features