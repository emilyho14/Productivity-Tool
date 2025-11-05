import { useState } from 'react'
import './App.css'
import "@fontsource/lexend"
import About from './components/About/About'
import ProgressBarTimer from './components/ProgressBar/ProgressBarTimer'

function App() {
  return(
    <div className="app-container">
      <div className="banner-container">
        <h1 className="website-title">Emily's Website!</h1>
      </div>
      <About/>
      <div>
        <ProgressBarTimer />
      </div>

    </div>
  )
}

export default App
