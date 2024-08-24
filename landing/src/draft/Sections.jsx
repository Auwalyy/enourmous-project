import React, { useState } from 'react'
import './Section.css'
import project from '../../assets/projects/project.png'
import images1 from '../../assets/image2.jpg'

const Section = () => {
  return (
    <div className="sections">
      <h1 className="sec-title">
        Enourmous Hub, Business Solution <span>Enourmous is for you to showcase and brings your idea into real life.</span>
      </h1>
      <img src={images1} className='sec-img' alt="" />
    </div>
  )
}

export default Section