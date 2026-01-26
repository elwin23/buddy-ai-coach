'use client'

import { useState } from 'react'
import { chatApi, ChatMessage } from '@/lib/api/chat'
import { useMutation } from '@tanstack/react-query'
import BuddyAvatar from '../BuddyAvatar'

export default function ChatInterface() {
  const [message, setMessage] = useState('')
  const [messages, setMessages] = useState<Array<{
    role: 'user' | 'assistant'
    content: string
    sources?: any[]
    privacyNote?: string
  }>>([])

  const chatMutation = useMutation({
    mutationFn: (data: ChatMessage) => chatApi.sendMessage(data),
    onSuccess: (response) => {
      setMessages((prev) => [
        ...prev,
        {
          role: 'assistant',
          content: response.answer,
          sources: response.sources,
          privacyNote: response.privacy_note,
        },
      ])
      setMessage('')
    },
    onError: (error: any) => {
      console.error('Chat error:', error)
      setMessages((prev) => [
        ...prev,
        {
          role: 'assistant',
          content: `Sorry, er is een fout opgetreden: ${error.message || 'Onbekende fout'}`,
        },
      ])
    },
  })

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    if (!message.trim()) return

    setMessages((prev) => [...prev, { role: 'user', content: message }])
    chatMutation.mutate({ message, use_rag: true })
  }

  return (
    <div className="bg-white rounded-lg shadow-lg h-[600px] flex flex-col">
      <div className="p-4 border-b">
        <div className="flex items-center gap-3">
          <BuddyAvatar size="md" />
          <div>
            <h2 className="text-lg font-semibold">Hey, ik ben Buddy.</h2>
            <p className="text-sm font-medium text-gray-800 mt-1">
              Vraag me alles, het is vertrouwlijk.
            </p>
            <p className="text-xs text-gray-600 mt-1">
              Geen persoonsgegevens worden gebruikt.
            </p>
          </div>
        </div>
      </div>

      <div className="flex-1 overflow-y-auto p-4 space-y-4">
        {messages.length === 0 && (
          <div className="text-center text-gray-500 py-8">
            <p className="text-lg font-medium text-gray-700 mb-2">
              Vraag me alles, het is vertrouwlijk.
            </p>
            <p className="text-sm text-gray-600">Stel een vraag over coaching technieken of methodieken.</p>
            <p className="text-xs mt-2 text-gray-500">🔒 Alle queries zijn privacy-veilig</p>
            <a 
              href="/privacy" 
              className="text-xs text-blue-600 hover:text-blue-800 underline mt-4 inline-block"
            >
              Lees meer over privacy →
            </a>
          </div>
        )}

        {messages.map((msg, idx) => (
          <div
            key={idx}
            className={`flex items-start gap-3 ${msg.role === 'user' ? 'justify-end' : 'justify-start'}`}
          >
            {msg.role === 'assistant' && (
              <BuddyAvatar size="sm" className="mt-1" />
            )}
            <div
              className={`max-w-3xl rounded-lg p-4 ${
                msg.role === 'user'
                  ? 'bg-blue-600 text-white'
                  : 'bg-gray-100 text-gray-900'
              }`}
            >
              {msg.role === 'assistant' && (
                <p className="text-xs font-semibold text-gray-600 mb-2">Buddy</p>
              )}
              <p className="whitespace-pre-wrap">{msg.content}</p>
              {msg.sources && msg.sources.length > 0 && (
                <div className="mt-3 pt-3 border-t border-gray-300">
                  <p className="text-xs font-semibold mb-2">Bronnen:</p>
                  <ul className="text-xs space-y-1">
                    {msg.sources.map((source, i) => (
                      <li key={i}>• {source.title} ({source.type})</li>
                    ))}
                  </ul>
                </div>
              )}
              {msg.privacyNote && (
                <div className="mt-2 text-xs opacity-75">
                  ℹ️ {msg.privacyNote}
                </div>
              )}
            </div>
          </div>
        ))}

        {chatMutation.isPending && (
          <div className="flex items-start gap-3 justify-start">
            <BuddyAvatar size="sm" className="mt-1" />
            <div className="bg-gray-100 rounded-lg p-4">
              <p className="text-gray-600">Buddy denkt na...</p>
            </div>
          </div>
        )}
      </div>

      <form onSubmit={handleSubmit} className="p-4 border-t">
        <div className="flex gap-2">
          <input
            type="text"
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            placeholder="Vraag iets over coaching technieken..."
            className="flex-1 px-4 py-2 bg-white text-gray-900 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            disabled={chatMutation.isPending}
          />
          <button
            type="submit"
            disabled={chatMutation.isPending || !message.trim()}
            className="px-6 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 disabled:opacity-50"
          >
            Versturen
          </button>
        </div>
        <p className="text-xs text-gray-500 mt-2">
          🔒 Je berichten worden gecontroleerd op persoonsgegevens en geanonimiseerd indien nodig
        </p>
      </form>
    </div>
  )
}








