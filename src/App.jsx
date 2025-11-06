import './App.css'
import About from './components/About/About'
import ProgressBarTimer from './components/ProgressBar/ProgressBarTimer'
import Header from './components/Header/Header'

function App() {
  return(
    <div className="app-container">
      <div className="banner-container"> 
        <Header />
      </div>
      <About/>
      <div>
        <ProgressBarTimer />
      </div>

    </div>
  )
}

export default App