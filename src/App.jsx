import { useState } from 'react'
import './App.css'
import "@fontsource/lexend"
import About from './About'
import ProgressBarTimer from './ProgressBarTimer'
import TimePassed from '../TimePassed'

function App() {
  return(
    <>
      <div className="app-container">
        <div className="banner-container">
          <h1 className="website-title">Emily's Website!</h1>
        </div>
        <About/>
      </div>
      
      <div>
        <TimePassed />
        <ProgressBarTimer />
      </div>
    </>
  )
}

export default App
