import './App.css'
import { Route, Routes } from 'react-router-dom'
import Home from './components/Home'
import About from './components/About'
import Resume from './components/Resume'
import Service from './components/Service'
import Contact from './components/Contact'

function App() {

  return (
    <div>
      <Routes>
        <Route path="/" element={<Home />} /> 
        <Route path="/about" element={<About />} /> 
        <Route path="/resume" element={<Resume />} /> 
        <Route path="/service" element={<Service />} /> 
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </div>

  )
}

export default App
