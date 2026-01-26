'use client'

import { useState } from 'react'
import { useQuery, useMutation, useQueryClient } from '@tanstack/react-query'
import { apiClient } from '@/lib/api/client'

interface ConsentData {
  share_cases: boolean
  share_sessions: boolean
  share_materials: boolean
  anonymization_level: string
}

export default function DataSharingConsent() {
  const [showModal, setShowModal] = useState(false)
  const queryClient = useQueryClient()

  const { data: consent, isLoading } = useQuery({
    queryKey: ['data-sharing-consent'],
    queryFn: async () => {
      const response = await apiClient.get('/api/data-sharing/consent')
      return response.data
    },
  })

  const consentMutation = useMutation({
    mutationFn: async (data: ConsentData) => {
      const response = await apiClient.post('/api/data-sharing/consent', data)
      return response.data
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['data-sharing-consent'] })
      setShowModal(false)
    },
  })

  const revokeMutation = useMutation({
    mutationFn: async () => {
      await apiClient.delete('/api/data-sharing/consent')
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['data-sharing-consent'] })
    },
  })

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    const formData = new FormData(e.currentTarget)
    const data: ConsentData = {
      share_cases: formData.get('share_cases') === 'on',
      share_sessions: formData.get('share_sessions') === 'on',
      share_materials: formData.get('share_materials') === 'on',
      anonymization_level: 'full',
    }
    consentMutation.mutate(data)
  }

  if (isLoading) {
    return <div className="text-sm text-gray-600">Laden...</div>
  }

  return (
    <div className="bg-white rounded-lg shadow p-6">
      <div className="flex justify-between items-center mb-4">
        <h3 className="text-lg font-semibold">Data Sharing voor Model Training</h3>
        {!consent?.consent_given && (
          <button
            onClick={() => setShowModal(true)}
            className="px-4 py-2 bg-primary-600 text-white rounded-md hover:bg-primary-700"
          >
            Opt-in
          </button>
        )}
      </div>

      {consent?.consent_given ? (
        <div className="space-y-4">
          <div className="flex items-center gap-2">
            <span className="text-green-600">✓</span>
            <span className="text-sm text-gray-700">
              Je hebt toestemming gegeven voor geanonimiseerde data sharing
            </span>
          </div>

          <div className="text-sm text-gray-600 space-y-2">
            <p>
              <strong>Gedeelde data types:</strong>
            </p>
            <ul className="list-disc list-inside space-y-1">
              {consent.share_cases && <li>Casussen (geanonimiseerd)</li>}
              {consent.share_sessions && <li>Sessies (geanonimiseerd)</li>}
              {consent.share_materials && <li>Materiaal</li>}
            </ul>
          </div>

          <div className="bg-blue-50 border border-blue-200 rounded p-3">
            <p className="text-sm text-blue-800">
              <strong>Privacy garantie:</strong> Alle data wordt volledig geanonimiseerd
              voordat het wordt gebruikt voor model training. Geen persoonsgegevens worden
              gedeeld.
            </p>
          </div>

          <button
            onClick={() => revokeMutation.mutate()}
            className="px-4 py-2 text-sm text-red-600 border border-red-300 rounded-md hover:bg-red-50"
          >
            Toestemming intrekken
          </button>
        </div>
      ) : (
        <div className="text-sm text-gray-600">
          <p>
            Help het model verbeteren door geanonimiseerde data te delen voor training.
            Alle persoonsgegevens worden verwijderd voordat data wordt gedeeld.
          </p>
        </div>
      )}

      {showModal && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
          <div className="bg-white rounded-lg p-6 max-w-md w-full mx-4">
            <h3 className="text-lg font-semibold mb-4">Data Sharing Toestemming</h3>
            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="space-y-2">
                <label className="flex items-center gap-2">
                  <input type="checkbox" name="share_cases" className="rounded" />
                  <span className="text-sm">Deel casussen (geanonimiseerd)</span>
                </label>
                <label className="flex items-center gap-2">
                  <input type="checkbox" name="share_sessions" className="rounded" />
                  <span className="text-sm">Deel sessies (geanonimiseerd)</span>
                </label>
                <label className="flex items-center gap-2">
                  <input type="checkbox" name="share_materials" className="rounded" />
                  <span className="text-sm">Deel coaching materiaal</span>
                </label>
              </div>

              <div className="bg-yellow-50 border border-yellow-200 rounded p-3">
                <p className="text-xs text-yellow-800">
                  Alle data wordt volledig geanonimiseerd voordat het wordt gebruikt.
                  Je kunt deze toestemming altijd intrekken.
                </p>
              </div>

              <div className="flex gap-2">
                <button
                  type="submit"
                  className="flex-1 px-4 py-2 bg-primary-600 text-white rounded-md hover:bg-primary-700"
                >
                  Toestemming geven
                </button>
                <button
                  type="button"
                  onClick={() => setShowModal(false)}
                  className="px-4 py-2 border border-gray-300 rounded-md hover:bg-gray-50"
                >
                  Annuleren
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  )
}





