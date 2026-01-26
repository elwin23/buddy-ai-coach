import axios from 'axios'

const API_URL = process.env.NEXT_PUBLIC_API_URL || 'http://localhost:8000'

export const apiClient = axios.create({
  baseURL: API_URL,
  headers: {
    'Content-Type': 'application/json',
  },
})

// Add auth token to requests
apiClient.interceptors.request.use((config) => {
  const token = localStorage.getItem('access_token')
  if (token) {
    config.headers.Authorization = `Bearer ${token}`
  }
  return config
})

// Handle errors
apiClient.interceptors.response.use(
  (response) => response,
  (error) => {
    // Network errors (no response)
    if (!error.response) {
      console.error('Network Error:', error.message)
      console.error('API URL:', API_URL)
      // Check if backend is reachable
      fetch(`${API_URL}/health`)
        .then(res => res.json())
        .then(data => console.log('Backend health:', data))
        .catch(err => console.error('Backend unreachable:', err))
      throw new Error('Kan niet verbinden met server. Controleer of de backend draait op http://localhost:8000')
    }
    
    // Auth errors
    if (error.response?.status === 401) {
      localStorage.removeItem('access_token')
      window.location.href = '/'
    }
    
    return Promise.reject(error)
  }
)








