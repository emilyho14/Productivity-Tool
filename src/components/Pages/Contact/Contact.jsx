import React from 'react';
import emailjs from '@emailjs/browser'

function Contact() {
    return (
        <div className='contact-container'>
            <p> Hello there! </p>
            <p>I'd love to connect! Whether you want to talk about software development, research, or collaboration opportunities, feel free to reach out below.</p>

            <p>Email: <a href="mailto:eeho2@illinois.edu">eeho2@illinois.edu</a></p>

            <p>
                <a href="https://www.linkedin.com/in/emily-ho14" target="_blank">LinkedIn</a> | &nbsp;
                <a href="https://github.com/emilyho14" target="_blank">GitHub</a> | &nbsp;
                <a href="/EmilyHo_Resume.pdf" target="_blank">Resume</a>
            </p>

        </div>
    );
}

export default Contact;
