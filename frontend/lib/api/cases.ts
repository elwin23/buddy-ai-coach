import { apiClient } from './client'

export interface Case {
  id: string
  client_pseudonym: string
  status: string
  tags: string[]
  goals: string[]
  notes: string | null
  is_anonymized: boolean
  created_at: string
  updated_at: string | null
}

export interface CreateCase {
  client_name: string
  status?: string
  tags?: string[]
  goals?: string[]
  notes?: string
}

export interface Session {
  id: string
  case_id: string
  session_date: string
  duration_minutes: number | null
  anonymized_notes: string | null
  topics_discussed: string[]
  coaching_techniques_used: string[]
  homework_assigned: string | null
  next_steps: string | null
  created_at: string
}

export interface CreateSession {
  session_date: string
  duration_minutes?: number
  notes?: string
  topics_discussed?: string[]
  coaching_techniques_used?: string[]
  homework_assigned?: string
  next_steps?: string
}

export const casesApi = {
  getCases: async (status?: string): Promise<Case[]> => {
    const params = status ? { status_filter: status } : {}
    const response = await apiClient.get<Case[]>('/api/cases', { params })
    return response.data
  },

  getCase: async (id: string): Promise<Case> => {
    const response = await apiClient.get<Case>(`/api/cases/${id}`)
    return response.data
  },

  createCase: async (data: CreateCase): Promise<Case> => {
    const response = await apiClient.post<Case>('/api/cases', data)
    return response.data
  },

  createSession: async (caseId: string, data: CreateSession): Promise<Session> => {
    const response = await apiClient.post<Session>(`/api/cases/${caseId}/sessions`, data)
    return response.data
  },
}








