import { Link } from 'react-router-dom'

export default function ProjectCard({ project }) {
  return (
    <div className="bg-white rounded-lg shadow p-4 flex flex-col">
      <img src={project.image} alt={project.title} className="h-44 w-full object-cover rounded" />
      <div className="mt-4 flex-1">
        <h3 className="text-lg font-semibold">{project.title}</h3>
        <p className="text-gray-600 mt-2">{project.shortDesc}</p>
      </div>
      <div className="mt-4 flex items-center justify-between">
        <Link to={`/projects/${project.id}`} className="text-blue-600 hover:underline">
          Read More
        </Link>
        {project.details.link && (
          <a
            href={typeof project.details.link === 'string' ? project.details.link : Object.values(project.details.link)[0]}
            target="_blank"
            rel="noreferrer"
            className="text-gray-500 text-sm"
          >
            External
          </a>
        )}
      </div>
    </div>
  )
}
