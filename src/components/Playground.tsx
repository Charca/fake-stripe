import { useEffect, useState } from 'react'

function Playground() {
  const [state, setState] = useState({ state: 'loading', username: '' })

  function setLoggedInState(username: string) {
    setState({ state: 'logged-in', username })
  }

  function setLoggedOutState() {
    setState({ state: 'logged-out', username: '' })
  }

  async function getUsername() {
    try {
      const response = await fetch('/api/username')
      const data = await response.json()
      if (data.username) {
        setLoggedInState(data.username)
      } else {
        setLoggedOutState()
      }
    } catch (error) {
      console.error(error)
      setLoggedOutState()
    }
  }

  useEffect(() => {
    getUsername()
  }, [])

  return (
    <div>
      <h1>Playground</h1>
      {state.state === 'loading' && <p>Loading...</p>}
      {state.state === 'logged-in' && <p>Hello {state.username}</p>}
      {state.state === 'logged-out' && (
        <p>
          <a href="/login">Login</a> to use this playground
        </p>
      )}
    </div>
  )
}

export default Playground
