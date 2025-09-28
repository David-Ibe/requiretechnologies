'use client'

import { useState, useRef, useEffect } from 'react'
import { MessageCircle, X, Send, Bot, User, Phone, Mail, ExternalLink, RotateCcw } from 'lucide-react'

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
      text: "Welcome to Require Technologies! I'm here to help you automate customer service, boost sales, or secure your infrastructure. To get started, what is your priority today?",
      sender: 'bot',
      timestamp: new Date(),
      quickReplies: [
        "Show Me Your Banking AI Success (85% Automation)",
        "I Need a Quote",
        "What Services Do You Offer?",
        "I Need to Speak with a Human"
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

  const clearChat = () => {
    setMessages([
      {
        id: '1',
        text: "Welcome to Require Technologies! I'm here to help you automate customer service, boost sales, or secure your infrastructure. To get started, what is your priority today?",
        sender: 'bot',
        timestamp: new Date(),
        quickReplies: [
          "Show Me Your Banking AI Success (85% Automation)",
          "I Need a Quote",
          "What Services Do You Offer?",
          "I Need to Speak with a Human"
        ]
      }
    ])
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

    // 0. GREETING Intent
    if (lowerMessage.includes('hello') || lowerMessage.includes('hi') || lowerMessage.includes('hey') || lowerMessage.includes('good morning') || lowerMessage.includes('good afternoon') || lowerMessage.includes('good evening')) {
      return {
        id: Date.now().toString(),
        text: "Hello! Welcome to Require Technologies. I'm your AI assistant here to help you discover our digital transformation solutions. How can I assist you today?",
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

    // 1. SERVICES Intent (Proactive Follow-up)
    if (lowerMessage.includes('service') || lowerMessage.includes('what do you do') || lowerMessage.includes('offerings')) {
      return {
        id: Date.now().toString(),
        text: "We are a full-spectrum Digital Transformation partner. Our expertise spans four critical areas designed for enterprise scale:",
        sender: 'bot',
        timestamp: new Date(),
        type: 'service_card',
        serviceInfo: {
          title: "Require Technologies: Core Capabilities",
          description: "Full-spectrum Digital Transformation. We architect secure, scalable, and intelligent platforms for your enterprise.",
          features: [
            "🤖 AI & Conversational Platforms: Enterprise-grade solutions for banks (85%+ automation)",
            "💻 Custom Software: End-to-end Web, Mobile (iOS/Android), and System Development",
            "🔒 Cybersecurity & Cloud: Advanced security, infrastructure management, and CBN/NDPR compliance",
            "📊 Data & Insights: BI Dashboards, Predictive Analytics, and Data-Driven Strategy"
          ]
        },
        quickReplies: [
          "AI & Conversational Platforms",
          "Custom Software Development", 
          "Cybersecurity & Cloud",
          "Data & Analytics"
        ]
      }
    }

    // 2. CONTACT Intent (Efficient Handover)
    if (lowerMessage.includes('contact') || lowerMessage.includes('phone') || lowerMessage.includes('email') || lowerMessage.includes('human')) {
      return {
        id: Date.now().toString(),
        text: "I understand, sometimes you need to speak to a specialist! You can connect with us instantly, or use our form for a prioritized callback.",
        sender: 'bot',
        timestamp: new Date(),
        type: 'contact_info',
        quickReplies: [
          "Schedule a 15-Min Meeting",
          "Get a Callback", 
          "WhatsApp Direct"
        ]
      }
    }

    // 3. QUOTE/PRICE Intent (Lead Qualification Funnel)
    if (lowerMessage.includes('quote') || lowerMessage.includes('price') || lowerMessage.includes('cost') || lowerMessage.includes('how much')) {
      return {
        id: Date.now().toString(),
        text: "I can get you an estimated cost and timeline, but first, let's nail down the scope. Please select the primary focus of your project:",
        sender: 'bot',
        timestamp: new Date(),
        quickReplies: [
          "AI/Chatbot Implementation",
          "Large-Scale Software Development", 
          "Cybersecurity Audit",
          "Schedule a FREE Consultation"
        ]
      }
    }

    // 4. PORTFOLIO Intent (Industry Relevance)
    if (lowerMessage.includes('portfolio') || lowerMessage.includes('examples') || lowerMessage.includes('work') || lowerMessage.includes('case studies')) {
      return {
        id: Date.now().toString(),
        text: "We specialize in delivering measurable results across high-impact sectors. Which area is most relevant to your current challenge?",
        sender: 'bot',
        timestamp: new Date(),
        quickReplies: [
          "Banking AI: 85% Automation Case Study",
          "E-commerce: 300% Sales Growth Platform", 
          "Fintech App: 50K+ User Success Story",
          "View Full Portfolio Page"
        ]
      }
    }

    // 4.5. FOLLOW-UP Intent
    if (lowerMessage.includes('more') || lowerMessage.includes('details') || lowerMessage.includes('tell me more') || lowerMessage.includes('explain')) {
      return {
        id: Date.now().toString(),
        text: "Great! To help you further, could you tell me: What's your company size? (Startup, SME, Enterprise) What's your main challenge? (Customer service, efficiency, security, growth) This helps me connect you with the right specialist on our team.",
        sender: 'bot',
        timestamp: new Date(),
        quickReplies: [
          "We're a startup (1-10 employees)",
          "We're an SME (10-100 employees)", 
          "We're an enterprise (100+ employees)",
          "Speak with a Business Analyst"
        ]
      }
    }
    
    // 5. DEFAULT/FALLBACK Response (Re-engagement)
    return {
      id: Date.now().toString(),
      text: "Welcome to Require Tech! I'm here to help you automate customer service, boost sales, or secure your infrastructure. To get started, what is your priority today?",
      sender: 'bot',
      timestamp: new Date(),
      quickReplies: [
        "Show Me Your Banking AI Success (85% Automation)",
        "I Need a Quote",
        "What Services Do You Offer?",
        "I Need to Speak with a Human"
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
        <div className="fixed inset-0 bg-black/60 backdrop-blur-md z-50 flex items-center justify-center p-4">
          <div className="bg-gray-900 rounded-2xl shadow-2xl w-full max-w-sm h-[500px] sm:h-[550px] flex flex-col overflow-hidden border border-gray-700">
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
              <div className="flex items-center gap-2">
                <button
                  onClick={clearChat}
                  className="text-white/80 hover:text-white transition-colors p-1 rounded-lg hover:bg-white/10"
                  title="Clear Chat"
                >
                  <RotateCcw className="w-5 h-5" />
                </button>
                <button
                  onClick={() => setIsOpen(false)}
                  className="text-white/80 hover:text-white transition-colors p-1 rounded-lg hover:bg-white/10"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>
            </div>

            {/* Messages */}
            <div className="flex-1 overflow-y-auto p-4 space-y-4 bg-gray-800/50">
              {messages.map((message) => (
                <div
                  key={message.id}
                  className={`flex ${message.sender === 'user' ? 'justify-end' : 'justify-start'}`}
                >
                  <div className={`flex gap-2 max-w-[80%] ${message.sender === 'user' ? 'flex-row-reverse' : 'flex-row'}`}>
                    <div className={`w-6 h-6 rounded-full flex items-center justify-center ${
                      message.sender === 'user' 
                        ? 'bg-primary text-white' 
                        : 'bg-accent text-white'
                    }`}>
                      {message.sender === 'user' ? <User className="w-3 h-3" /> : <Bot className="w-3 h-3" />}
                    </div>
                    
                    <div className={`rounded-2xl px-4 py-3 ${
                      message.sender === 'user'
                        ? 'bg-primary text-white shadow-lg'
                        : 'bg-gray-800 text-white border border-gray-600 shadow-lg'
                    }`}>
                      <p className="text-sm">{message.text}</p>
                      
                      {/* Service Card */}
                      {message.type === 'service_card' && message.serviceInfo && (
                        <div className="mt-3 p-4 bg-gradient-to-br from-primary/10 to-accent/10 rounded-lg border border-primary/20 shadow-lg">
                          <h4 className="font-bold text-sm mb-2 text-accent">{message.serviceInfo.title}</h4>
                          <p className="text-xs text-white/80 mb-3">{message.serviceInfo.description}</p>
                          <ul className="space-y-2">
                            {message.serviceInfo.features.map((feature, index) => (
                              <li key={index} className="text-xs text-white font-medium flex items-center gap-2">
                                <div className="w-1 h-1 bg-accent rounded-full"></div>
                                {feature}
                              </li>
                            ))}
                          </ul>
                        </div>
                      )}
                      
                      {/* Contact Info Card (New Perfect Response) */}
                      {message.type === 'contact_info' && (
                        <div className="mt-3 p-4 bg-gradient-to-br from-accent/10 to-primary/10 rounded-lg border border-accent/20 shadow-lg">
                          <h4 className="font-bold text-sm mb-3 text-accent">Connect Directly</h4>
                          <div className="space-y-3 text-xs">
                            <a href="tel:+2347063716221" className="flex items-center gap-3 hover:text-accent transition-colors text-white bg-gray-700/50 p-2 rounded-lg">
                              <Phone className="w-4 h-4 text-accent" />
                              <span className="font-medium">+234 706 371 6221</span>
                            </a>
                            <a href="mailto:info@requiretechnologies.com" className="flex items-center gap-3 hover:text-accent transition-colors text-white bg-gray-700/50 p-2 rounded-lg">
                              <Mail className="w-4 h-4 text-accent" />
                              <span className="font-medium">info@requiretechnologies.com</span>
                            </a>
                            <a href="/contact" target="_blank" rel="noopener noreferrer" className="flex items-center gap-3 hover:text-accent transition-colors text-white bg-gray-700/50 p-2 rounded-lg">
                              <ExternalLink className="w-4 h-4 text-accent" />
                              <span className="font-medium">Contact Form</span>
                            </a>
                          </div>
                        </div>
                      )}
                      
                      {/* Quick Replies */}
                      {message.quickReplies && (
                        <div className="mt-4 flex flex-wrap gap-2">
                          {message.quickReplies.map((reply, index) => (
                            <button
                              key={index}
                              onClick={() => handleQuickReply(reply)}
                              className="text-xs bg-gradient-to-r from-primary/20 to-accent/20 hover:from-primary/30 hover:to-accent/30 text-accent border border-accent/30 hover:border-accent/50 px-3 py-2 rounded-full transition-all duration-200 font-medium shadow-sm hover:shadow-md"
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
                    <div className="w-6 h-6 rounded-full bg-gray-900 flex items-center justify-center border border-gray-700">
                      <Bot className="w-3 h-3 text-white" />
                    </div>
                    <div className="bg-gray-900 border border-gray-700 rounded-2xl px-3 py-2">
                      <div className="flex gap-1">
                        <div className="w-2 h-2 bg-primary rounded-full animate-bounce"></div>
                        <div className="w-2 h-2 bg-primary rounded-full animate-bounce" style={{ animationDelay: '0.1s' }}></div>
                        <div className="w-2 h-2 bg-primary rounded-full animate-bounce" style={{ animationDelay: '0.2s' }}></div>
                      </div>
                    </div>
                  </div>
                </div>
              )}
              
              <div ref={messagesEndRef} />
            </div>

            {/* Input */}
            <div className="p-4 border-t border-gray-600 bg-gray-800/30">
              <div className="flex gap-3">
                <input
                  type="text"
                  value={inputText}
                  onChange={(e) => setInputText(e.target.value)}
                  onKeyPress={handleKeyPress}
                  placeholder="Type your message..."
                  className="flex-1 px-4 py-3 bg-gray-800 border border-gray-600 rounded-full text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-accent focus:border-accent transition-all shadow-inner"
                />
                <button
                  onClick={() => handleSendMessage()}
                  disabled={!inputText.trim()}
                  className="bg-gradient-to-r from-primary to-accent text-white p-3 rounded-full hover:from-primary/90 hover:to-accent/90 transition-all duration-200 disabled:opacity-50 disabled:cursor-not-allowed hover:scale-105 shadow-lg"
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
