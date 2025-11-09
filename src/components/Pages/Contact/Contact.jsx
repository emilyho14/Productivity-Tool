import React from 'react';
import { FaLinkedin, FaGithub } from "react-icons/fa";
import { HiOutlineDocumentText } from "react-icons/hi";


function Contact() {
    return (
        <div>
            <div className='contact-container'>
                <p> Hello there! </p>
                <p>I'd love to connect! Whether you want to talk about software development, research, or collaboration opportunities, feel free to reach out below.</p>

                <p>Email: <a href="mailto:eeho2@illinois.edu">eeho2@illinois.edu</a></p>

            </div>
            <p className="contact-icons">
                <a href="https://www.linkedin.com/in/emily-ho14" target="_blank" rel="noopener noreferrer">
                    <FaLinkedin />
                </a>
                <a href="https://github.com/emilyho14" target="_blank" rel="noopener noreferrer">
                    <FaGithub />
                </a>
            </p>
        </div>

    );
}

export default Contact;
