import React from 'react';
import ProgressBarTimer from '../ProgressBar/ProgressBarTimer';

function Home() {
    return (
        <div>
            <div className="about-container">
            <div>
                <p>
                This is a website I am building as I learn more about myself, personally and as someone who is interested in building technologies that can potentially impact many other people.
                </p>

                <p>
                As someone who has struggled with being 'productive', I have decided to create and compile tools I find useful to me that others might find useful too. 
                </p>

                <p>
                Here's a list of things I have already implemented:
                </p>
                <ul>
                <li> Change the font to something more reader friendly. Here, I decided to use Lexend, which is a Sans Serif Font.</li>
                <li> Countdown Timer + Progress Bar - For productivity time blocks</li>
                </ul>

                <p> Here's a list of things I hope to implement moving forwards:
                </p>
                <ul>
                <li>
                    Customize timer for preset options based on heavieness of task
                </li>
                <li>
                    To-do list that allows users to prioritize tasks
                </li>
                <li>
                    Thinking notepad for any random thoughts to come back to after the productivity session.
                </li>
                <li>
                    Reward system to make tasks more enjoyable to finish as some may struggle with feeling the 'dopamine' with accomplishing tasks, myself included
                </li>
                <li>
                    Daily task list for routines!
                </li>
                <li>
                    Things I have learned throughout the process. This has been something I have been needing for a long time so I am excited to learn so much more about implementing an actually useful project for myself that may reach an audience one day
                </li>
                </ul>
            </div>
            </div>
            <ProgressBarTimer />
        </div>
    )
}

export default Home;
