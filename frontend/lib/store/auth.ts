import { create } from 'zustand'
import { authApi } from '@/lib/api/auth'

interface AuthState {
  isAuthenticated: boolean
  user: any | null
  login: (email: string, password: string) => Promise<void>
  register: (email: string, password: string, fullName?: string) => Promise<void>
  logout: () => void
  checkAuth: () => void
}

export const useAuthStore = create<AuthState>((set) => ({
  isAuthenticated: false,
  user: null,

  login: async (email: string, password: string) => {
    const response = await authApi.login({ email, password })
    localStorage.setItem('access_token', response.access_token)
    const user = await authApi.getMe()
    set({ isAuthenticated: true, user })
  },

  register: async (email: string, password: string, fullName?: string) => {
    const response = await authApi.register({ email, password, full_name: fullName })
    localStorage.setItem('access_token', response.access_token)
    const user = await authApi.getMe()
    set({ isAuthenticated: true, user })
  },

  logout: () => {
    localStorage.removeItem('access_token')
    set({ isAuthenticated: false, user: null })
  },

  checkAuth: () => {
    const token = localStorage.getItem('access_token')
    if (token) {
      authApi.getMe()
        .then((user) => set({ isAuthenticated: true, user }))
        .catch(() => {
          localStorage.removeItem('access_token')
          set({ isAuthenticated: false, user: null })
        })
    } else {
      set({ isAuthenticated: false, user: null })
    }
  },
}))








