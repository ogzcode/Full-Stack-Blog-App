import { Routes, Route } from 'react-router-dom'

import './App.css'
import Home from './pages/Home'
import About from './pages/About'
import Login from './auth/Login'
import Create from './pages/Create'

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/about" element={<About />} />
      <Route path="/login" element={<Login />} />
      <Route path="/create" element={<Create />} />
    </Routes>
  )
}

export default App
