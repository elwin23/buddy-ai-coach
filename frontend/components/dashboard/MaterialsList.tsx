'use client'

import { useState } from 'react'

export default function MaterialsList() {
  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <h2 className="text-xl font-semibold text-gray-900">Coaching Materiaal</h2>
        <button className="px-4 py-2 bg-primary-600 text-white rounded-md hover:bg-primary-700">
          Upload Materiaal
        </button>
      </div>

      <div className="bg-white shadow rounded-lg p-6">
        <p className="text-gray-600">
          Upload coaching materiaal (PDF, DOCX, TXT) om het beschikbaar te maken voor de AI chat.
        </p>
        <p className="text-sm text-gray-500 mt-2">
          Materiaal wordt automatisch geïndexeerd en doorzoekbaar gemaakt.
        </p>
      </div>
    </div>
  )
}








