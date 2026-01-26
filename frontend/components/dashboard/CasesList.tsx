'use client'

import { useQuery, useMutation, useQueryClient } from '@tanstack/react-query'
import { casesApi, CreateCase } from '@/lib/api/cases'
import { useState } from 'react'

export default function CasesList() {
  const [showCreateForm, setShowCreateForm] = useState(false)
  const queryClient = useQueryClient()

  const { data: cases, isLoading } = useQuery({
    queryKey: ['cases'],
    queryFn: () => casesApi.getCases(),
  })

  const createCaseMutation = useMutation({
    mutationFn: (data: CreateCase) => casesApi.createCase(data),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['cases'] })
      setShowCreateForm(false)
    },
  })

  const handleCreateCase = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    const formData = new FormData(e.currentTarget)
    const data: CreateCase = {
      client_name: formData.get('client_name') as string,
      status: 'active',
      tags: [],
      goals: [],
      notes: formData.get('notes') as string || undefined,
    }
    createCaseMutation.mutate(data)
  }

  if (isLoading) {
    return <div className="text-center py-8">Laden...</div>
  }

  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <h2 className="text-xl font-semibold text-gray-900">Casussen</h2>
        <button
          onClick={() => setShowCreateForm(!showCreateForm)}
          className="px-4 py-2 bg-primary-600 text-white rounded-md hover:bg-primary-700"
        >
          {showCreateForm ? 'Annuleren' : 'Nieuwe Casus'}
        </button>
      </div>

      {showCreateForm && (
        <div className="bg-white p-6 rounded-lg shadow">
          <form onSubmit={handleCreateCase} className="space-y-4">
            <div>
              <label className="block text-sm font-medium text-gray-700">
                Cliënt naam (wordt automatisch geanonimiseerd)
              </label>
              <input
                type="text"
                name="client_name"
                required
                className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700">
                Notities (worden automatisch geanonimiseerd)
              </label>
              <textarea
                name="notes"
                rows={4}
                className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md"
              />
            </div>
            <button
              type="submit"
              className="px-4 py-2 bg-primary-600 text-white rounded-md hover:bg-primary-700"
            >
              Casus Aanmaken
            </button>
          </form>
        </div>
      )}

      <div className="bg-white shadow rounded-lg overflow-hidden">
        {cases && cases.length > 0 ? (
          <ul className="divide-y divide-gray-200">
            {cases.map((caseItem) => (
              <li key={caseItem.id} className="p-6 hover:bg-gray-50">
                <div className="flex justify-between items-start">
                  <div>
                    <h3 className="text-lg font-medium text-gray-900">
                      {caseItem.client_pseudonym}
                    </h3>
                    <p className="mt-1 text-sm text-gray-500">
                      Status: {caseItem.status}
                    </p>
                    {caseItem.notes && (
                      <p className="mt-2 text-sm text-gray-700">{caseItem.notes}</p>
                    )}
                  </div>
                  <span className="privacy-badge">Geanonimiseerd</span>
                </div>
              </li>
            ))}
          </ul>
        ) : (
          <div className="p-6 text-center text-gray-500">
            Geen casussen gevonden. Maak je eerste casus aan.
          </div>
        )}
      </div>
    </div>
  )
}








