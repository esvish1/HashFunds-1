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
      <div style={{position:"relative",top:"700px",backgroundColor:"black"}}><Projects projects={projects} /></div>
      <div style={{position:"relative",top:"660px",backgroundColor:"black"}}><About /></div>
      <div style={{position:"relative",top:"1350px",backgroundColor:"black"}}><Subscribe /></div>
      <div style={{position:"relative",top:"1300px",backgroundColor:"black"}}><Footer /></div>
      
    </>
  )
}

export default Home
