import SectionHeader from '../components/SectionHeader'
import { projects } from '../data/projects'
import ProjectCard from '../components/ProjectCard'

export default function Projects() {
  return (
    <div className="container mx-auto px-4 py-12">
      <SectionHeader title="Projects" subtitle="Full list of projects and case studies" />
      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {projects.map(p => <ProjectCard key={p.id} project={p} />)}
      </div>
    </div>
  )
}
