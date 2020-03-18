import React, {useEffect, useState} from 'react'
import useFetch from './useFetch'
import './App.css'
const url = 'https://coronavirus-19-api.herokuapp.com/all'
function App() {
  const [greeting, setGreeting] = useState()
  const { response, error, loading, data } = useFetch(url, {})
  useEffect(() => {
    getData()
  }, [data])
  const getData = async () => { console.log(response)
    console.log('data: ', data)
    setGreeting(data)
  }
  return (
    <div>
    <p>{loading && '...Loading'}</p>
    <p>response {JSON.stringify(greeting)}</p>
    
    <p>data: {JSON.stringify(data)}</p>
    </div>
  )
}

export default App