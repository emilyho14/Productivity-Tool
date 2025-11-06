import './App.css';
import Home from './components/Home/Home';
import About from './components/About/About';
import ProgressBarTimer from './components/ProgressBar/ProgressBarTimer';
import Header from './components/Header/Header';
import Contact from './components/Contact/Contact';
import { Routes, Route } from 'react-router-dom';

function App() {
  return(
    <div className="app-container">
      <div className="banner-container"> 
        <Header />
      </div>

      <Routes>
        <Route path="/Productivity-Tool" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>

    </div>
  )
}

export default App