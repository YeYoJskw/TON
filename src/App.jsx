import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from 'react-router-dom'
import Home from './pages/Home'
import Second from './pages/Second'
import './App.css'
import Footer from './components/layout/Footer.jsx'
import React from 'react'
import MenuButtom from './components/MenuBottom.jsx'

function App() {
  return (
    <Router basename="/">
      {' '}
      {/* Добавляем basename */}
      <div className="container">
        <Routes>
          <Route path="/" element={<Navigate to="/home" replace />} />
          <Route path="/home" element={<Home />} />
          <Route path="/second" element={<Second />} />
        </Routes>
      </div>
      <Footer />
      <MenuButtom />
    </Router>
  )
}

export default App
