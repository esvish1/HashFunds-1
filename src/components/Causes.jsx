import React from 'react'
import { useEffect } from 'react'
import Projects from '../components/Projects'
import { loadProjects } from '../services/blockchain'
import { setGlobalState, useGlobalState } from '../store'

const Causes = () => {
    const [projects] = useGlobalState('projects')
    const [stats] = useGlobalState('stats')
  
    useEffect(async () => {
      await loadProjects()
    }, [])
    return (
      <>
      <div className="flex bg-white justify-center items-center">
        <div
          className="flex flex-col justify-center items-center
          h-20 border shadow-md w-full"
        >
          <span
            className="text-lg font-bold text-green-900
            leading-5"
          >
            {stats?.totalProjects || 0}
          </span>
          <span>Projects</span>
        </div>
        <div
          className="flex flex-col justify-center items-center
          h-20 border shadow-md w-full"
        >
          <span
            className="text-lg font-bold text-green-900
            leading-5"
          >
            {stats?.totalBacking || 0}
          </span>
          <span>Donations</span>
        </div>
        <div
          className="flex flex-col justify-center items-center
          h-20 border shadow-md w-full"
        >
          <span
            className="text-lg font-bold text-green-900
            leading-5"
          >
            {stats?.totalDonations || 0} ETH
          </span>
          <span>Donated</span>
        </div>
      </div>

      
        <Projects projects={projects} />
      </>
    )
  }

export default Causes
