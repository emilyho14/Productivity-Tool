import React from 'react';
import illini from "../../../assets/images/go-illini.png"
import resume from '../../../assets/files/Emily Ho_ Resume.docx.pdf';

function About() {
    return (
      <div>
        <div className='about-me-container'>
          <p>Hello! My name is Emily Ho and I am a first-year Master's of Computer Science student at the University of Illinois at Urbana Champaign 
          &nbsp;
            <span class="hover-illini">(UIUC ... pssst click me)
              <img src={illini} />
            </span>
            ! </p>

          <p> My interests and experience span full-stack development and backend software engineering. </p>

          <p> Outside of academics and work, I enjoy baking sourdough, sketching architecture, running, and crocheting! </p>
        </div>
        <div className='resume-container'>
          <a href={resume} target="_blank" rel="noopener noreferrer" >
            View my resume!
          </a>  
          </div>
      </div>
    )

};

export default About;