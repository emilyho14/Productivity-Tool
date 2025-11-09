import '@coreui/coreui/dist/css/coreui.min.css';
import './App.css';
import Home from './components/Pages/Home/Home';
import About from './components/Pages/About/About';
import ProgressBarTimer from './components/Features/ProgressBar/ProgressBarTimer';
import Header from './components/Features/Header/Header';
import Contact from './components/Pages/Contact/Contact';
import ProductivityTools from './components/Pages/Productivity/ProducitivityTools';
import { Routes, Route } from 'react-router-dom';

function App() {
  return(
    <div className="app-container">
      <div className="banner-container"> 
        <Header />
      </div>

      <Routes>
        <Route path="/Productivity-Tool" element={<Home />} />
        <Route path="/productivity-tools" element={<ProductivityTools />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>

    </div>
  )
}

export default App