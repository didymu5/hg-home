import { useState, useEffect } from 'react'
const useFetch = (url, options) => {
  const [response, setResponse] = useState(null)
  const [data, setData] = useState(null)
  const [error, setError] = useState(null)
  const [loading, setLoading] = useState(true)
  useEffect(() => {
    window
      .fetch(url, options)
      .then(response => {
        return response.json()
      })
      .then(resJSON => {
        setResponse(resJSON)
        setLoading(false)
        setData(resJSON)
        return resJSON
      })
      .catch(err => {
        setError(err)
      })
  }, [])
  return { response, error, loading, data }
}
export default useFetch
