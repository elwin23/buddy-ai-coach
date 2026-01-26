import { apiClient } from './client'

export interface ChatMessage {
  message: string
  case_id?: string
  use_rag?: boolean
}

export interface ChatResponse {
  answer: string
  sources: Array<{
    title: string
    type: string
    chunk: string
  }>
  query: string
  privacy_note: string
}

export const chatApi = {
  sendMessage: async (message: ChatMessage): Promise<ChatResponse> => {
    const response = await apiClient.post<ChatResponse>('/api/chat/', message)
    return response.data
  },
}








