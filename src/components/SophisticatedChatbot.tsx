'use client'

import { useState, useRef, useEffect } from 'react'
import { MessageCircle, X, Send, Bot, User, Phone, Mail, ExternalLink } from 'lucide-react'

interface Message {
  id: string
  text: string
  sender: 'user' | 'bot'
  timestamp: Date
  type?: 'text' | 'quick_reply' | 'service_card' | 'contact_info'
  quickReplies?: string[]
  serviceInfo?: {
    title: string
    description: string
    features: string[]
  }
}

export default function SophisticatedChatbot() {
  const [isOpen, setIsOpen] = useState(false)
  const [messages, setMessages] = useState<Message[]>([
    {
      id: '1',
      text: "Hello! I'm your AI assistant at Require Technologies. I can help you learn about our services, get project quotes, or connect you with our team. How can I assist you today?",
      sender: 'bot',
      timestamp: new Date(),
      quickReplies: [
        "Tell me about your services",
        "I need a project quote",
        "Contact information",
        "Portfolio examples"
      ]
    }
  ])
  const [inputText, setInputText] = useState('')
  const [isTyping, setIsTyping] = useState(false)
  const messagesEndRef = useRef<HTMLDivElement>(null)

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' })
  }

  useEffect(() => {
    scrollToBottom()
  }, [messages])

  const handleQuickReply = (reply: string) => {
    setInputText(reply)
    handleSendMessage(reply)
  }

  const handleSendMessage = async (text?: string) => {
    const messageText = text || inputText.trim()
    if (!messageText) return

    const userMessage: Message = {
      id: Date.now().toString(),
      text: messageText,
      sender: 'user',
      timestamp: new Date()
    }

    setMessages(prev => [...prev, userMessage])
    setInputText('')
    setIsTyping(true)

    // Simulate AI response delay
    setTimeout(() => {
      const botResponse = generateBotResponse(messageText)
      setMessages(prev => [...prev, botResponse])
      setIsTyping(false)
    }, 1500)
  }

  const generateBotResponse = (userMessage: string): Message => {
    const lowerMessage = userMessage.toLowerCase()

    // 1. SERVICES Intent
    if (lowerMessage.includes('service') || lowerMessage.includes('what do you do') || lowerMessage.includes('offerings')) {
      return {
        id: Date.now().toString(),
        text: "We provide full-spectrum Digital Transformation solutions across four core areas:",
        sender: 'bot',
        timestamp: new Date(),
        type: 'service_card',
        serviceInfo: {
          title: "Require Technologies' Core Capabilities",
          description: "From strategy to deployment, we build secure and scalable digital futures.",
          features: [
            "🤖 Specialized AI & Conversational Platforms (Banking Focus)",
            "💻 Custom Software, Web & Mobile Development",
            "🔒 Cybersecurity & Cloud Infrastructure",
            "📊 Data Analytics, BI & Strategic Insights"
          ]
        }
      }
    }

    // 2. CONTACT Intent (Returns the new type)
    if (lowerMessage.includes('contact') || lowerMessage.includes('phone') || lowerMessage.includes('email') || lowerMessage.includes('human')) {
      return {
        id: Date.now().toString(),
        text: "Here are the best ways to reach our team for immediate assistance or strategic inquiries:",
        sender: 'bot',
        timestamp: new Date(),
        type: 'contact_info'
      }
    }

    // 3. QUOTE/PRICE Intent
    if (lowerMessage.includes('quote') || lowerMessage.includes('price') || lowerMessage.includes('cost') || lowerMessage.includes('how much')) {
      return {
        id: Date.now().toString(),
        text: "To give you an accurate estimate, please specify the type of solution you're interested in:",
        sender: 'bot',
        timestamp: new Date(),
        quickReplies: [
          "AI/Chatbot Project Quote",
          "Custom Software Development Quote",
          "Cybersecurity Audit/Service Quote",
          "Speak with a Business Analyst"
        ]
      }
    }

    // 4. PORTFOLIO Intent
    if (lowerMessage.includes('portfolio') || lowerMessage.includes('examples') || lowerMessage.includes('work') || lowerMessage.includes('case studies')) {
      return {
        id: Date.now().toString(),
        text: "We specialize in high-impact projects. You can explore our successes here:",
        sender: 'bot',
        timestamp: new Date(),
        quickReplies: [
          "Banking AI Case Studies",
          "E-commerce Platform Success Story",
          "Fintech App Portfolio",
          "Go back to services"
        ]
      }
    }
    
    // 5. DEFAULT/FALLBACK Response
    return {
      id: Date.now().toString(),
      text: "I'm a highly efficient AI, but I work best with clear intentions! Could you phrase your request differently, or select from the options below?",
      sender: 'bot',
      timestamp: new Date(),
      quickReplies: [
        "Tell me about your services",
        "I need a project quote",
        "Contact information",
        "Portfolio examples"
      ]
    }
  }

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault()
      handleSendMessage()
    }
  }

  return (
    <>
      {/* Chat Button */}
      <button
        onClick={() => setIsOpen(true)}
        className="fixed bottom-6 right-6 bg-gradient-to-r from-primary to-accent text-white p-4 rounded-full shadow-2xl hover:shadow-primary/25 transition-all duration-300 hover:scale-110 z-50 group"
        aria-label="Open AI Chat Assistant"
      >
        <MessageCircle className="w-6 h-6 group-hover:rotate-12 transition-transform duration-300" />
        
        {/* Pulse animation */}
        <div className="absolute inset-0 rounded-full bg-primary animate-ping opacity-20"></div>
        
        {/* Tooltip */}
        <div className="absolute right-full mr-3 top-1/2 -translate-y-1/2 bg-gray-900 text-white text-sm px-3 py-2 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300 whitespace-nowrap">
          Chat with our AI Assistant!
          <div className="absolute left-full top-1/2 -translate-y-1/2 border-4 border-transparent border-l-gray-900"></div>
        </div>
      </button>

      {/* Chat Modal */}
      {isOpen && (
        <div className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 flex items-center justify-center p-4">
          <div className="bg-white rounded-2xl shadow-2xl w-full max-w-sm h-[500px] sm:h-[550px] flex flex-col overflow-hidden">
            {/* Header */}
            <div className="bg-gradient-to-r from-primary to-accent text-white p-3 flex items-center justify-between">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 bg-white/20 rounded-full flex items-center justify-center">
                  <Bot className="w-6 h-6" />
                </div>
                <div>
                  <h3 className="font-bold">AI Assistant</h3>
                  <p className="text-sm text-white/80">Require Technologies</p>
                </div>
              </div>
              <button
                onClick={() => setIsOpen(false)}
                className="text-white/80 hover:text-white transition-colors"
              >
                <X className="w-6 h-6" />
              </button>
            </div>

            {/* Messages */}
            <div className="flex-1 overflow-y-auto p-3 space-y-3">
              {messages.map((message) => (
                <div
                  key={message.id}
                  className={`flex ${message.sender === 'user' ? 'justify-end' : 'justify-start'}`}
                >
                  <div className={`flex gap-2 max-w-[80%] ${message.sender === 'user' ? 'flex-row-reverse' : 'flex-row'}`}>
                    <div className={`w-6 h-6 rounded-full flex items-center justify-center ${
                      message.sender === 'user' 
                        ? 'bg-primary text-white' 
                        : 'bg-gray-100 text-gray-600'
                    }`}>
                      {message.sender === 'user' ? <User className="w-3 h-3" /> : <Bot className="w-3 h-3" />}
                    </div>
                    
                    <div className={`rounded-2xl px-3 py-2 ${
                      message.sender === 'user'
                        ? 'bg-primary text-white'
                        : 'bg-gray-100 text-gray-800'
                    }`}>
                      <p className="text-sm">{message.text}</p>
                      
                      {/* Service Card */}
                      {message.type === 'service_card' && message.serviceInfo && (
                        <div className="mt-3 p-3 bg-white/10 rounded-lg">
                          <h4 className="font-semibold text-sm mb-2">{message.serviceInfo.title}</h4>
                          <p className="text-xs text-white/80 mb-2">{message.serviceInfo.description}</p>
                          <ul className="space-y-1">
                            {message.serviceInfo.features.map((feature, index) => (
                              <li key={index} className="text-xs text-white/90">{feature}</li>
                            ))}
                          </ul>
                        </div>
                      )}
                      
                      {/* Contact Info Card (New Perfect Response) */}
                      {message.type === 'contact_info' && (
                        <div className="mt-3 p-3 bg-primary/10 rounded-lg text-gray-800">
                          <h4 className="font-semibold text-sm mb-2">Connect Directly</h4>
                          <div className="space-y-2 text-xs">
                            <a href="tel:+2347063716221" className="flex items-center gap-2 hover:underline">
                              <Phone className="w-3 h-3 text-primary" />
                              <span>+234 706 371 6221 (Phone/WhatsApp)</span>
                            </a>
                            <a href="mailto:info@requiretechnologies.com" className="flex items-center gap-2 hover:underline">
                              <Mail className="w-3 h-3 text-primary" />
                              <span>info@requiretechnologies.com</span>
                            </a>
                            <a href="/contact" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 hover:underline">
                              <ExternalLink className="w-3 h-3 text-primary" />
                              <span>Request a Call Back (Form)</span>
                            </a>
                          </div>
                        </div>
                      )}
                      
                      {/* Quick Replies */}
                      {message.quickReplies && (
                        <div className="mt-3 flex flex-wrap gap-2">
                          {message.quickReplies.map((reply, index) => (
                            <button
                              key={index}
                              onClick={() => handleQuickReply(reply)}
                              className="text-xs bg-white/20 hover:bg-white/30 px-2 py-1 rounded-full transition-colors"
                            >
                              {reply}
                            </button>
                          ))}
                        </div>
                      )}
                    </div>
                  </div>
                </div>
              ))}
              
              {/* Typing Indicator */}
              {isTyping && (
                <div className="flex justify-start">
                  <div className="flex gap-2">
                    <div className="w-8 h-8 rounded-full bg-gray-100 flex items-center justify-center">
                      <Bot className="w-4 h-4 text-gray-600" />
                    </div>
                    <div className="bg-gray-100 rounded-2xl px-4 py-3">
                      <div className="flex gap-1">
                        <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce"></div>
                        <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce" style={{ animationDelay: '0.1s' }}></div>
                        <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce" style={{ animationDelay: '0.2s' }}></div>
                      </div>
                    </div>
                  </div>
                </div>
              )}
              
              <div ref={messagesEndRef} />
            </div>

            {/* Input */}
            <div className="p-3 border-t">
              <div className="flex gap-2">
                <input
                  type="text"
                  value={inputText}
                  onChange={(e) => setInputText(e.target.value)}
                  onKeyPress={handleKeyPress}
                  placeholder="Type your message..."
                  className="flex-1 px-4 py-2 border border-gray-300 rounded-full focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
                />
                <button
                  onClick={() => handleSendMessage()}
                  disabled={!inputText.trim()}
                  className="bg-primary text-white p-2 rounded-full hover:bg-primary/90 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  <Send className="w-4 h-4" />
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  )
}
