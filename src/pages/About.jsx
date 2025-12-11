import masha from "../assets/projects/masha.jpg";
import SectionHeader from "../components/SectionHeader";

export default function About() {
  return (
    <div className="container mx-auto px-4 py-12">
      <SectionHeader
        title="About Me"
        subtitle="Professional Background, Skills, and Experience"
      />

      <div className="grid md:grid-cols-2 gap-10 items-start">
        
        {/* LEFT SIDE – PASSPORT IMAGE */}
        <div className="flex justify-center md:justify-start">
          <img
            src={masha}
            alt="Maxwell Macharia"
            className="w-56 h-56 object-cover rounded-lg shadow-lg border"
          />
        </div>

        {/* RIGHT SIDE – DETAILS */}
        <div>
          {/* Personal Info */}
          <h2 className="text-2xl font-semibold mb-4">Personal Information</h2>
          <ul className="text-lg space-y-2">
            <li><strong>Name:</strong> Maxwell Macharia</li>
            <li><strong>Profile:</strong> GIS Analyst, Researcher, and Developer</li>
            <li>
              <strong>Email:</strong>{" "}
              <a
                className="text-blue-600 underline"
                href="mailto:Maxwellmaina5194@gmail.com"
              >
                Maxwellmaina5194@gmail.com
              </a>
            </li>
            <li><strong>Phone:</strong> +254 700 142 594</li>
          </ul>

          {/* Who I Am */}
          <div className="mt-10">
            <h2 className="text-2xl font-semibold mb-4">Who I Am</h2>
            <p className="text-lg leading-relaxed">
              I am a dedicated Geoinformatics professional with strong expertise in GIS
              analytics, remote sensing, machine learning, and geospatial software
              development. My work focuses on leveraging spatial data to build advanced
              analytical tools, predictive models, and decision support systems for
              environmental, agricultural, and developmental applications.
            </p>
          </div>

          {/* Education */}
          <div className="mt-10">
            <h2 className="text-2xl font-semibold mb-4">Education</h2>
            <p className="text-lg leading-relaxed">
              I hold a <strong>Bachelor of Applied Science in Geoinformatics</strong> from the
              <strong> Technical University of Kenya</strong>.  
              I have also completed several sections of the
              <strong> ALX Software Engineering Program</strong>, gaining strong experience in
              software engineering, backend development, and modern programming
              practices.
            </p>
          </div>

          {/* Work Experience */}
          <div className="mt-10">
            <h2 className="text-2xl font-semibold mb-4">Work Experience</h2>
            <p className="text-lg leading-relaxed">
              I completed my industrial attachment at <strong>Geopsy Research</strong>,
              contributing to geospatial analysis, satellite image processing, and
              research-driven environmental monitoring workflows.
              <br /><br />
              I am currently an <strong>Intern at Geopsy Research</strong>, where I work on
              geospatial automation, machine learning for Earth Observation, dashboard
              development, and the creation of modern GIS-based decision support
              systems.
            </p>
          </div>
        </div>
      </div>

      {/* Skills Section */}
      <div className="mt-16">
        <h2 className="text-3xl font-semibold mb-6">Skills & Expertise</h2>

        <div className="grid md:grid-cols-2 gap-8 text-lg">

          {/* Skill Block */}
          <div className="bg-white shadow-md p-6 rounded-xl border">
            <h3 className="text-xl font-semibold mb-3">Remote Sensing & Satellite Data</h3>
            <ul className="space-y-1 list-disc list-inside">
              <li>Sentinel (1 & 2)</li>
              <li>Landsat Series (4–9)</li>
              <li>SAR / Radar Imagery</li>
              <li>High-Resolution Drone Imagery</li>
            </ul>
          </div>

          <div className="bg-white shadow-md p-6 rounded-xl border">
            <h3 className="text-xl font-semibold mb-3">Geospatial Analysis</h3>
            <ul className="space-y-1 list-disc list-inside">
              <li>Google Earth Engine (GEE)</li>
              <li>GDAL / OGR</li>
              <li>Python (GeoPandas, Rasterio, Shapely)</li>
              <li>PostGIS / Spatial SQL</li>
            </ul>
          </div>

          <div className="bg-white shadow-md p-6 rounded-xl border">
            <h3 className="text-xl font-semibold mb-3">Machine Learning & Deep Learning</h3>
            <ul className="space-y-1 list-disc list-inside">
              <li>scikit-learn (RF, SVM, Clustering)</li>
              <li>PyTorch (U-Net, CNNs)</li>
              <li>Image Segmentation & Classification</li>
            </ul>
          </div>

          <div className="bg-white shadow-md p-6 rounded-xl border">
            <h3 className="text-xl font-semibold mb-3">Web Mapping & Dashboards</h3>
            <ul className="space-y-1 list-disc list-inside">
              <li>React.js</li>
              <li>Leaflet.js</li>
              <li>Tailwind CSS</li>
              <li>FastAPI (Python)</li>
            </ul>
          </div>

          <div className="bg-white shadow-md p-6 rounded-xl border">
            <h3 className="text-xl font-semibold mb-3">Database Management</h3>
            <ul className="space-y-1 list-disc list-inside">
              <li>PostgreSQL</li>
              <li>PostGIS Spatial Extensions</li>
            </ul>
          </div>

        </div>
      </div>
    </div>
  );
}
