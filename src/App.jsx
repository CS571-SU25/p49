import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { HashRouter } from 'react-router'
import Contact from './components/pages/Contact'
import Blog from './components/pages/Blog'
import About from './components/pages/About'
import Projects from './components/pages/Projects'
import Resume from './components/pages/Resume'
import Home from './components/pages/Home'
import { Routes, Route } from 'react-router'

function App() {
  return <HashRouter>
    <Routes>
      <Route path="/" element={<Home/>}></Route>
        <Route path="about" element={<About/>}></Route>
        <Route path="blog" element={<Blog/>}></Route>
        <Route path="contact" element={<Contact/>}></Route>
        <Route path="projects" element={<Projects/>}></Route>
        <Route path="resume" element={<Resume/>}></Route>
    </Routes>
  </HashRouter>
}

export default App
