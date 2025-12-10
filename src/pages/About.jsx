import SectionHeader from '../components/SectionHeader'

export default function About() {
  return (
    <div className="container mx-auto px-4 py-12 max-w-3xl">
      <SectionHeader title="About" subtitle="Who I am and what I do" />
      <p className="text-gray-700 mb-4">
        I'm Maxwell Maina, a geoinformatics specialist focused on applying remote
        sensing, machine learning, and data engineering to environmental and
        agricultural challenges. I build reproducible workflows, interactive
        dashboards, and decision support systems for research and operations.
      </p>

      <h3 className="text-xl font-semibold mt-6 mb-2">Skills</h3>
      <ul className="list-disc pl-6 text-gray-700">
        <li>Remote Sensing & Satellite Data (Sentinel, Landsat, SAR)</li>
        <li>Geospatial Analysis (GEE, GDAL, PostGIS)</li>
        <li>Machine Learning & Deep Learning (scikit-learn, PyTorch)</li>
        <li>Web Mapping & Dashboards (React, Leaflet, Deck.gl)</li>
      </ul>

      <h3 className="text-xl font-semibold mt-6 mb-2">Contact</h3>
      <p className="text-gray-700">
        For collaborations, consultancy, or speaking engagements:{' '}
        <a href="mailto:maxwellmaina5194@gmail.com" className="text-blue-600">
          maxwellmaina5194@gmail.com
        </a>
      </p>
    </div>
  )
}
