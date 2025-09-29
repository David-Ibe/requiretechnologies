import { MessageCircle } from 'lucide-react'

export default function WhatsAppButton() {
  const phoneNumber = "2347063716221" // WhatsApp number for Require Technologies Limited
  const message = "Hello! I'm interested in your software development services. Can you tell me more about your offerings?"

  return (
    <a
      href={`https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`}
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 bg-gradient-to-r from-green-500 to-green-600 text-white p-4 rounded-full shadow-2xl hover:shadow-green-500/25 transition-all duration-300 hover:scale-110 z-50 group focus:outline-none focus-visible:ring-2 focus-visible:ring-green-300"
      aria-label="Chat with us on WhatsApp"
      tabIndex={0}
    >
      <MessageCircle className="w-6 h-6 group-hover:rotate-12 transition-transform duration-300" />

      {/* Pulse animation */}
      <div className="absolute inset-0 rounded-full bg-green-500 animate-ping opacity-20"></div>

      {/* Tooltip */}
      <div className="absolute right-full mr-3 top-1/2 -translate-y-1/2 bg-gray-900 text-white text-sm px-3 py-2 rounded-lg opacity-0 group-hover:opacity-100 group-focus-within:opacity-100 transition-opacity duration-300 whitespace-nowrap">
        Chat with us!
        <div className="absolute left-full top-1/2 -translate-y-1/2 border-4 border-transparent border-l-gray-900"></div>
      </div>
    </a>
  )
}
