import React from 'react'; // Added React import for completeness
import { useParams, Link } from 'react-router-dom';
import { projects } from '../data/projects'; // Assuming projects data is imported here

export default function ProjectDetails() {
  const { id } = useParams();
  const project = projects.find(p => p.id === parseInt(id));

  if (!project) {
    return (
      <div className="container mx-auto px-4 py-12 max-w-4xl">
        <h1 className="text-3xl font-bold mb-4">Project Not Found</h1>
        <Link to="/projects" className="text-sm text-blue-600 mb-4 inline-block">
          ← Back to projects
        </Link>
      </div>
    );
  }

  // Alias for details object for cleaner access within JSX
  const d = project.details;

  return (
    <div className="container mx-auto px-4 py-12 max-w-4xl">
      <Link to="/projects" className="text-sm text-blue-600 mb-4 inline-block">
        ← Back to projects
      </Link>
      <h1 className="text-3xl font-bold mb-4">{project.title}</h1>
      <img src={project.image} alt={project.title} className="w-full rounded mb-6" />

      <section className="mb-6">
        <h2 className="text-xl font-semibold mb-2">Objective</h2>
        <p className="text-gray-700">{d.objective}</p>
      </section>

      <section className="mb-6">
        <h2 className="text-xl font-semibold mb-2">Data Used</h2>
        <p className="text-gray-700 whitespace-pre-line">{d.data}</p>
      </section>

      <section className="mb-6">
        <h2 className="text-xl font-semibold mb-2">Methods & Models Used</h2>
        <p className="text-gray-700 whitespace-pre-line">{d.methods}</p>
      </section>

      <section className="mb-6">
        <h2 className="text-xl font-semibold mb-2">Tools & Technologies</h2>
        <p className="text-gray-700">{d.tools}</p>
      </section>

      {d.visualization && (
        <section className="mb-6">
          <h2 className="text-xl font-semibold mb-2">Visualizations</h2>
          <p className="text-gray-700">{d.visualization}</p>
        </section>
      )}

      {d.link && (
        <section className="mb-6">
          <h2 className="text-xl font-semibold mb-2">Links</h2>
          {typeof d.link === 'string' ? (
            <a href={d.link} className="text-blue-600 hover:underline" target="_blank" rel="noreferrer">
              Open Script / Resource
            </a>
          ) : (
            <ul className="list-disc pl-6">
              {Object.entries(d.link).map(([k, v]) => (
                <li key={k}>
                  <a href={v} className="text-blue-600 hover:underline" target="_blank" rel="noreferrer">
                    {k}
                  </a>
                </li>
              ))}
            </ul>
          )}
        </section>
      )}
    </div>
  );
}
