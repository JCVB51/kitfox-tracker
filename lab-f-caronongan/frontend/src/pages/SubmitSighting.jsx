import { useState } from 'react'
import { createSighting } from '../services/sightingsApi.js'

function SubmitSighting() {
  const [observerName, setObserverName] = useState('')
  const [sightingDate, setSightingDate] = useState('')
  const [locationName, setLocationName] = useState('')
  const [message, setMessage] = useState('')
  const [error, setError] = useState('')
  const [submitting, setSubmitting] = useState(false)

  async function handleSubmit(event) {
    event.preventDefault()

    setMessage('')
    setError('')
    setSubmitting(true)

    const newSighting = {
      observer_name: observerName,
      sighting_date: sightingDate,
      location_name: locationName,
    }

    try {
      const data = await createSighting(newSighting)

      setMessage(`Sighting created with ID ${data.id}.`)
      setObserverName('')
      setSightingDate('')
      setLocationName('')
    } catch (err) {
      console.error(err)
      setError('Could not submit the sighting.')
    } finally {
      setSubmitting(false)
    }
  }

  return (
    <section>
      <h2>Submit a Sighting</h2>

      <form onSubmit={handleSubmit}>
        <label>
          Observer Name
          <input
            type="text"
            value={observerName}
            onChange={(event) => setObserverName(event.target.value)}
            required
          />
        </label>

        <label>
          Sighting Date
          <input
            type="date"
            value={sightingDate}
            onChange={(event) => setSightingDate(event.target.value)}
            required
          />
        </label>

        <label>
          Location Name
          <input
            type="text"
            value={locationName}
            onChange={(event) => setLocationName(event.target.value)}
            required
          />
        </label>

        <button type="submit" disabled={submitting}>
          {submitting ? 'Submitting...' : 'Submit Sighting'}
        </button>
      </form>

      {message && <p>{message}</p>}
      {error && <p>{error}</p>}
    </section>
  )
}

export default SubmitSighting