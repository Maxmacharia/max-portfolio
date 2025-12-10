export default function Stats() {
  const stats = [
    { label: "Completed Projects", value: "6+" },
    { label: "Tools & Technologies", value: "20+" },
    { label: "Platforms Used", value: "GEE, Python, GIS, ML" },
  ]

  return (
    <div className="grid md:grid-cols-3 gap-6 text-center">
      {stats.map((stat, index) => (
        <div
          key={index}
          className="bg-white shadow-md rounded-xl p-6 border border-gray-200"
        >
          <h3 className="text-3xl font-bold text-gray-900">{stat.value}</h3>
          <p className="mt-2 text-gray-600">{stat.label}</p>
        </div>
      ))}
    </div>
  )
}
