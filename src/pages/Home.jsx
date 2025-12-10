import Hero from '../components/Hero'
import SectionHeader from '../components/SectionHeader'
import Stats from '../components/Stats'
import ProjectOverview from '../components/ProjectOverview'

export default function Home() {
  return (
    <div>
      {/* Hero */}
      <Hero />

      {/* Core Content */}
      <div className="container mx-auto px-4 py-16 space-y-20">

        {/* Stats Section */}
        <SectionHeader 
          title="My Project Summary" 
          subtitle="Overview of completed and ongoing work"
        />
        <Stats />

        {/* Detailed Project Overview */}
        <SectionHeader 
          title="What I Do" 
          subtitle="A deeper explanation of the type of projects handled"
        />
        <ProjectOverview />

      </div>
    </div>
  )
}
