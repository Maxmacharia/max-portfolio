import { Link } from 'react-router-dom'
import max from "../assets/projects/max.jpg";

export default function Hero() {
  return (
    <section className="bg-gradient-to-r from-sky-50 to-white py-20">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-2 gap-8 items-center">
          <div>
            <h1 className="text-4xl font-bold mb-4">
              Maxwell Macharia — Geoinformatics & Spatial Data Scientist & Software Development
            </h1>
            <p className="text-lg text-gray-700 mb-6">
              I build geospatial analytics, machine learning models, and decision
              support systems that transform remote sensing data into actionable
              insights.
            </p>
            <div className="space-x-4">
              <Link
                to="/projects"
                className="inline-block bg-blue-600 text-white px-5 py-3 rounded-md"
              >
                View Projects
              </Link>
              <Link
                to="/about"
                className="inline-block border border-blue-600 text-blue-600 px-5 py-3 rounded-md"
              >
                About Me
              </Link>
            </div>
          </div>
          <div>
            <img
              src={max}
              alt="hero"
              className="rounded-lg shadow-lg"
            />
          </div>
        </div>
      </div>
    </section>
  )
}
