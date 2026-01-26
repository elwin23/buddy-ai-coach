'use client'

import { useAuthStore } from '@/lib/store/auth'
import { useEffect } from 'react'
import { useRouter } from 'next/navigation'
import LoginForm from '@/components/auth/LoginForm'
import Dashboard from '@/components/dashboard/Dashboard'
import BuddyAvatar from '@/components/BuddyAvatar'

export default function Home() {
  const { isAuthenticated, checkAuth, user } = useAuthStore()
  const router = useRouter()

  useEffect(() => {
    checkAuth()
  }, [checkAuth])

  // Re-check auth when user changes
  useEffect(() => {
    if (user) {
      // User is authenticated, ensure we show dashboard
    }
  }, [user])

  if (!isAuthenticated) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gray-50">
        <div className="max-w-md w-full space-y-8 p-8">
          <div className="text-center">
            <div className="flex justify-center mb-4">
              <BuddyAvatar size="lg" />
            </div>
            <h1 className="text-3xl font-bold text-gray-900">
              Buddy - AI Coach
            </h1>
            <p className="mt-2 text-sm text-gray-600">
              Privacy-first coaching ondersteuning met Buddy
            </p>
            <div className="mt-4">
              <span className="privacy-badge">
                🔒 Volledig geanonimiseerd
              </span>
            </div>
            <div className="mt-4">
              <a 
                href="/privacy" 
                className="text-sm text-blue-600 hover:text-blue-800 underline"
              >
                Lees meer over privacy →
              </a>
            </div>
          </div>
          <LoginForm />
        </div>
      </div>
    )
  }

  return <Dashboard />
}








