import { useState } from "react";

export default function Contact() {
  const [sent, setSent] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    // Simulate sending (since no backend configured)
    setSent(true);
  };

  return (
    <div className="container mx-auto px-4 py-12 max-w-2xl">
      <h2 className="text-2xl font-bold mb-4">Contact</h2>

      <p className="text-gray-700 mb-6">
        Use the form below or email me directly at{" "}
        <a
          href="mailto:maxwellmaina5194@gmail.com"
          className="text-blue-600 underline"
        >
          maxwellmaina5194@gmail.com
        </a>
      </p>

      {/* Success Message */}
      {sent && (
        <div className="mb-6 p-4 rounded bg-green-100 text-green-800 border border-green-300">
          Your message has been sent successfully. I will get back to you shortly.
        </div>
      )}

      <form onSubmit={handleSubmit} className="grid grid-cols-1 gap-4">
        <input
          className="border rounded px-3 py-2"
          placeholder="Your name"
          required
        />
        <input
          className="border rounded px-3 py-2"
          placeholder="Your email"
          type="email"
          required
        />
        <textarea
          className="border rounded px-3 py-2 h-32"
          placeholder="Message"
          required
        ></textarea>

        <button
          type="submit"
          className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700"
        >
          Send Message
        </button>
      </form>
    </div>
  );
}
