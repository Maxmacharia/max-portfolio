export default function ProjectOverview() {
  return (
    <div className="bg-gray-50 p-10 rounded-xl shadow-sm border border-gray-200">
      <h2 className="text-2xl font-bold mb-4">What I Work On</h2>
      <p className="text-gray-700 leading-relaxed">
        My geospatial portfolio showcases end-to-end development of spatial analysis
        pipelines involving remote sensing, GIS, machine learning, and decision-support
        systems. These projects include Land Use/Land Cover (LULC) classification,
        object-based image analysis (OBIA), geospatial dashboards, environmental
        monitoring systems, and predictive analytics for agriculture, climate, and
        community resilience.
      </p>

      <p className="mt-4 text-gray-700 leading-relaxed">
        I work extensively with Google Earth Engine, Python-based geospatial machine
        learning, satellite imagery (Landsat, Sentinel-2, PlanetScope), PostGIS, and
        web-based spatial visualization frameworks. My objective is to produce
        operational insights and scalable geospatial tools for governments,
        businesses, and humanitarian actors.
      </p>
    </div>
  )
}
