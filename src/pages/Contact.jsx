export default function Contact() {
  return (
    <div className="container mx-auto px-4 py-12 max-w-2xl">
      <h2 className="text-2xl font-bold mb-4">Contact</h2>
      <p className="text-gray-700 mb-6">
        Use the form below or email me directly at{' '}
        <a href="mailto:maxwellmaina5194@gmail.com" className="text-blue-600">
          maxwellmaina5194@egmail.com
        </a>
      </p>

      <form className="grid grid-cols-1 gap-4">
        <input className="border rounded px-3 py-2" placeholder="Your name" />
        <input className="border rounded px-3 py-2" placeholder="Your email" />
        <textarea className="border rounded px-3 py-2 h-32" placeholder="Message"></textarea>
        <button className="bg-blue-600 text-white px-4 py-2 rounded">
          Send Message
        </button>
      </form>
    </div>
  )
}
