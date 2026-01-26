'use client'

import { useState } from 'react'
import { useAuthStore } from '@/lib/store/auth'
import CasesList from './CasesList'
import ChatInterface from './ChatInterface'
import MaterialsList from './MaterialsList'
import PrivacyIndicator from './PrivacyIndicator'
import BuddyAvatar from '../BuddyAvatar'

export default function Dashboard() {
  const { user, logout } = useAuthStore()
  const [activeTab, setActiveTab] = useState<'cases' | 'chat' | 'materials'>('cases')

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="bg-white shadow">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <div className="flex justify-between items-center">
            <div className="flex items-center gap-3">
              <BuddyAvatar size="lg" />
              <div>
                <h1 className="text-2xl font-bold text-gray-900">Buddy - AI Coach</h1>
                <p className="text-sm text-gray-600">Welkom, {user?.full_name || user?.email}</p>
              </div>
            </div>
            <div className="flex items-center gap-4">
              <a
                href="/privacy"
                className="text-sm text-gray-600 hover:text-gray-900 underline"
              >
                Privacy
              </a>
              <PrivacyIndicator />
              <button
                onClick={logout}
                className="px-4 py-2 text-sm font-medium text-gray-700 bg-white border border-gray-300 rounded-md hover:bg-gray-50"
              >
                Uitloggen
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* Navigation */}
      <nav className="bg-white border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex space-x-8">
            <button
              onClick={() => setActiveTab('cases')}
              className={`py-4 px-1 border-b-2 font-medium text-sm ${
                activeTab === 'cases'
                  ? 'border-primary-500 text-primary-600'
                  : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'
              }`}
            >
              Casussen
            </button>
            <button
              onClick={() => setActiveTab('chat')}
              className={`py-4 px-1 border-b-2 font-medium text-sm ${
                activeTab === 'chat'
                  ? 'border-primary-500 text-primary-600'
                  : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'
              }`}
            >
              Chat met Buddy
            </button>
            <button
              onClick={() => setActiveTab('materials')}
              className={`py-4 px-1 border-b-2 font-medium text-sm ${
                activeTab === 'materials'
                  ? 'border-primary-500 text-primary-600'
                  : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'
              }`}
            >
              Materiaal
            </button>
          </div>
        </div>
      </nav>

      {/* Content */}
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {activeTab === 'cases' && <CasesList />}
        {activeTab === 'chat' && <ChatInterface />}
        {activeTab === 'materials' && <MaterialsList />}
      </main>
    </div>
  )
}




