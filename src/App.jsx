import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Contact from './components/pages/Contact'
import Blog from './components/pages/Blog'
import BlogPost from './components/BlogPost';
import About from './components/pages/About'
import Projects from './components/pages/Projects'
import Resume from './components/pages/Resume'
import Home from './components/pages/Home'
import { Routes, Route, HashRouter } from 'react-router'
import PageNavbar from './components/PageNavbar'

function App() {
  return <HashRouter>
    <PageNavbar/>
    <Routes>
      <Route path="/" element={<Home/>}/>
        <Route path="about" element={<About/>}/>
        <Route path="blog" element={<Blog/>}/>
        <Route path="blog/:slug" element={<BlogPost/>}/>
        <Route path="contact" element={<Contact/>}/>
        <Route path="projects" element={<Projects/>}/>
        <Route path="resume" element={<Resume/>}/>
    </Routes>
  </HashRouter>
}

export default App
