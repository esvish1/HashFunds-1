import { useEffect } from 'react'
import CreateProject from '../components/CreateProject'
import Hero from '../components/Hero'
import Projects from '../components/Projects'
import { loadProjects } from '../services/blockchain'
import { useGlobalState } from '../store'
import About from '../components/About';
import Footer from '../components/Footer';
import Subscribe from '../components/Subscribe';

const Home = () => {
  const [projects] = useGlobalState('projects')

  useEffect(async () => {
    await loadProjects()
  }, [])
  return (
    <>
    <Hero />
      <Projects projects={projects} />
      <About />
      <Subscribe />
      <Footer />
      
    </>
  )
}

export default Home
