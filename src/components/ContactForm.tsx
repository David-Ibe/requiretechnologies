'use client'

import { useState } from 'react'

export default function ContactForm() {
  const [formData, setFormData] = useState({ 
    name: '', 
    email: '', 
    message: '' 
  })
  const [submitting, setSubmitting] = useState(false)
  const [notice, setNotice] = useState<{ type: 'success' | 'error' | null; message: string }>({ type: null, message: '' })

  const isValidEmail = (value: string) => /[^\s@]+@[^\s@]+\.[^\s@]+/.test(value)
  const isDisabled =
    submitting ||
    !formData.name.trim() ||
    !isValidEmail(formData.email) ||
    formData.message.trim().length < 5

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setNotice({ type: null, message: '' })
    if (!isValidEmail(formData.email)) {
      setNotice({ type: 'error', message: 'Please enter a valid email address.' })
      return
    }
    if (formData.message.trim().length < 5) {
      setNotice({ type: 'error', message: 'Please provide a bit more detail in your message.' })
      return
    }
    setSubmitting(true)
    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      })
      if (!res.ok) throw new Error('Failed')
      setNotice({ type: 'success', message: 'Your message has been sent. We will contact you shortly.' })
      setFormData({ name: '', email: '', message: '' })
    } catch (err) {
      setNotice({ type: 'error', message: 'Sorry, something went wrong. Please try again later.' })
    } finally {
      setSubmitting(false)
    }
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value })
  }

  return (
    <div className="max-w-md mx-auto">
      <div className="card-minimal">
        {notice.type && (
          <div
            role="status"
            aria-live="polite"
            className={`mb-3 rounded-lg px-3 py-2 text-sm ${
              notice.type === 'success'
                ? 'bg-green-600 text-white border border-green-500 shadow-md'
                : 'bg-red-600 text-white border border-red-500 shadow-md'
            }`}
          >
            {notice.message}
          </div>
        )}
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label htmlFor="name" className="block text-primary font-semibold mb-1 text-sm">Name</label>
            <input
              type="text"
              id="name"
              name="name"
              className="w-full p-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-accent focus:border-transparent transition-all duration-300 text-sm text-gray-900 bg-white"
              value={formData.name}
              onChange={handleChange}
              required
            />
          </div>
          
          <div>
            <label htmlFor="email" className="block text-primary font-semibold mb-1 text-sm">Email</label>
            <input
              type="email"
              id="email"
              name="email"
              className="w-full p-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-accent focus:border-transparent transition-all duration-300 text-sm text-gray-900 bg-white"
              value={formData.email}
              onChange={handleChange}
              required
            />
          </div>
          
          <div>
            <label htmlFor="message" className="block text-primary font-semibold mb-1 text-sm">Message</label>
            <textarea
              id="message"
              name="message"
              rows={3}
              className="w-full p-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-accent focus:border-transparent resize-none transition-all duration-300 text-sm text-gray-900 bg-white"
              value={formData.message}
              onChange={handleChange}
              required
            />
          </div>
          
          <button 
            type="submit" 
            className={`btn-primary w-full py-2 text-sm ${isDisabled ? 'opacity-60 cursor-not-allowed' : ''}`}
            disabled={isDisabled}
          >
            {submitting ? 'Sending…' : 'Send Message'}
          </button>
        </form>
      </div>
    </div>
  )
}
