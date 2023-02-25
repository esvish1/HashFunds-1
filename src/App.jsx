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
      {loaded ? (
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/projects/:id" element={<Project />} />
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
