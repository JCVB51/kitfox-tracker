import { API_BASE_URL } from '../api.js'

async function handleResponse(response) {
  if (!response.ok) {
    throw new Error(`API request failed with status ${response.status}`)
  }

  return response.json()
}

export async function getSightings() {
  const response = await fetch(`${API_BASE_URL}/sightings`)
  return handleResponse(response)
}

export async function createSighting(newSighting) {
  const response = await fetch(`${API_BASE_URL}/sightings`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(newSighting),
  })

  return handleResponse(response)
}