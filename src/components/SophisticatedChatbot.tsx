'use client'

import { useState, useRef, useEffect } from 'react'
import { MessageCircle, X, Send, Bot, User, Phone, Mail, ExternalLink } from 'lucide-react'

interface Message {
  id: string
  text: string
  sender: 'user' | 'bot'
  timestamp: Date
  type?: 'text' | 'quick_reply' | 'service_card'
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
    
    if (lowerMessage.includes('service') || lowerMessage.includes('what do you do')) {
      return {
        id: Date.now().toString(),
        text: "We offer comprehensive digital transformation solutions:",
        sender: 'bot',
        timestamp: new Date(),
        type: 'service_card',
        serviceInfo: {
          title: "Our Core Services",
          description: "Full-spectrum digital transformation solutions",
          features: [
            "🤖 AI Solutions - Conversational AI for banking sector",
            "💻 Custom Software - Web & mobile applications",
            "🔒 Cybersecurity - Enterprise security solutions",
            "📊 Data Analytics - Business intelligence & insights"
          ]
        }
      }
    }
    
    if (lowerMessage.includes('quote') || lowerMessage.includes('price') || lowerMessage.includes('cost')) {
      return {
        id: Date.now().toString(),
        text: "I'd be happy to help you get a project quote! To provide an accurate estimate, I need to understand your requirements better.",
        sender: 'bot',
        timestamp: new Date(),
        quickReplies: [
          "Web Development Project",
          "Mobile App Development",
          "AI/Chatbot Implementation",
          "Cybersecurity Services"
        ]
      }
    }
    
    if (lowerMessage.includes('contact') || lowerMessage.includes('phone') || lowerMessage.includes('email')) {
      return {
        id: Date.now().toString(),
        text: "Here's how you can reach us:",
        sender: 'bot',
        timestamp: new Date(),
        type: 'text'
      }
    }
    
    if (lowerMessage.includes('portfolio') || lowerMessage.includes('examples') || lowerMessage.includes('work')) {
      return {
        id: Date.now().toString(),
        text: "We've successfully delivered projects for leading enterprises across West Africa. Our portfolio includes:",
        sender: 'bot',
        timestamp: new Date(),
        quickReplies: [
          "Banking AI Solutions",
          "E-commerce Platforms",
          "Fintech Applications",
          "Healthcare Systems"
        ]
      }
    }
    
    // Default response
    return {
      id: Date.now().toString(),
      text: "That's interesting! I'd love to help you further. Could you tell me more about your specific needs?",
      sender: 'bot',
      timestamp: new Date(),
      quickReplies: [
        "I need AI solutions",
        "Web development project",
        "Mobile app development",
        "Speak with a human"
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
                      
                      {/* Contact Info */}
                      {message.text.includes("Here's how you can reach us") && (
                        <div className="mt-3 space-y-2">
                          <div className="flex items-center gap-2 text-xs">
                            <Phone className="w-3 h-3" />
                            <span>07063716221</span>
                          </div>
                          <div className="flex items-center gap-2 text-xs">
                            <Mail className="w-3 h-3" />
                            <span>info@requiretechnologies.com</span>
                          </div>
                          <div className="flex items-center gap-2 text-xs">
                            <ExternalLink className="w-3 h-3" />
                            <span>www.requiretechnologies.com</span>
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
