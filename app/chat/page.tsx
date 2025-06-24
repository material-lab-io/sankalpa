'use client'

import { Send, Bot, User, Sparkles } from 'lucide-react'
import { useState } from 'react'

const suggestedQuestions = [
  "What is the significance of Ekadashi?",
  "Best time for temple visits?",
  "How to perform Ganesh pooja at home?",
  "Meaning of different temple bells",
]

const sampleMessages = [
  { type: 'user', content: 'What are the temple timings?' },
  { type: 'bot', content: 'Most temples are open from 6:00 AM to 12:30 PM for morning darshan, and 4:00 PM to 9:00 PM for evening darshan. However, timings may vary by temple. Which specific temple are you interested in?' },
]

export default function ChatPage() {
  const [message, setMessage] = useState('')

  return (
    <div className="flex flex-col h-[calc(100vh-8.5rem)] md:h-[calc(100vh-3.5rem)] animate-fade-in">
      {/* Chat Header */}
      <div className="bg-gradient-to-r from-sankalpa-primary to-sankalpa-secondary px-4 py-4 text-white">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 bg-white/20 rounded-full flex items-center justify-center">
            <Bot size={24} />
          </div>
          <div>
            <h1 className="font-semibold">Temple Guide AI</h1>
            <p className="text-xs text-white/80">Always here to help</p>
          </div>
        </div>
      </div>

      {/* Messages Area */}
      <div className="flex-1 overflow-y-auto bg-gray-50 px-4 py-4">
        {/* Welcome Message */}
        <div className="mb-6 text-center">
          <Sparkles className="w-12 h-12 text-sankalpa-primary mx-auto mb-3" />
          <h2 className="text-lg font-semibold text-gray-900 mb-2">
            Ask me anything about temples!
          </h2>
          <p className="text-sm text-gray-600">
            I can help with rituals, timings, history, and spiritual guidance
          </p>
        </div>

        {/* Suggested Questions */}
        <div className="mb-6">
          <p className="text-xs text-gray-500 mb-2 font-medium">SUGGESTED QUESTIONS</p>
          <div className="space-y-2">
            {suggestedQuestions.map((question) => (
              <button
                key={question}
                className="w-full text-left px-3 py-2 bg-white rounded-lg text-sm text-gray-700 hover:bg-gray-50 transition-colors card-shadow"
                onClick={() => setMessage(question)}
              >
                {question}
              </button>
            ))}
          </div>
        </div>

        {/* Sample Chat */}
        <div className="space-y-4">
          {sampleMessages.map((msg, index) => (
            <div
              key={index}
              className={`flex gap-3 ${msg.type === 'user' ? 'justify-end' : ''}`}
            >
              {msg.type === 'bot' && (
                <div className="w-8 h-8 bg-sankalpa-primary/10 rounded-full flex items-center justify-center flex-shrink-0">
                  <Bot size={16} className="text-sankalpa-primary" />
                </div>
              )}
              <div
                className={`max-w-[80%] px-4 py-3 rounded-2xl ${
                  msg.type === 'user'
                    ? 'bg-sankalpa-primary text-white'
                    : 'bg-white card-shadow'
                }`}
              >
                <p className="text-sm">{msg.content}</p>
              </div>
              {msg.type === 'user' && (
                <div className="w-8 h-8 bg-gray-200 rounded-full flex items-center justify-center flex-shrink-0">
                  <User size={16} className="text-gray-600" />
                </div>
              )}
            </div>
          ))}
        </div>
      </div>

      {/* Input Area */}
      <div className="bg-white border-t border-gray-100 px-4 py-3">
        <div className="flex gap-2">
          <input
            type="text"
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            placeholder="Type your question..."
            className="flex-1 px-4 py-2.5 bg-gray-50 rounded-full text-sm placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-sankalpa-primary/20 focus:bg-white transition-all"
          />
          <button
            className={`p-2.5 rounded-full transition-all ${
              message
                ? 'bg-sankalpa-primary text-white hover:bg-sankalpa-secondary'
                : 'bg-gray-100 text-gray-400'
            }`}
            disabled={!message}
          >
            <Send size={20} />
          </button>
        </div>
        <p className="text-xs text-gray-500 mt-2 text-center">
          AI responses are for guidance only
        </p>
      </div>
    </div>
  )
}