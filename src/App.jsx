import { useState } from 'react'
import './App.css'
import "@fontsource/lexend"
import About from './About'
import ProgressBarTimer from './ProgressBarTimer'

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
        <ProgressBarTimer />
      </div>
    </>
  )
}

export default App
