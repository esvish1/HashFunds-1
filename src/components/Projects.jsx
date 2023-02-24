import Identicons from 'react-identicons'
import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { truncate, daysRemaining } from '../store'
import { FaEthereum } from 'react-icons/fa'

const Projects = ({ projects }) => {
  return (
    <div className="flex flex-col px-5 mb-7">
      <div className="flex justify-center items-center flex-wrap ">
        {projects.map((project, i) => (
          <ProjectCard key={i} project={project} />
        ))}
      </div>
    </div>
  )
}

const ProjectCard = ({ project }) => {
  const expired = new Date().getTime() > Number(project?.expiresAt + '000')

  return (
    <div id="projects" className="rounded-lg shadow-lg bg-white w-64 m-4 hover:scale-110 duration-300">
      <Link to={'/projects/' + project.id}>
        <img
          src={project.imageURL}
          alt={project.title}
          className="rounded-xl h-64 w-full object-cover"
        />

        <div className="p-4">
          <h5>{truncate(project.title, 25, 0, 28)}</h5>

          <div className="flex flex-col">
    

            <small className="text-gray-500">
              {expired ? 'Expired' : daysRemaining(project.expiresAt) + ' left'}
            </small>
          </div>

          <div className="w-full bg-gray-300 overflow-hidden">
            <div
              className="bg-green-600 text-xs font-medium
            text-green-100 text-center p-0.5 leading-none
            rounded-l-full"
              style={{ width: `${(project.raised / project.cost) * 100}%` }}
            ></div>
          </div>

          <div
            className="flex justify-between items-center 
        font-bold mt-1 mb-2 text-gray-700"
          >
            <small>{project.raised} ETH Raised</small>
            <small className="flex justify-start items-center">
              <FaEthereum />
              <span>{project.cost} ETH</span>
            </small>
          </div>

          <div
            className="flex justify-between items-center flex-wrap
            mt-4 mb-2 text-gray-500 font-bold"
          >
            <small>
              {project.backers} Donation{project.backers == 1 ? '' : 's'}
            </small>
            <div>
              {expired ? (
                <small className="text-red-500">Expired</small>
              ) : project?.status == 0 ? (
                <small className="text-gray-500">Open</small>
              ) : project?.status == 1 ? (
                <small className="text-green-500">Accepted</small>
              ) : project?.status == 2 ? (
                <small className="text-gray-500">Reverted</small>
              ) : project?.status == 3 ? (
                <small className="text-red-500">Deleted</small>
              ) : (
                <small className="text-orange-500">Paid</small>
              )}
            </div>
          </div>
        </div>
      </Link>
    </div>
  )
}

export default Projects
