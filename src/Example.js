import React from 'react'
import useFetch from 'use-http'

const url = window.location.href + 'test.json'

function Example () {
  const [request, response] = useFetch(url)
  const handleClick = () => request.get()

  // onMount
  const { data, loading } = useFetch(url, [])

  const reqs = {
    'useFetch, array destructuring, request.get()': {
      data: response.data,
      onClick: handleClick,
      loading: request.loading
    },
    'useFetch, object destructuring onMount, get()': {
      data,
      loading
    }
  }

  return (
    <div>
      {Object.entries(reqs).map(([name, { data, onClick, loading }]) => (
        <div key={name}>
          <h2>{name}</h2>
          {onClick && <button onClick={onClick}> Click Me</button>}
          
          {loading
            ? 'Loading...'
            : data && (
                <code style={{ display: 'block', color: 'black' }}>
                  <pre>{JSON.stringify(data, null, 2)}</pre>
                </code>
              )}
        </div>
      ))}
    </div>
  )
}

export default Example
// const chuckUrl = 'https://api.icndb.com/jokes/random/%3FlimitTo=[nerdy]&escape=javascript' // handles POST too
// const githubUrl = 'https://api.github.com/search/repositories?q=use-http'
// const slowUrl = 'https://httpbin.org/delay/3'
// const postUrl = 'https://jsonplaceholder.typicode.com/posts' // POST
// const allUrl = 'https://jsonplaceholder.typicode.com/posts/1' // all except POST
