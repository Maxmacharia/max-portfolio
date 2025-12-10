export default function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-300">
      <div className="container mx-auto px-4 py-8 text-sm">
        <div className="flex flex-col md:flex-row justify-between">
          <div>
            <div className="font-semibold text-white">My Projects</div>
            <div>Applied Geoinformatics & Spatial Intelligence</div>
          </div>
          <div className="mt-4 md:mt-0">
            <div>© {new Date().getFullYear()} Maxwell Macharia</div>
            <div>Built with React, TailwindCSS</div>
          </div>
        </div>
      </div>
    </footer>
  )
}
