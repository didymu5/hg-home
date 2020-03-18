import React, {useEffect, useState} from 'react'
import Example from './Example'
import useFetch from 'use-http'
import './App.css'
const url = window.location.href + 'test.json'
function App() {
  const [greeting, setGreeting] = useState()
  const { data, loading, error } = useFetch(url, {data: 'hi'})
  const [request, response] = useFetch(url)
  useEffect( () => {
    getData()
  }, [])
  const getData = async () => {
    const data = await request.get()
    console.log(data)
    setGreeting(data)
  }
  return (
    <div>
    {loading && 'Loading...'}
    {JSON.stringify(greeting)}
    <p>{JSON.stringify(data)} {data}</p>
    {JSON.stringify(error)}
    <hr />
    </div>
  )
}

export default App