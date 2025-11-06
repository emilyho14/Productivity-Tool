import React from 'react';
import illini from "../../assets/images/go-illini.avif"

function About() {
    return (
      <div className='about-me-container'>
        <p>Hello! My name is Emily Ho and I am a first-year Master's of Computer Science student at the University of Illinois at Urbana Champaign 
          <span class="hover-illini">(UIUC ... pssst click me)
            <img src={illini} />
          </span>
          ! </p>

        <p> My interests and experience span full-stack development and backend engineering. </p>

        <p> Outside of academics and work, I enjoy baking sourdough, sketching architecture, running, and crocheting! </p>
      </div>
    )

};

export default About;