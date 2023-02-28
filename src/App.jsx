import { useEffect, useState } from 'react'
import { Route, Routes } from 'react-router-dom'
import React, { useCallback } from 'react';
import Particles from "react-particles";
import { loadFull } from "tsparticles";
import Home from './views/Home'
import Project from './views/Project'
import { isWallectConnected } from './services/blockchain'
import { ToastContainer } from 'react-toastify'
import Navbar from './components/Navbar'
import particlesOptions from "./particles.json";
import Causes from './components/Causes';
import Contact from './components/Contact';
import Chat from './components/Chat';
import Fundraise from './components/Fundraise';


const App = () => {
  const [loaded, setLoaded] = useState(false)
  const particlesInit = useCallback(main => {
    loadFull(main);
}, [])

  useEffect(async () => {
    await isWallectConnected()
    setLoaded(true)
    console.log('Blockchain loaded')
  }, [])

  return (
    <div className="min-h-screen relative">
      <Particles options={particlesOptions} init={particlesInit}/>
      <Navbar />
      <Chat />
      {loaded ? (
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/projects/:id" element={<Project />} />
          <Route path="/Causes" element={<Causes />} />
          <Route path="/Contact" element={<Contact />} />
           <Route path="/Fundraise" element={<Fundraise />} />
          

        </Routes>
      ) : null}

      <ToastContainer
        position="bottom-center"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="dark"
      />
    </div>
  )
}

export default App
